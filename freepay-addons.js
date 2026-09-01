/* =====================================================
   FreePay Addons — tickets, daily counters, tasks revamp,
   lucky wheel, shop revamp.
   Loaded AFTER js/ProfSec.js — reuses its top-level
   `_supabase`, `tg`, `user`, `a` (user id) bindings.
   ===================================================== */

/* ---------------- Coins helper (writes to Supabase, same
   table/pattern used everywhere else in ProfSec.js) -------- */
async function fpAddCoins(amount) {
  try {
    const { data: row } = await _supabase.from('telusersinfo').select('*').eq('id', a).single();
    const newPoint = (row && row.point ? row.point : 0) + amount;
    await _supabase.from('telusersinfo').update({ point: newPoint }).eq('id', a);
    document.querySelectorAll('#pointvalue, #pointvalue3').forEach(el => { el.textContent = newPoint; });
    return newPoint;
  } catch (e) {
    console.error('fpAddCoins error', e);
  }
}

/* ---------------- Tickets (localStorage only) -------------- */
const FP_TICKETS_KEY = 'fp_tickets';
function fpGetTickets() { return parseInt(localStorage.getItem(FP_TICKETS_KEY) || '0', 10); }
function fpSetTickets(v) { localStorage.setItem(FP_TICKETS_KEY, String(Math.max(0, v))); fpRenderTickets(); }
function fpAddTickets(n) { fpSetTickets(fpGetTickets() + n); }
function fpRenderTickets() {
  const el = document.getElementById('ticketvalue');
  if (el) el.textContent = fpGetTickets();
  const spinBtn = document.getElementById('fpSpinBtn');
  if (spinBtn && !fpWheelSpinning) spinBtn.disabled = fpGetTickets() < 5;
}

/* ---------------- Daily block-ad counter (localStorage) ---- */
function fpToday() { const d = new Date(); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; }
const FP_DAILY_KEY = 'fp_daily_block_ads';
function fpGetDailyCount() {
  const raw = JSON.parse(localStorage.getItem(FP_DAILY_KEY) || 'null');
  if (!raw || raw.date !== fpToday()) return 0;
  return raw.count;
}
function fpIncrementDailyCount() {
  const raw = JSON.parse(localStorage.getItem(FP_DAILY_KEY) || 'null');
  const count = (!raw || raw.date !== fpToday()) ? 1 : raw.count + 1;
  localStorage.setItem(FP_DAILY_KEY, JSON.stringify({ date: fpToday(), count }));
  fpRenderDailyCount();
}
function fpRenderDailyCount() {
  const c = fpGetDailyCount();
  ['fpDailyCountShop', 'fpDailyCountTasks'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = c;
  });
  const gramTask = document.getElementById('fpLinkTask_gram_piarbot');
  if (gramTask) gramTask.style.display = c > 2 ? 'flex' : 'none';
}

/* ---------------- Block-style AdsGram task (task-45486) ---- */
function fpSetupBlockTask(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.addEventListener('reward', () => {
    fpAddTickets(1);
    fpIncrementDailyCount();
    Swal.fire({ title: 'Earned 1 ticket!', icon: 'success', draggable: true });
  });
  el.addEventListener('onError', () => Swal.fire({ title: 'Ad error, try again later', icon: 'error' }));
  el.addEventListener('onBannerNotFound', () => Swal.fire({ title: 'No ad available right now', icon: 'info' }));
}

/* ---------------- Video rewarded ad task (block 45480) ----- */
/* NOTE: assumes `AdController` is a global exposed by one of the
   ad SDK scripts already loaded in index.html. If your ad
   network requires the block id to be passed into .show(),
   adjust the call below (e.g. AdController.show(45480)). */
let fpVideoState = { leftDetected: false, watching: false };

function fpSetupVisibilityWatch() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && fpVideoState.watching) fpVideoState.leftDetected = true;
  });
  window.addEventListener('blur', () => {
    if (fpVideoState.watching) fpVideoState.leftDetected = true;
  });
}

function fpStartVideoTask() {
  const watchBtn = document.getElementById('fpVideoWatchBtn');
  if (!watchBtn || watchBtn.disabled) return;
  if (typeof AdController === 'undefined') {
    Swal.fire({ title: 'Ad is not ready yet', icon: 'error' });
    return;
  }
  fpVideoState = { leftDetected: false, watching: true };
  watchBtn.disabled = true;
  AdController.show().then(() => {
    fpVideoState.watching = false;
    fpShowVideoClaimStep();
  }).catch(() => {
    fpVideoState.watching = false;
    fpResetVideoNoCooldown();
  });
}

function fpShowVideoClaimStep() {
  const claimWrap = document.getElementById('fpVideoClaimWrap');
  const watchBtn = document.getElementById('fpVideoWatchBtn');
  watchBtn.style.display = 'none';
  claimWrap.style.display = 'flex';

  if (!fpVideoState.leftDetected) {
    claimWrap.innerHTML = '<p class="fp-task-hint">Click on the video ad to receive the reward</p>';
    setTimeout(fpResetVideoNoCooldown, 3000);
    return;
  }

  let remain = 5;
  claimWrap.innerHTML = `<button class="fp-task-btn" id="fpVideoClaimBtn" disabled>${remain}s</button>`;
  const btn = document.getElementById('fpVideoClaimBtn');
  const iv = setInterval(() => {
    remain -= 1;
    if (remain <= 0) {
      clearInterval(iv);
      btn.textContent = 'Claim';
      btn.disabled = false;
      btn.onclick = fpClaimVideoReward;
    } else {
      btn.textContent = `${remain}s`;
    }
  }, 1000);
}

function fpClaimVideoReward() {
  fpAddTickets(1);
  Swal.fire({ title: 'Earned 1 ticket!', icon: 'success', draggable: true });
  fpResetVideoTask();
  fpStartVideoCooldown(30);
}

function fpResetVideoTask() {
  const claimWrap = document.getElementById('fpVideoClaimWrap');
  claimWrap.style.display = 'none';
  claimWrap.innerHTML = '';
}

function fpResetVideoNoCooldown() {
  fpResetVideoTask();
  const watchBtn = document.getElementById('fpVideoWatchBtn');
  watchBtn.style.display = 'flex';
  watchBtn.disabled = false;
  watchBtn.textContent = 'Watch';
}

function fpStartVideoCooldown(seconds) {
  const watchBtn = document.getElementById('fpVideoWatchBtn');
  watchBtn.style.display = 'flex';
  watchBtn.disabled = true;
  let remain = seconds;
  watchBtn.textContent = `${remain}s`;
  const iv = setInterval(() => {
    remain -= 1;
    if (remain <= 0) {
      clearInterval(iv);
      watchBtn.disabled = false;
      watchBtn.textContent = 'Watch';
    } else {
      watchBtn.textContent = `${remain}s`;
    }
  }, 1000);
}

/* ---------------- Link tasks (daily-once, give 1 ticket) ---- */
const FP_LINK_TASKS = [
  { id: 'amin_az', url: 'https://who-tma.github.io/AminAz/', title: 'Daily Check-in', subtitle: 'Open the daily check-in page', icon: '📅' },
  { id: 'luckyroom', url: 'https://t.me/coin_earn_2026bot/luckyroom?startapp=6413998670', title: 'Lucky Room', subtitle: 'Visit Lucky Room mini app', icon: '🎰' },
  { id: 'gram_piarbot', url: 'https://t.me/gram_piarbot?start=6413998670', title: 'Gram Bot', subtitle: 'Open the Gram bot', icon: '💎' },
];
const FP_LINK_COOLDOWN_MS = 24 * 60 * 60 * 1000;

function fpRenderLinkTasks() {
  const container = document.getElementById('fpLinkTasksContainer');
  if (!container) return;
  container.innerHTML = '';
  FP_LINK_TASKS.forEach(t => {
    const last = parseInt(localStorage.getItem(`fp_link_${t.id}`) || '0', 10);
    const remain = FP_LINK_COOLDOWN_MS - (Date.now() - last);
    const card = document.createElement('div');
    card.className = 'fp-link-task';
    card.id = `fpLinkTask_${t.id}`;
    if (t.id === 'gram_piarbot') card.style.display = fpGetDailyCount() > 2 ? 'flex' : 'none';
    card.innerHTML = `
      <div class="fp-task-icon">${t.icon}</div>
      <div class="fp-task-info">
        <p class="fp-task-title">${t.title}</p>
        <p class="fp-task-subtitle">${t.subtitle}</p>
        ${remain > 0 ? `<p class="fp-cooldown" id="fpCooldown_${t.id}"></p>` : '<p class="fp-ticket-reward">+1 🎫</p>'}
      </div>
      <button class="fp-task-btn" id="fpLinkBtn_${t.id}" ${remain > 0 ? 'disabled' : ''}>${remain > 0 ? 'Unavailable' : 'Go'}</button>
    `;
    container.appendChild(card);
    if (remain > 0) {
      fpStartLinkCountdown(t.id, remain);
    } else {
      document.getElementById(`fpLinkBtn_${t.id}`).addEventListener('click', () => fpDoLinkTask(t));
    }
  });
}

function fpStartLinkCountdown(id, remainMs) {
  const label = document.getElementById(`fpCooldown_${id}`);
  let remain = remainMs;
  const iv = setInterval(() => {
    remain -= 1000;
    if (remain <= 0) {
      clearInterval(iv);
      fpRenderLinkTasks();
      return;
    }
    const h = Math.floor(remain / 3600000);
    const m = Math.floor((remain % 3600000) / 60000);
    const s = Math.floor((remain % 60000) / 1000);
    if (label) label.textContent = `Next: ${h}h ${m}m ${s}s`;
  }, 1000);
}

function fpDoLinkTask(t) {
  try {
    if (t.url.includes('t.me/') && tg && tg.openTelegramLink) {
      tg.openTelegramLink(t.url);
    } else {
      window.open(t.url, '_blank');
    }
  } catch (e) {
    window.open(t.url, '_blank');
  }
  localStorage.setItem(`fp_link_${t.id}`, String(Date.now()));
  fpAddTickets(1);
  fpRenderLinkTasks();
}

/* ---------------- Lucky Wheel (Home) ------------------------ */
const FP_WHEEL_SLOTS = [
  { value: 10, weight: 15 },
  { value: 5, weight: 17.5 },
  { value: 5, weight: 17.5 },
  { value: 3, weight: 16.667 },
  { value: 4, weight: 16.667 },
  { value: 0, weight: 16.666 },
];
let fpWheelSpinning = false;
let fpWheelRotation = 0;

function fpPickWeightedSlot() {
  const total = FP_WHEEL_SLOTS.reduce((s, x) => s + x.weight, 0);
  let r = Math.random() * total;
  for (let i = 0; i < FP_WHEEL_SLOTS.length; i++) {
    r -= FP_WHEEL_SLOTS[i].weight;
    if (r <= 0) return i;
  }
  return FP_WHEEL_SLOTS.length - 1;
}

function fpRenderWheelLabels() {
  const layer = document.getElementById('fpWheelLabels');
  if (!layer) return;
  layer.innerHTML = '';
  const slotAngle = 360 / FP_WHEEL_SLOTS.length;
  FP_WHEEL_SLOTS.forEach((slot, i) => {
    const angle = i * slotAngle + slotAngle / 2;
    const label = document.createElement('div');
    label.className = 'fp-wheel-slot';
    label.style.transform = `translate(-50%,-50%) rotate(${angle}deg) translateY(-4.2rem) rotate(${-angle}deg)`;
    label.textContent = slot.value > 0 ? String(slot.value) : 'X';
    layer.appendChild(label);
  });
}

function fpSpinWheel() {
  if (fpWheelSpinning) return;
  if (fpGetTickets() < 5) {
    Swal.fire({ title: 'You need 5 tickets to spin', icon: 'warning' });
    return;
  }
  fpWheelSpinning = true;
  fpSetTickets(fpGetTickets() - 5);
  const spinBtn = document.getElementById('fpSpinBtn');
  if (spinBtn) spinBtn.disabled = true;

  const idx = fpPickWeightedSlot();
  const slotAngle = 360 / FP_WHEEL_SLOTS.length;
  const targetCenter = idx * slotAngle + slotAngle / 2;
  const spins = 5;
  const finalRotation = fpWheelRotation - (fpWheelRotation % 360) + spins * 360 + (360 - targetCenter);
  fpWheelRotation = finalRotation;

  const wheelEl = document.getElementById('fpWheel');
  if (wheelEl) wheelEl.style.transform = `rotate(${finalRotation}deg)`;

  setTimeout(() => {
    fpWheelSpinning = false;
    if (spinBtn) spinBtn.disabled = fpGetTickets() < 5;
    const reward = FP_WHEEL_SLOTS[idx].value;
    if (reward > 0) {
      fpAddCoins(reward);
      Swal.fire({ title: `You won ${reward} coins!`, icon: 'success' });
    } else {
      Swal.fire({ title: 'Empty slot — better luck next spin!', icon: 'info' });
    }
  }, 4600);
}

/* ---------------- Shop: top tabs + pack grid ---------------- */
function fpSetupShopTabs() {
  const nftsBtn = document.getElementById('fpShopNftsBtn');
  const leaderBtn = document.getElementById('fpShopLeaderBtn');
  const leaderPanel = document.getElementById('fpLeaderboardPanel');
  const packGrid = document.getElementById('fpPackGrid');
  if (!nftsBtn || !leaderBtn || !leaderPanel || !packGrid) return;

  nftsBtn.addEventListener('click', () => {
    window.location.href = 'https://thefreepay.github.io/FreePayNfts/';
    const loading = document.getElementById('LoadingGame');
    if (loading) loading.style.display = 'flex';
  });

  leaderBtn.addEventListener('click', () => {
    const showingLeaderboard = leaderPanel.style.display === 'flex';
    leaderPanel.style.display = showingLeaderboard ? 'none' : 'flex';
    packGrid.style.display = showingLeaderboard ? 'grid' : 'none';
    leaderBtn.classList.toggle('fp-active', !showingLeaderboard);
  });
}

/* ---------------- Gram pack claim modal ---------------------- */
const FP_GRAM_PRICE = 100;
async function fpSubmitGramClaim() {
  const input = document.getElementById('fpGramTgId');
  const tgId = input.value.trim();
  if (!tgId) {
    Swal.fire({ title: 'Enter your Telegram ID', icon: 'warning' });
    return;
  }
  try {
    const { data: row } = await _supabase.from('telusersinfo').select('*').eq('id', a).single();
    const current = row && row.point ? row.point : 0;
    if (current < FP_GRAM_PRICE) {
      Swal.fire({ title: 'Not enough coins', icon: 'error' });
      return;
    }
    const newPoint = current - FP_GRAM_PRICE;
    await _supabase.from('telusersinfo').update({ point: newPoint }).eq('id', a);
    document.querySelectorAll('#pointvalue, #pointvalue3').forEach(el => { el.textContent = newPoint; });
    document.getElementById('fpGramModal').classList.remove('fp-open');
    input.value = '';
    Swal.fire({ title: 'Purchased! Your order will be delivered soon.', icon: 'success' });
    // NOTE: coins are deducted here; hook up your own table/webhook
    // to actually record & fulfill the order using `tgId` and `a` (user id).
  } catch (e) {
    console.error(e);
    Swal.fire({ title: 'Something went wrong', icon: 'error' });
  }
}

function fpSetupGramModal() {
  const buyBtn = document.getElementById('fpGramBuyBtn');
  const modal = document.getElementById('fpGramModal');
  const cancelBtn = document.getElementById('fpGramCancel');
  const confirmBtn = document.getElementById('fpGramConfirm');
  if (!buyBtn || !modal) return;
  buyBtn.addEventListener('click', () => modal.classList.add('fp-open'));
  cancelBtn.addEventListener('click', () => modal.classList.remove('fp-open'));
  confirmBtn.addEventListener('click', fpSubmitGramClaim);
}

function fpSetupProfileModal() {
  const btn = document.getElementById('fpProfileBtn');
  const modal = document.getElementById('fpProfileModal');
  const closeBtn = document.getElementById('fpProfileClose');
  if (!btn || !modal) return;
  btn.addEventListener('click', () => {
    document.getElementById('fpModalName').textContent = document.getElementById('Userp').textContent;
    document.getElementById('fpModalFpId').textContent = document.getElementById('emailpp').textContent;
    document.getElementById('fpModalRank').textContent = document.getElementById('Rankpp').textContent;
    document.getElementById('fpModalLevel').textContent = document.getElementById('Levelpp').textContent;
    document.getElementById('fpModalPoints').textContent = document.getElementById('Pointsp').textContent;
    document.getElementById('fpModalReferral').textContent = document.getElementById('RefCount').textContent;
    modal.classList.add('fp-open');
  });
  closeBtn.addEventListener('click', () => modal.classList.remove('fp-open'));
}

/* ---------------- Init ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  fpRenderTickets();
  fpRenderDailyCount();
  fpRenderLinkTasks();
  fpRenderWheelLabels();
  fpSetupVisibilityWatch();
  fpSetupBlockTask('.taskGram2');
  fpSetupShopTabs();
  fpSetupGramModal();
  fpSetupProfileModal();

  const spinBtn = document.getElementById('fpSpinBtn');
  if (spinBtn) {
    spinBtn.disabled = fpGetTickets() < 5;
    spinBtn.addEventListener('click', fpSpinWheel);
  }
  const watchBtn = document.getElementById('fpVideoWatchBtn');
  if (watchBtn) watchBtn.addEventListener('click', fpStartVideoTask);
});
