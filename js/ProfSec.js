const _supabase = window.supabase.createClient(
  'https://nomuylulsjtwjoinrxmr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbXV5bHVsc2p0d2pvaW5yeG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzgwOTgsImV4cCI6MjA2MTI1NDA5OH0.9Vgp9y1EQkbH2GooJgUmXjW4NEA-WY8keL4P5S1tiIc'
);
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;

// RefFounder

const referrerId = tg.initDataUnsafe?.start_param;
// const referrerId = '56049568';

if (!user) {
window.location.href = "https://t.me/TheFreePayBot?start=true";
}

const Taskinput = document.getElementById('Taskinput');

const Profbtn = document.getElementById('Profileinput');
const shopbtn = document.getElementById('Shopinput');
// const earnbtn = document.getElementById('NFTsinput');
const task1FriendShare = document.getElementById('task1FriendShare');
const task5FriendShare = document.getElementById('task5FriendShare');
const task1Friend = document.getElementById('task1Friend');
const taskoneFInfo = document.getElementById('taskoneFInfo');
const taskFiveFInfo = document.getElementById('taskFiveFInfo');
const K1ScoreBtn = document.getElementById('K1ScoreBtn');
const K3ScoreBtn = document.getElementById('K3ScoreBtn');


const a = user.id;
// const a = '45645645';






async function telebot() {

  const { data2, error3 } = await _supabase
    .from('telusersinfo')
    .upsert({
      id: user.id,
      name: user.first_name,
      username: user.username,
      premium: user.is_premium,

    },
      { onConflict: ['id'] }
    )
    .select()


  // reffrall Cheker
  let { data: telusersinfo, error } = await _supabase
    .from('telusersinfo')
    .select('*')
    .eq('id', a)
    .single();

  if (error) {
    window.location.reload();
    // console.log('err');
  }

  const oneRefOk = telusersinfo.oneFriend;
  const FiveFriendOk = telusersinfo.FiveFriend;
  const RefCounter = telusersinfo.reffrallCount;
  const K1Score = telusersinfo.Score;
  const K3Score = telusersinfo.Score;

  const K3ScoreOk = telusersinfo.Reach3000Game;
  const K1ScoreOk = telusersinfo.Reach1000Score;



  taskoneFInfo.innerText = `${RefCounter}/1`;
  taskFiveFInfo.innerText = `${RefCounter}/5`;
  document.getElementById('Score1000info').innerText = `${K1Score}/1000`;
  document.getElementById('Score3000info').innerText = `${K1Score}/3000`;




  // AdsGramTask

  const task = document.querySelector(".taskGram");
  task.addEventListener("reward", (event) => {
    // event.detail contains your block id
    alert(`Reward in block ${event.detail}`);
  });

  task.addEventListener("onError", (event) => {
    alert(`Error during loading or render for block ${event.detail}`);
  });

  task.addEventListener("onBannerNotFound", (event) => {
    alert(`Can't found banner for block ${event.detail}`);
  });

  task.addEventListener("onTooLongSession", (event) => {
    alert('The session is too long. Please restart the app to get ads');
  });



  // task1FriendShare
  // task1Friend
  // OneriendTask
  if (oneRefOk == false && RefCounter >= 1) {
    console.log("Can");
    task1FriendShare.innerText = 'Claim';
    task1FriendShare.classList = 'TaskBtnClaim';
    document.getElementById('smallCircleTask').style.display = 'flex';
    task1FriendShare.addEventListener("click", () => {
      console.log("Ok");
      task1FriendShare.style.pointerEvents = 'none';
      async function TaskRef1() {
        let { data: telusersinfo, error3 } = await _supabase
          .from('telusersinfo')
          .select('*')
          .eq('id', a)
          .single();

        const { data1, error1 } = await _supabase
          .from('telusersinfo')
          .update({ oneFriend: 'true' })
          .eq('id', a)
          .select()
        let NewPoint = telusersinfo.point;
        NewPoint += 100;

        const { data, error } = await _supabase
          .from('telusersinfo')
          .update({ point: NewPoint })
          .eq('id', a)
          .select()
        console.log(data);

      } TaskRef1().then(() => {
        console.log('Update Ok ');
        task1FriendShare.classList = 'TaskBtn';
        task1FriendShare.innerText = 'Claimed';


      })
    })
  } else if (oneRefOk == true) {
    task1FriendShare.classList = 'TaskBtn';
    task1FriendShare.innerText = 'Claimed';
  } else {
    task1FriendShare.addEventListener('click', () => {
      window.location.href = `https://t.me/share/url?text=🎲%20Play%20games%20and%20become%20one%20of%20the%20lucky%20winners%20of%20Telegram%20gifts%20%26%20amazing%20prizes!%20Enter%20now%20via%20the%20link%20below%20and%20win%20big!%20🚀🌃%0A%0A👉%20https://t.me/TheFreePayBot/thefreepaygalaxy?start=ref_${a}`;
    })
    // console.log('Cant Claim');
  }
  // FiveFriendTask
  if (FiveFriendOk == false && RefCounter >= 5) {
    console.log("Can");
    task5FriendShare.innerText = 'Claim';
    task5FriendShare.classList = 'TaskBtnClaim';
    document.getElementById('smallCircleTask').style.display = 'flex';
    task5FriendShare.addEventListener("click", () => {
      console.log("Ok");
      task5FriendShare.style.pointerEvents = 'none';
      async function TaskRef1() {
        let { data: telusersinfo, error3 } = await _supabase
          .from('telusersinfo')
          .select('*')
          .eq('id', a)
          .single();



        const { data, error } = await _supabase
          .from('MedalsOwner')
          .insert([
            {
              MedalName: 'Cosmic Crown',
              Owner: a,


            },
          ])
          .select()










        const { data1, error1 } = await _supabase
          .from('telusersinfo')
          .update({ FiveFriend: 'true' })
          .eq('id', a)
          .select()

      } TaskRef1().then(() => {
        console.log('Update Ok ');
        task5FriendShare.classList = 'TaskBtn';
        task5FriendShare.innerText = 'Claimed';


      })
    })
  } else if (FiveFriendOk == true) {
    task5FriendShare.classList = 'TaskBtn';
    task5FriendShare.innerText = 'Claimed';
  } else {
    task1FriendShare.addEventListener('click', () => {
      window.location.href = `https://t.me/share/url?text=🎲%20Play%20games%20and%20become%20one%20of%20the%20lucky%20winners%20of%20Telegram%20gifts%20%26%20amazing%20prizes!%20Enter%20now%20via%20the%20link%20below%20and%20win%20big!%20🚀🌃%0A%0A👉%20https://t.me/TheFreePayBot/thefreepaygalaxy?start=ref_${a}`;
    })
  }

  // 1000ScoreTask

  if (K1ScoreOk == false && K1Score >= 1000) {
    console.log("Can 1K");
    K1ScoreBtn.innerText = 'Claim';
    K1ScoreBtn.classList = 'TaskBtnClaim';
    document.getElementById('smallCircleTask').style.display = 'flex';
    K1ScoreBtn.addEventListener("click", () => {
      console.log("Ok");
      K1ScoreBtn.style.pointerEvents = 'none';
      async function Task1KS() {
        let { data: telusersinfo, error3 } = await _supabase
          .from('telusersinfo')
          .select('*')
          .eq('id', a)
          .single();

        const { data1, error1 } = await _supabase
          .from('telusersinfo')
          .update({ Reach1000Score: 'true' })
          .eq('id', a)
          .select()
        let NewPoint = telusersinfo.point;
        NewPoint += 60;

        const { data, error } = await _supabase
          .from('telusersinfo')
          .update({ point: NewPoint })
          .eq('id', a)
          .select()
        console.log(data);

      } Task1KS().then(() => {
        console.log('Update Ok ');
        K1ScoreBtn.classList = 'TaskBtn';
        K1ScoreBtn.innerText = 'Claimed';


      })
    })
  } else if (K1ScoreOk == true) {
    K1ScoreBtn.classList = 'TaskBtn';
    K1ScoreBtn.innerText = 'Claimed';
  } else {
    K1ScoreBtn.addEventListener('click', () => {
      window.location.href = 'https://thefreepay.github.io/FreePayGalexy/';
      document.getElementById("LoadingGame").style.display = 'flex';
    })
  }



  // 3000ScoreTask

  if (K3ScoreOk == false && K3Score >= 3000) {
    console.log("Can 3000");
    K3ScoreBtn.innerText = 'Claim';
    K3ScoreBtn.classList = 'TaskBtnClaim';
    document.getElementById('smallCircleTask').style.display = 'flex';
    K3ScoreBtn.addEventListener("click", () => {
      console.log("Ok");
      K3ScoreBtn.style.pointerEvents = 'none';
      async function Task3KScore() {
        let { data: telusersinfo, error3 } = await _supabase
          .from('telusersinfo')
          .select('*')
          .eq('id', a)
          .single();



        const { data, error } = await _supabase
          .from('MedalsOwner')
          .insert([
            {
              MedalName: 'Neon Dragon',
              Owner: a,


            },
          ])
          .select()










        const { data1, error1 } = await _supabase
          .from('telusersinfo')
          .update({ Reach3000Game: 'true' })
          .eq('id', a)
          .select()

      } Task3KScore().then(() => {
        console.log('Update Ok ');
        K3ScoreBtn.classList = 'TaskBtn';
        K3ScoreBtn.innerText = 'Claimed';


      })
    })
  } else if (K3ScoreOk == true) {
    K3ScoreBtn.classList = 'TaskBtn';
    K3ScoreBtn.innerText = 'Claimed';
  } else {
    K3ScoreBtn.addEventListener('click', () => {
      window.location.href = 'https://thefreepay.github.io/FreePayGalexy/';
      document.getElementById("LoadingGame").style.display = 'flex';
    })
  }



  const reffrall = telusersinfo.reffrall;
  let pointChekerReward = telusersinfo.point;
  const RefReward = 50;
  const RefOkReward = pointChekerReward += RefReward;



  // RefFinder
  let { data: ReffIdAcountFounder, error2 } = await _supabase
    .from('telusersinfo')
    .select('*')
    .eq('id', referrerId)
    .single();



  // console.log(ReffIdAcountFounder);
  if (ReffIdAcountFounder) {
    // console.log("Ok");
    let RefAcFounderPoint = ReffIdAcountFounder.point;
    const RefAcReward = 50;
    const RefAcOkReward = RefAcFounderPoint += RefAcReward;
    let RefAcCounter = ReffIdAcountFounder.reffrallCount += 1;
    // console.log("Ref Founder :" + RefAcOkReward);




    let GameStartReady = false;

    if (reffrall < 1 && referrerId != a) {
      console.log("Ref dosnt found");
      document.getElementById('FriendInvateId').style.display = 'flex';




      // referrerId;
      document.getElementById('ClaimFriendGift').onclick = (() => {

        document.getElementById('ClaimFriendGift').style.pointerEvents = 'none';

        // Ref Recived Coin(Gift) Wen Click Claim
        async function RefOk() {
          const { data1, error1 } = await _supabase
            .from('telusersinfo')
            .update({ reffrall: `${referrerId}`, point: `${RefOkReward}` })
            .eq('id', a)
            .select()

          const { data, error } = await _supabase
            .from('telusersinfo')
            .update({ reffrallCount: `${RefAcCounter}`, point: `${RefAcOkReward}` })
            .eq('id', referrerId)
            .select()

        } RefOk().then(() => {
          document.getElementById('FriendInvateId').style.display = 'none';

          //play animation gift for that and display Start MiNiGames Info...
          GameStartReady = true;


          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "You received 50 coins as a gift.🎁",

          });

        })

        // Display MiniGame Info after 2sec... 
        setTimeout(() => {
          let animGift = document.getElementById('AnimDiv');
          let PInfo = document.getElementById('InfoAnimP');
          PInfo.style.color = `Gold`;
          PInfo.innerText = `Play MiniGames to earn more Coin!`;
          animGift.innerHTML = `<dotlottie-wc src="https://lottie.host/692d586b-662f-4229-8e86-47c671113a08/tYjA4GkyX3.lottie" style="width: 95%;height: 80%" id="AnimGiftId" autoplay loop></dotlottie-wc>`;
          document.getElementById('ClaimFriendGift').innerHTML = 'START';
          document.getElementById('ClaimFriendGift').style.pointerEvents = 'all';


          setTimeout(() => {
            document.getElementById('FriendInvateId').style.display = 'flex';

          }, 2000)
        }, 1000)








        document.getElementById('ClaimFriendGift').onclick = (() => {
          if (GameStartReady == true) {
            console.log('Play Game');
            GameStartReady = false;
            document.getElementById('FriendInvateId').style.display = 'none';
            Profbtn.className = '';
            shopbtn.className = '';
            // earnbtn.className = 'textshadowbtn';
            document.getElementById('profsec').style.display = 'none';
            document.getElementById('earnsec').style.display = 'flex';
            document.getElementById('shopsec').style.display = 'none';


          }
        })
      })






    } else {
      // console.log("RefCant");

    }
  } else {
    console.log("NotOk");
  }









  let points1 = telusersinfo.point;
  let fixedPoint = points1.toFixed(1);
  let UserFind = telusersinfo;
  if (UserFind.id) {
    document.getElementById('loadingPage').style.display = 'none';
  };


  if (telusersinfo.HalowGift == false) {

    document.getElementById('HalowinMedal').className = "HalowMedalOff";
    // document.getElementById('ShopAlertIcon').style.display = "none";
  } else if (telusersinfo.HalowGift == true) {
    // document.getElementById('ShopAlertIcon').style.display = "none";
    document.getElementById('HalowinMedal').className = "HalowMedalOn";

  }





  // ...........................Point Updating ...................
  setInterval(() => {
    async function PointUpdating() {
      let { data: telusersinfo, error1 } = await _supabase
        .from('telusersinfo')
        .select('*')
        .eq('id', a)
        .single();

      let info = telusersinfo;
      let points = info.point;
      let fixedPoint = points.toFixed(1);


      document.getElementById('pointvalue').textContent = `${fixedPoint}`;
      document.getElementById('pointvalue2').textContent = `${fixedPoint}`;
      document.getElementById('pointvalue3').textContent = `${fixedPoint}`;

    } PointUpdating();
  }, 2500)

  // ................info...........
  let info = telusersinfo;

  document.getElementById('pointvalue').innerText = `${fixedPoint}`;
  document.getElementById('emailpp').innerText = `FP: ${info.id}`;
  document.getElementById('Userp').innerText = `Name : ${info.name}`;
  document.getElementById('Ranks').innerText = ` ${info.rank}`;
  document.getElementById('Levelpp').innerText = `Level : ${info.level}`;
  document.getElementById('Pointsp').innerText = `Points : ${fixedPoint}`;
  document.getElementById('RedId').innerText = `${info.id}`;
  document.getElementById('RefCount').innerText = `Referral : ${info.reffrallCount}`
  document.getElementById('RefCopyId').addEventListener('click', () => {
    window.location.href = `https://t.me/share/url?text=Hey%20my%20friend!%F0%9F%8E%AE%0AJoin%20the%20game%20with%20my%20invite%20link%20and%20get%20extra%20coins%20%F0%9F%AA%99%0AReferral%20Code%3A%0A${info.id}%0AStart%20now!%F0%9F%91%87%0Ahttps%3A%2F%2Ft.me%2FTheFreePayBot%2FFreePayShop`;
  });









  if (info.name <= '') {
    console.log('aazzzzz');
    document.getElementById('Userp').style.display = 'none';
  }
  if (info.name.length >= 8) {

    let short_name = info.name.substring(0, 7);
    document.getElementById('Userp').innerText = `Name : ${short_name}...`;
  }

  // ..................Rank Mode ...............
  if (info.rank == "Silver") {

    document.getElementById('Ranks').style.color = "#c7c7c7";


    // ................SilverRank..................





  } else if (info.rank == "Golden") {




  } else if (info.rank == "Diamond") {

  };
















  // ......................POOP GAME SEC JS.................
  async function userifoo() {
    let { data: telusersinfo, error1 } = await _supabase
      .from('telusersinfo')
      .select('*')
      .eq('id', a)
      .single();

    let info = telusersinfo;
    let points = info.point;

    let X1 = document.getElementById('X1');
    let X2 = document.getElementById('X2');
    let X3 = document.getElementById('X3');
    let X4 = document.getElementById('X4');
    let Zarib4 = document.getElementById('Zarib4');
    let Zarib3 = document.getElementById('Zarib3');
    let Zarib2 = document.getElementById('Zarib2');
    let Zarib1 = document.getElementById('Zarib1');
    let CoinStartBtn = document.getElementById('CoinStart');
    let AMStart = document.getElementById('AMStart');
    let popdivscon1 = document.getElementById('popdivcon1');
    let xdivs1 = document.getElementById('xdivs1');

    let popdivscon2 = document.getElementById('popdivscon2');
    let xdivs2 = document.getElementById('xdivs3');

    let popdivscon3 = document.getElementById('popdivscon3');
    let xdivs3 = document.getElementById('xdivs2');

    let popdivscon4 = document.getElementById('popdivscon4');
    let xdivs4 = document.getElementById('xdivs4');

    const playalert = document.getElementById('playing');

    const p1As = document.getElementById('p1As');
    const PopLose = document.getElementById('PopLose');


    // gerd 
    let fixedPoint = points.toFixed(1);
    CoinStartBtn.value = 'Start (-5)';
    AMStart.value = 'Start (show ad)';
    document.getElementById('pointvalue2').textContent = `${fixedPoint}`;
    document.getElementById('pointvalue3').textContent = `${fixedPoint}`;

    // ...........................Point Updating ...................
    async function PointUpdating() {
      let { data: telusersinfo, error1 } = await _supabase
        .from('telusersinfo')
        .select('*')
        .eq('id', a)
        .single();

      let info = telusersinfo;
      let points = info.point;
      let fixedPoint = points.toFixed(1);
      document.getElementById('pointvalue2').textContent = `${fixedPoint}`;
      document.getElementById('pointvalue3').textContent = `${fixedPoint}`;

    };


    X2.className = 'Xinput';
    X3.className = 'Xinput';
    X4.className = 'Xinput';

    X1.addEventListener('click', () => {
      X1.className = 'ClickedZ';
      X2.className = 'Xinput';
      X3.className = 'Xinput';
      X4.className = 'Xinput';

      CoinStartBtn.value = 'Start (-5)';
      AMStart.style.pointerEvents = 'All';
      AMStart.value = 'Start (show ad)';
      AMStart.className = 'AMStartBTN';
      Zarib4.textContent = 'x1';
      Zarib3.textContent = 'x1';
      Zarib2.textContent = 'x1';
      Zarib1.textContent = 'x1';

      console.log('X1');
    })
    X2.addEventListener('click', () => {
      X2.className = 'ClickedZ';
      X1.className = 'Xinput';
      X3.className = 'Xinput';
      X4.className = 'Xinput';

      CoinStartBtn.value = 'Start (-10)';
      AMStart.style.pointerEvents = 'none';
      AMStart.value = 'Only for (x1)';
      AMStart.className = 'AMStartBTNCant';
      Zarib4.textContent = 'x2';
      Zarib3.textContent = 'x2';
      Zarib2.textContent = 'x2';
      Zarib1.textContent = 'x2';
      console.log('X2');
    })
    X3.addEventListener('click', () => {
      X3.className = 'ClickedZ';
      X2.className = 'Xinput';
      X1.className = 'Xinput';
      X4.className = 'Xinput';

      CoinStartBtn.value = 'Start (-20)';
      AMStart.style.pointerEvents = 'none';
      AMStart.value = 'Only for (x1)';
      AMStart.className = 'AMStartBTNCant';
      Zarib4.textContent = 'x4';
      Zarib3.textContent = 'x4';
      Zarib2.textContent = 'x4';
      Zarib1.textContent = 'x4';
      console.log('X3');

    })
    X4.addEventListener('click', () => {
      X4.className = 'ClickedZ';
      X2.className = 'Xinput';
      X3.className = 'Xinput';
      X1.className = 'Xinput';

      CoinStartBtn.value = 'Start (-50)';
      AMStart.style.pointerEvents = 'none';
      AMStart.value = 'Only for (x1)';
      AMStart.className = 'AMStartBTNCant';
      Zarib4.textContent = 'x16';
      Zarib3.textContent = 'x16';
      Zarib2.textContent = 'x16';
      Zarib1.textContent = 'x16';
      console.log('X4');
    })

    // .............p1...................
    const p11 = document.getElementById('Poop11');
    const p12 = document.getElementById('Poop12');
    const p13 = document.getElementById('Poop13');
    const p14 = document.getElementById('Poop14');
    // ................p2..................
    const p21 = document.getElementById('Poop21');
    const p22 = document.getElementById('Poop22');
    const p23 = document.getElementById('Poop23');
    const p24 = document.getElementById('Poop24');
    // ...............p13.ATTRIBUTE_NODE..........
    const p31 = document.getElementById('Poop31');
    const p32 = document.getElementById('Poop32');
    const p33 = document.getElementById('Poop33');
    const p34 = document.getElementById('Poop34');


    // .............p4...................
    const p41 = document.getElementById('Poop41');
    const p42 = document.getElementById('Poop42');
    const p43 = document.getElementById('Poop43');
    const p44 = document.getElementById('Poop44');

    // .............p1...................


    // ......................p2.........



    // .............p4...................
    p41.addEventListener('click', () => {
      const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
      function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
      }
      function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p41.style.backgroundImage = 'none';

        if (p1chose == "💩") {
          p41.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

          PopLose.style.pointerEvents = 'none';
          p42.style.pointerEvents = 'none';
          p43.style.pointerEvents = 'none';
          p44.style.pointerEvents = 'none';

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "Ooh you lose!!"
          });
          playalert.innerText = 'Ooh you lose';
          p3As.style.pointerEvents = 'none';


        };
      } LogRandomElementP1();
      console.log("p41");
    })
    p42.addEventListener('click', () => {
      const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
      function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
      }
      function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p42.style.backgroundImage = 'none';

        if (p1chose == "💩") {
          p42.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;
          p41.style.pointerEvents = 'none';
          p43.style.pointerEvents = 'none';
          p44.style.pointerEvents = 'none';

          PopLose.style.pointerEvents = 'none';
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "Ooh you lose!!"
          });


          playalert.innerText = 'Ooh you lose';
          p3As.style.pointerEvents = 'none';


        };
      } LogRandomElementP1();
      console.log("p42");
    })
    p43.addEventListener('click', () => {
      const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
      function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
      }
      function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p43.style.backgroundImage = 'none';

        if (p1chose == "💩") {
          p43.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;
          p41.style.pointerEvents = 'none';
          p42.style.pointerEvents = 'none';
          p44.style.pointerEvents = 'none';

          PopLose.style.pointerEvents = 'none';

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "Ooh you lose!!"
          });
          playalert.innerText = 'Ooh you lose';
          p3As.style.pointerEvents = 'none';


        };
      } LogRandomElementP1();
      console.log("p43");
    })
    p44.addEventListener('click', () => {
      const p1Numbs = ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"];
      function createArrayForP1() {
        return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
      }
      function LogRandomElementP1() {
        const arr1 = createArrayForP1();
        let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
        p44.style.backgroundImage = 'none';

        if (p1chose == "💩") {
          p44.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;
          p41.style.pointerEvents = 'none';
          p42.style.pointerEvents = 'none';
          p43.style.pointerEvents = 'none';

          PopLose.style.pointerEvents = 'none';

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "Ooh you lose!!"
          });
          playalert.innerText = 'Ooh you lose';
          p3As.style.pointerEvents = 'none';


        };
      } LogRandomElementP1();
      console.log("p44");
    })
    function StartTimer() {
      let counter = 12;
      const timerElement = document.getElementById('TimerId');
      const totalWidth = timerElement.offsetWidth;

      const interval = setInterval(() => {
        counter--;
        const widthPercent = (counter / 12) * 100;
        timerElement.style.width = `${widthPercent}%`;
        timerElement.textContent = counter > 0 ? counter : '0';

        if (counter <= 0) {
          clearInterval(interval);
          timerElement.style.width = '0%';
          console.log('ok');
          playalert.style.pointerEvents = 'all';
          PopLose.style.pointerEvents = 'none';
          playalert.innerText = 'Refresh to Play Again';
          p11.style.pointerEvents = 'none';
          p12.style.pointerEvents = 'none';
          p13.style.pointerEvents = 'none';
          p14.style.pointerEvents = 'none';
          p21.style.pointerEvents = 'none';
          p22.style.pointerEvents = 'none';
          p23.style.pointerEvents = 'none';
          p24.style.pointerEvents = 'none';
          p31.style.pointerEvents = 'none';
          p32.style.pointerEvents = 'none';
          p33.style.pointerEvents = 'none';
          p34.style.pointerEvents = 'none';
          p41.style.pointerEvents = 'none';
          p42.style.pointerEvents = 'none';
          p43.style.pointerEvents = 'none';
          p44.style.pointerEvents = 'none';
          window.TelegramAdsController.triggerInterstitialBanner().then((result) => {
            // alert(result);
          }).catch((result) => {
            // alert(result);
          });

          PointUpdating();
        }
      }, 1000);
    };





    CoinStartBtn.addEventListener('click', () => {
      playalert.style.pointerEvents = 'none';
      console.log('CoinBtn');
      X1.style.pointerEvents = 'none';
      X2.style.pointerEvents = 'none';
      X3.style.pointerEvents = 'none';
      X4.style.pointerEvents = 'none';

      if (X1.className == "ClickedZ") {
        // .............x1 on X1 .............
        console.log(`your point = ${points}`);
        if (points >= 5) {
          StartTimer();

          CoinStartBtn.value = 'Ready!!';
          CoinStartBtn.style.pointerEvents = 'none';
          AMStart.style.pointerEvents = 'none';
          AMStart.className = 'AMStartBTNCant';

          playalert.style.display = 'flex';
          CoinStartBtn.style.display = 'none';
          AMStart.style.display = 'none';

          popdivscon1.className = 'PoopDivCon1Off';
          xdivs1.className = 'XDivOff';
          popdivscon2.className = 'PoopDivConOff';
          xdivs2.className = 'XDivOff';
          popdivscon3.className = 'PoopDivConOff';
          xdivs3.className = 'XDivOff';
          popdivscon4.style.pointerEvents = 'all';
          xdivs3.style.pointerEvents = 'all';

          // start round one
          p11.addEventListener('click', () => {
            points -= 5;
            console.log(points);

            // console.log("p11");
            // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            playalert.style.pointerEvents = 'all';


            const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p11.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';






              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();

                p11.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim (${p1chose})`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }

            } LogRandomElementP1();

          });
          // ......................P12
          p12.addEventListener('click', () => {
            points -= 5;
            console.log(points);

            const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p12.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p12.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p12");
          });
          // ...........................p13
          p13.addEventListener('click', () => {
            points -= 5;
            console.log(points);

            const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p13.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();

                p13.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p13");
          })
          // ..............................p14
          p14.addEventListener('click', () => {
            points -= 5;
            console.log(points);

            const p1Numbs = [1.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p14.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();

                p14.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p14");
          });



          // ...................................P21 Start
          // ...................p2.........
          p21.addEventListener('click', () => {
            const p2Numbs = [3.01, 3.02, 3.02, 3.03, 3.04, 3.05, 3.06, 3.07, 3.08, 3.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p21.style.backgroundImage = 'none';

              if (p2chose == "💩") {

                p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();

                p21.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p21");

          })
          p22.addEventListener('click', () => {
            const p2Numbs = [3.01, 3.02, 3.02, 3.03, 3.04, 3.05, 3.06, 3.07, 3.08, 3.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p22.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();

                p22.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p22");
          })
          p23.addEventListener('click', () => {
            const p2Numbs = [3.01, 3.02, 3.02, 3.03, 3.04, 3.05, 3.06, 3.07, 3.08, 3.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p23.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();

                p23.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p23");
          })
          p24.addEventListener('click', () => {
            const p2Numbs = [3.01, 3.02, 3.02, 3.03, 3.04, 3.05, 3.06, 3.07, 3.08, 3.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p24.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();

                p24.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p24");
          })


          // .......................p3..........
          p31.addEventListener('click', () => {
            const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p31.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points3 = points += p1chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points3 })
                    .eq('id', a)
                } P1RewardedGiven();

                p31.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p31");
          })
          p32.addEventListener('click', () => {
            const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p32.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points3 = points += p1chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points3 })
                    .eq('id', a)
                } P1RewardedGiven();

                p32.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p32");
          })
          p33.addEventListener('click', () => {
            const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p33.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points3 = points += p1chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points3 })
                    .eq('id', a)
                } P1RewardedGiven();

                p33.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p33");
          })
          p34.addEventListener('click', () => {
            const p1Numbs = [2, "💩", 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p34.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points3 = points += p1chose;
                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points3 })
                    .eq('id', a)
                } P1RewardedGiven();

                p34.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p34");
          })



        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "You need more points!!"
          });

        }
        console.log("x1");

      } else if (X2.className == "ClickedZ") {
        // .............x1 on X1 .............

        console.log(`your point = ${points}`);
        if (points >= 10) {

          StartTimer();
          CoinStartBtn.value = 'Ready!!';
          CoinStartBtn.style.pointerEvents = 'none';
          AMStart.style.pointerEvents = 'none';
          AMStart.className = 'AMStartBTNCant';

          playalert.style.display = 'flex';
          CoinStartBtn.style.display = 'none';
          AMStart.style.display = 'none';

          popdivscon1.className = 'PoopDivCon1Off';
          xdivs1.className = 'XDivOff';
          popdivscon2.className = 'PoopDivConOff';
          xdivs2.className = 'XDivOff';
          popdivscon3.className = 'PoopDivConOff';
          xdivs3.className = 'XDivOff';
          popdivscon4.style.pointerEvents = 'all';
          xdivs3.style.pointerEvents = 'all';

          // start round ZX2
          p11.addEventListener('click', () => {
            points -= 10;
            // console.log("p11");
            // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            playalert.style.pointerEvents = 'all';


            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p11.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p11.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim (${p1chose})`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();

          });
          // ......................P2
          p12.addEventListener('click', () => {
            points -= 10;
            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p12.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p12.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p12");
          });
          // ...........................p13
          p13.addEventListener('click', () => {
            points -= 10;
            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p13.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p13.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p13");
          })
          // ..............................p14
          p14.addEventListener('click', () => {
            points -= 10;
            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p14.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p14.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p14");
          });

          // .................................p2.......
          p21.addEventListener('click', () => {
            const p2Numbs = [6.01, 6.02, 6.02, 6.03, 6.04, 6.05, 6.06, 6.07, 6.08, 6.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p21.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p21.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p21");

          })
          p22.addEventListener('click', () => {
            const p2Numbs = [6.01, 6.02, 6.02, 6.03, 6.04, 6.05, 6.06, 6.07, 6.08, 6.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p22.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p22.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p22");
          })
          p23.addEventListener('click', () => {
            const p2Numbs = [6.01, 6.02, 6.02, 6.03, 6.04, 6.05, 6.06, 6.07, 6.08, 6.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p23.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p23.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p23");
          })
          p24.addEventListener('click', () => {
            const p2Numbs = [6.01, 6.02, 6.02, 6.03, 6.04, 6.05, 6.06, 6.07, 6.08, 6.09];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p24.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p24.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p24");
          })

          // .......................p3..........
          p31.addEventListener('click', () => {
            const p1Numbs = ["💩", 3.09, 3.08, 3.07, 3.06, 3.05, 3.04, 3.03];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p31.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p31.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p31");
          })
          p32.addEventListener('click', () => {
            const p1Numbs = ["💩", 3.09, 3.08, 3.07, 3.06, 3.05, 3.04, 3.03];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p32.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p32.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p32");
          })
          p33.addEventListener('click', () => {
            const p1Numbs = ["💩", 3.09, 3.08, 3.07, 3.06, 3.05, 3.04, 3.03];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p33.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p33.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p33");
          })
          p34.addEventListener('click', () => {
            const p1Numbs = ["💩", 3.09, 3.08, 3.07, 3.06, 3.05, 3.04, 3.03];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p34.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p34.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p34");
          })

        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "You need more points!!"
          });

        }
        console.log("x1");

        console.log('X2');
      } else if (X3.className == "ClickedZ") {

        if (points >= 20) {
          StartTimer();
          CoinStartBtn.value = 'Ready!!';
          CoinStartBtn.style.pointerEvents = 'none';
          AMStart.style.pointerEvents = 'none';
          AMStart.className = 'AMStartBTNCant';

          playalert.style.display = 'flex';
          CoinStartBtn.style.display = 'none';
          AMStart.style.display = 'none';

          popdivscon1.className = 'PoopDivCon1Off';
          xdivs1.className = 'XDivOff';
          popdivscon2.className = 'PoopDivConOff';
          xdivs2.className = 'XDivOff';
          popdivscon3.className = 'PoopDivConOff';
          xdivs3.className = 'XDivOff';
          popdivscon4.style.pointerEvents = 'all';
          xdivs3.style.pointerEvents = 'all';

          StartTimer();
          CoinStartBtn.value = 'Ready!!';
          CoinStartBtn.style.pointerEvents = 'none';
          AMStart.style.pointerEvents = 'none';
          AMStart.className = 'AMStartBTNCant';

          playalert.style.display = 'flex';
          CoinStartBtn.style.display = 'none';
          AMStart.style.display = 'none';

          popdivscon1.className = 'PoopDivCon1Off';
          xdivs1.className = 'XDivOff';
          popdivscon2.className = 'PoopDivConOff';
          xdivs2.className = 'XDivOff';
          popdivscon3.className = 'PoopDivConOff';
          xdivs3.className = 'XDivOff';
          popdivscon4.style.pointerEvents = 'all';
          xdivs3.style.pointerEvents = 'all';
          // start round ZX4
          p11.addEventListener('click', () => {
            // console.log("p11");
            // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            playalert.style.pointerEvents = 'all';
            points -= 20;



            const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p11.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                p11.innerHTML = `<span
                style="color: Black; font-weight:bold;">${p1chose}</span>
              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                  class="bi bii bi-coin" viewBox="0 0 16 16">
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg></i>`;
                playalert.innerText = `Claim (${p1chose})`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }

            } LogRandomElementP1();


          });
          // ......................P2
          p12.addEventListener('click', () => {
            points -= 20;

            const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p12.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p12.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p12");
          });
          // ...........................p13
          p13.addEventListener('click', () => {
            points -= 20;

            const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p13.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p13.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p13");
          })
          // ..............................p14 x4
          p14.addEventListener('click', () => {

            points -= 20;
            const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p14.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p14.innerHTML = `<span
                            style="color: Black; font-weight:bold;">${p1chose}</span>
                          <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                              class="bi bii bi-coin" viewBox="0 0 16 16">
                              <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
          });

          // .................................p2.......
          p21.addEventListener('click', () => {

            const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p21.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p21.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p21");

          })
          p22.addEventListener('click', () => {
            const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p22.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p22.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p22");
          })
          p23.addEventListener('click', () => {
            const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p23.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p23.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p23");
          })
          p24.addEventListener('click', () => {
            const p2Numbs = [10.1, 10.2, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p24.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p24.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p24");
          })


          // .......................p3..........
          p31.addEventListener('click', () => {
            const p1Numbs = [10.01, "💩", 10.02, 10.03, 10.04, 10.05, 10.06, 10.07, 10.08];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p31.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p31.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p31");
          })
          p32.addEventListener('click', () => {
            const p1Numbs = [10.01, "💩", 10.02, 10.03, 10.04, 10.05, 10.06, 10.07, 10.08];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p32.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p32.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p32");
          })
          p33.addEventListener('click', () => {
            const p1Numbs = [10.01, "💩", 10.02, 10.03, 10.04, 10.05, 10.06, 10.07, 10.08];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p33.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p33.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p33");
          })
          p34.addEventListener('click', () => {
            const p1Numbs = [10.01, "💩", 10.02, 10.03, 10.04, 10.05, 10.06, 10.07, 10.08];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p34.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p34.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p34");
          })
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "You need more points!!"
          });

        }

        console.log('X4');
      } else if (X4.className == "ClickedZ") {

        console.log(`your point = ${points}`);
        if (points >= 50) {
          StartTimer();
          CoinStartBtn.value = 'Ready!!';
          CoinStartBtn.style.pointerEvents = 'none';
          AMStart.style.pointerEvents = 'none';
          AMStart.className = 'AMStartBTNCant';

          playalert.style.display = 'flex';
          CoinStartBtn.style.display = 'none';
          AMStart.style.display = 'none';

          popdivscon1.className = 'PoopDivCon1Off';
          xdivs1.className = 'XDivOff';
          popdivscon2.className = 'PoopDivConOff';
          xdivs2.className = 'XDivOff';
          popdivscon3.className = 'PoopDivConOff';
          xdivs3.className = 'XDivOff';
          popdivscon4.style.pointerEvents = 'all';
          xdivs3.style.pointerEvents = 'all';

          // start round ZX2
          p11.addEventListener('click', () => {
            points -= 50;
            // console.log("p11");
            // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            playalert.style.pointerEvents = 'all';


            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9,];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p11.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p11.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim (${p1chose})`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();

          });
          // ......................P2
          p12.addEventListener('click', () => {
            points -= 50;
            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p12.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p12.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p12");
          });
          // ...........................p13
          p13.addEventListener('click', () => {
            points -= 50;
            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p13.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p13.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p13");
          })
          // ..............................p14
          p14.addEventListener('click', () => {
            points -= 50;
            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p14.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p14.innerHTML = `<span
                                style="color: Black; font-weight:bold;">${p1chose}</span>
                              <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                  class="bi bii bi-coin" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDivOff';
                // popdivscon3.className = 'PoopDivCon';
                xdivs2.className = 'XDiv';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p1As.style.pointerEvents = 'none';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon4').style.zIndex = '5';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p14");
          });

          // .................................p2.......
          p21.addEventListener('click', () => {

            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p21.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p21.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p21");

          })
          p22.addEventListener('click', () => {
            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p22.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p22.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p22");
          })
          p23.addEventListener('click', () => {
            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p23.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p23.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p23");
          })
          p24.addEventListener('click', () => {
            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5];
            function createArrayForP2() {
              return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
            }
            function LogRandomElementP2() {
              const arr2 = createArrayForP2();
              let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
              p24.style.backgroundImage = 'none';

              if (p2chose == "💩") {
                p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p1As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p2chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p24.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p2chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs3.className = 'XDiv';
                xdivs2.className = 'XDivOff';
                popdivscon2.className = 'PoopDivCon';
                popdivscon3.className = 'PoopDivConOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p2As.style.pointerEvents = 'none';
                p3As.style.pointerEvents = 'all';
                popdivscon3.style.pointerEvents = 'all';
                document.getElementById('popdivscon3').style.zIndex = '6';





                console.log("you win");
              }
            } LogRandomElementP2();
            console.log("p24");
          })


          // .......................p3..........
          p31.addEventListener('click', () => {
            const p1Numbs = [10, "💩", 10.01, 10.02, 10.03, 10.04, 10.05, 10.06];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p31.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p31.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>

                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p31");
          })
          p32.addEventListener('click', () => {
            const p1Numbs = [10, "💩", 10.01, 10.02, 10.03, 10.04, 10.05, 10.06];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p32.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p32.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p32");
          })
          p33.addEventListener('click', () => {
            const p1Numbs = [10, "💩", 10.01, 10.02, 10.03, 10.04, 10.05, 10.06];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p33.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p33.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p33");
          })
          p34.addEventListener('click', () => {
            const p1Numbs = [10, "💩", 10.01, 10.02, 10.03, 10.04, 10.05, 10.06];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
            }
            function LogRandomElementP1() {
              const arr1 = createArrayForP1();
              let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
              p34.style.backgroundImage = 'none';

              if (p1chose == "💩") {
                p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                PopLose.style.pointerEvents = 'none';

                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "warning",
                  title: "Ooh you lose"
                });
                playalert.innerText = 'Ooh you lose';
                p3As.style.pointerEvents = 'none';


              } else {
                let points1 = points += p1chose;

                async function P1RewardedGiven() {
                  const { data1, error1 } = await _supabase.from("telusersinfo")
                    .update({ point: points1 })
                    .eq('id', a)
                } P1RewardedGiven();
                p34.innerHTML = `<span
                    style="color: Black; font-weight:bold;">${p1chose}</span>
                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                      class="bi bii bi-coin" viewBox="0 0 16 16">
                      <path
                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    </svg></i>`;
                playalert.innerText = `Claim`;
                document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                popdivscon1.className = 'PoopDivCon1Off';
                xdivs1.className = 'XDivOff';
                popdivscon3.className = 'PoopDivConOff';
                xdivs1.className = 'XDivOff';
                xdivs3.className = 'XDivOff';
                popdivscon2.className = 'PoopDivConOff';
                xdivs2.className = 'XDivOff';
                popdivscon4.className = 'PoopDivConOff';
                xdivs4.className = 'XDivOff';
                p3As.style.pointerEvents = 'none';
                popdivscon1.className = 'PoopDivCon1';
                xdivs1.className = 'XDiv';
                popdivscon1.style.pointerEvents = 'all';
                document.getElementById('popdivscon2').style.zIndex = '7';




                console.log("you win");







              }
            } LogRandomElementP1();
            console.log("p34");
          })

        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "You need more points!!"
          });

        }

        console.log('X16');
      }

    })


    let adon = true;
    AMStart.addEventListener('click', () => {
      AMStart.style.pointerEvents = 'none';
      AMStart.style.backgroundColor = 'Gray';
      if (adon == true) {
        adon = true;
        console.log(adon);

      }
      AMStart.value = '👇 Click the ad 👇';


      const adsNotFoundCallback = () => {
        adon = true;
        AMStart.value = 'Start (show ad)';
        AMStart.style.backgroundColor = 'Greenyellow';
        alert('Please try again a few minutes later or change your IP to 🇩🇪,🇬🇧 or 🇺🇲');
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });

        Toast.fire({
          icon: "error",
          title: "Please try again a few minutes later or change your IP to 🇩🇪,🇬🇧 or 🇺🇲"
        });
        AMStart.style.pointerEvents = 'all';
        // Write your code here in case we couldn't display ad
      };

      // Callback for REWARDED format
      const onClickRewardCallback = (adId) => {
        adon = false;
        AMStart.style.pointerEvents = 'all';
        AMStart.value = 'Click to Play !';
        AMStart.style.backgroundColor = 'Greenyellow';

        function StartTimer() {
          let counter = 12;
          const timerElement = document.getElementById('TimerId');
          const totalWidth = timerElement.offsetWidth;

          const interval = setInterval(() => {
            counter--;
            const widthPercent = (counter / 12) * 100;
            timerElement.style.width = `${widthPercent}%`;
            timerElement.textContent = counter > 0 ? counter : '0';

            if (counter <= 0) {
              clearInterval(interval);
              timerElement.style.width = '0%';
              console.log('ok');
              playalert.style.pointerEvents = 'all';
              PopLose.style.pointerEvents = 'none';
              playalert.innerText = 'Refresh to Play Again';
              p11.style.pointerEvents = 'none';
              p12.style.pointerEvents = 'none';
              p13.style.pointerEvents = 'none';
              p14.style.pointerEvents = 'none';
              p21.style.pointerEvents = 'none';
              p22.style.pointerEvents = 'none';
              p23.style.pointerEvents = 'none';
              p24.style.pointerEvents = 'none';
              p31.style.pointerEvents = 'none';
              p32.style.pointerEvents = 'none';
              p33.style.pointerEvents = 'none';
              p34.style.pointerEvents = 'none';
              p41.style.pointerEvents = 'none';
              p42.style.pointerEvents = 'none';
              p43.style.pointerEvents = 'none';
              p44.style.pointerEvents = 'none';


              PointUpdating();
            }
          }, 1000);
        };

        AMStart.addEventListener('click', () => {
          AMStart.style.pointerEvents = 'none';


          playalert.style.pointerEvents = 'none';
          X1.style.pointerEvents = 'none';
          X2.style.pointerEvents = 'none';
          X3.style.pointerEvents = 'none';
          X4.style.pointerEvents = 'none';

          if (X1.className == "ClickedZ") {
            // .............x1 on X1 .............

            if (AMStart.value == '👇 Click the ad 👇') {
              StartTimer();


              AMStart.style.pointerEvents = 'none';

              playalert.style.display = 'flex';
              CoinStartBtn.style.display = 'none';
              AMStart.style.display = 'none';

              popdivscon1.className = 'PoopDivCon1Off';
              xdivs1.className = 'XDivOff';
              popdivscon2.className = 'PoopDivConOff';
              xdivs2.className = 'XDivOff';
              popdivscon3.className = 'PoopDivConOff';
              xdivs3.className = 'XDivOff';
              popdivscon4.style.pointerEvents = 'all';
              xdivs3.style.pointerEvents = 'all';




              p11.addEventListener('click', () => {


                // console.log("p11");
                // after DTB Ok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                playalert.style.pointerEvents = 'all';


                const p1Numbs = [1.3, 1.4, 1.5, 1.6, 1.2, 1.1];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p11.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p11.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';






                  } else {
                    let points1 = points += p1chose;

                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p11.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim (${p1chose})`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDivOff';
                    // popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDiv';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p1As.style.pointerEvents = 'none';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon4').style.zIndex = '5';




                    console.log("you win");







                  }

                } LogRandomElementP1();

              });
              // ......................P12
              p12.addEventListener('click', () => {


                const p1Numbs = [1.3, 1.4, 1.5, 1.6, 1.2, 1.1];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p12.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p12.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';


                  } else {
                    let points1 = points += p1chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();
                    p12.innerHTML = `<span
                                    style="color: Black; font-weight:bold;">${p1chose}</span>
                                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                      class="bi bii bi-coin" viewBox="0 0 16 16">
                                      <path
                                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                    </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDivOff';
                    // popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDiv';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p1As.style.pointerEvents = 'none';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon4').style.zIndex = '5';




                    console.log("you win");







                  }
                } LogRandomElementP1();
                console.log("p12");
              });
              // ...........................p13
              p13.addEventListener('click', () => {


                const p1Numbs = [1.3, 1.4, 1.5, 1.6, 1.2, 1.1];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p13.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p13.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';


                  } else {
                    let points1 = points += p1chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p13.innerHTML = `<span
                                    style="color: Black; font-weight:bold;">${p1chose}</span>
                                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                      class="bi bii bi-coin" viewBox="0 0 16 16">
                                      <path
                                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                    </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDivOff';
                    // popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDiv';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p1As.style.pointerEvents = 'none';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon4').style.zIndex = '5';




                    console.log("you win");







                  }
                } LogRandomElementP1();
                console.log("p13");
              })
              // ..............................p14
              p14.addEventListener('click', () => {


                const p1Numbs = [1.3, 1.4, 1.5, 1.6, 1.2, 1.1];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(1);
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p14.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p14.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';


                  } else {
                    let points1 = points += p1chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p14.innerHTML = `<span
                                    style="color: Black; font-weight:bold;">${p1chose}</span>
                                  <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                      class="bi bii bi-coin" viewBox="0 0 16 16">
                                      <path
                                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                    </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDivOff';
                    // popdivscon3.className = 'PoopDivCon';
                    xdivs2.className = 'XDiv';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p1As.style.pointerEvents = 'none';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon4').style.zIndex = '5';




                    console.log("you win");







                  }
                } LogRandomElementP1();
                console.log("p14");
              });

              // ...................p2.........
              p21.addEventListener('click', () => {
                const p2Numbs = [0.3, 0.4, 0.5, 0.6, "💩", 0.2, 0.1];
                function createArrayForP2() {
                  return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                  const arr2 = createArrayForP2();
                  let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                  p21.style.backgroundImage = 'none';

                  if (p2chose == "💩") {

                    p21.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';


                  } else {
                    let points1 = points += p2chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p21.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p2chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs3.className = 'XDiv';
                    xdivs2.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivCon';
                    popdivscon3.className = 'PoopDivConOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p2As.style.pointerEvents = 'none';
                    p3As.style.pointerEvents = 'all';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon3').style.zIndex = '6';





                    console.log("you win");
                  }
                } LogRandomElementP2();
                console.log("p21");

              })
              p22.addEventListener('click', () => {
                const p2Numbs = [0.3, 0.4, 0.5, 0.6, "💩", 0.2, 0.1];
                function createArrayForP2() {
                  return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                  const arr2 = createArrayForP2();
                  let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                  p22.style.backgroundImage = 'none';

                  if (p2chose == "💩") {
                    p22.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';


                  } else {
                    let points1 = points += p2chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p22.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p2chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs3.className = 'XDiv';
                    xdivs2.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivCon';
                    popdivscon3.className = 'PoopDivConOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p2As.style.pointerEvents = 'none';
                    p3As.style.pointerEvents = 'all';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon3').style.zIndex = '6';





                    console.log("you win");
                  }
                } LogRandomElementP2();
                console.log("p22");
              })
              p23.addEventListener('click', () => {
                const p2Numbs = [0.3, 0.4, 0.5, 0.6, "💩", 0.2, 0.1];
                function createArrayForP2() {
                  return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                  const arr2 = createArrayForP2();
                  let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                  p23.style.backgroundImage = 'none';

                  if (p2chose == "💩") {
                    p23.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';


                  } else {
                    let points1 = points += p2chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p23.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p2chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs3.className = 'XDiv';
                    xdivs2.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivCon';
                    popdivscon3.className = 'PoopDivConOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p2As.style.pointerEvents = 'none';
                    p3As.style.pointerEvents = 'all';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon3').style.zIndex = '6';





                    console.log("you win");
                  }
                } LogRandomElementP2();
                console.log("p23");
              })
              p24.addEventListener('click', () => {
                const p2Numbs = [0.3, 0.4, 0.5, 0.6, "💩", 0.2, 0.1];
                function createArrayForP2() {
                  return [0, 1, 2].map(() => p2Numbs[Math.floor(Math.random() * p2Numbs.length)]).concat("💩");
                }
                function LogRandomElementP2() {
                  const arr2 = createArrayForP2();
                  let p2chose = (arr2[Math.floor(Math.random() * arr2.length)]);
                  p24.style.backgroundImage = 'none';

                  if (p2chose == "💩") {
                    p24.innerHTML = `<span style="color: Black; font-weight:bold;">${p2chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p1As.style.pointerEvents = 'none';


                  } else {
                    let points1 = points += p2chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points1 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p24.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p2chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs3.className = 'XDiv';
                    xdivs2.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivCon';
                    popdivscon3.className = 'PoopDivConOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p2As.style.pointerEvents = 'none';
                    p3As.style.pointerEvents = 'all';
                    popdivscon3.style.pointerEvents = 'all';
                    document.getElementById('popdivscon3').style.zIndex = '6';





                    console.log("you win");
                  }
                } LogRandomElementP2();
                console.log("p24");
              })


              // .......................p3..........
              p31.addEventListener('click', () => {
                const p1Numbs = [0.3, 0.4, 0.5, 0.6, "💩"];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p31.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p31.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p3As.style.pointerEvents = 'none';


                  } else {
                    let points3 = points += p1chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points3 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p31.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivConOff';
                    xdivs1.className = 'XDivOff';
                    xdivs3.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivConOff';
                    xdivs2.className = 'XDivOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p3As.style.pointerEvents = 'none';
                    popdivscon1.className = 'PoopDivCon1';
                    xdivs1.className = 'XDiv';
                    popdivscon1.style.pointerEvents = 'all';
                    document.getElementById('popdivscon2').style.zIndex = '7';




                    console.log("you win");







                  }
                } LogRandomElementP1();
                console.log("p31");
              })
              p32.addEventListener('click', () => {
                const p1Numbs = [0.3, 0.4, 0.5, 0.6, "💩"];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p32.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p32.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p3As.style.pointerEvents = 'none';


                  } else {
                    let points3 = points += p1chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points3 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p32.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivConOff';
                    xdivs1.className = 'XDivOff';
                    xdivs3.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivConOff';
                    xdivs2.className = 'XDivOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p3As.style.pointerEvents = 'none';
                    popdivscon1.className = 'PoopDivCon1';
                    xdivs1.className = 'XDiv';
                    popdivscon1.style.pointerEvents = 'all';
                    document.getElementById('popdivscon2').style.zIndex = '7';




                    console.log("you win");







                  }
                } LogRandomElementP1();
                console.log("p32");
              })
              p33.addEventListener('click', () => {
                const p1Numbs = [0.3, 0.4, 0.5, 0.6, "💩"];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p33.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p33.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p3As.style.pointerEvents = 'none';


                  } else {
                    let points3 = points += p1chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points3 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p33.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivConOff';
                    xdivs1.className = 'XDivOff';
                    xdivs3.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivConOff';
                    xdivs2.className = 'XDivOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p3As.style.pointerEvents = 'none';
                    popdivscon1.className = 'PoopDivCon1';
                    xdivs1.className = 'XDiv';
                    popdivscon1.style.pointerEvents = 'all';
                    document.getElementById('popdivscon2').style.zIndex = '7';




                    console.log("you win");







                  }
                } LogRandomElementP1();
                console.log("p33");
              })
              p34.addEventListener('click', () => {
                const p1Numbs = [0.3, 0.4, 0.5, 0.6, "💩"];
                function createArrayForP1() {
                  return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat("💩");
                }
                function LogRandomElementP1() {
                  const arr1 = createArrayForP1();
                  let p1chose = (arr1[Math.floor(Math.random() * arr1.length)]);
                  p34.style.backgroundImage = 'none';

                  if (p1chose == "💩") {
                    p34.innerHTML = `<span style="color: Black; font-weight:bold;">${p1chose}</span>`;

                    PopLose.style.pointerEvents = 'none';

                    const Toast = Swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    Toast.fire({
                      icon: "warning",
                      title: "Ooh you lose"
                    });
                    playalert.innerText = 'Ooh you lose';
                    p3As.style.pointerEvents = 'none';


                  } else {
                    let points3 = points += p1chose;
                    async function P1RewardedGiven() {
                      const { data1, error1 } = await _supabase.from("telusersinfo")
                        .update({ point: points3 })
                        .eq('id', a)
                    } P1RewardedGiven();

                    p34.innerHTML = `<span
                        style="color: Black; font-weight:bold;">${p1chose}</span>
                      <i><svg id="Pointp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                          class="bi bii bi-coin" viewBox="0 0 16 16">
                          <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>`;
                    playalert.innerText = `Claim`;
                    document.getElementById('bginputs').style.backgroundColor = 'greenyellow';
                    popdivscon1.className = 'PoopDivCon1Off';
                    xdivs1.className = 'XDivOff';
                    popdivscon3.className = 'PoopDivConOff';
                    xdivs1.className = 'XDivOff';
                    xdivs3.className = 'XDivOff';
                    popdivscon2.className = 'PoopDivConOff';
                    xdivs2.className = 'XDivOff';
                    popdivscon4.className = 'PoopDivConOff';
                    xdivs4.className = 'XDivOff';
                    p3As.style.pointerEvents = 'none';
                    popdivscon1.className = 'PoopDivCon1';
                    xdivs1.className = 'XDiv';
                    popdivscon1.style.pointerEvents = 'all';
                    document.getElementById('popdivscon2').style.zIndex = '7';




                    console.log("you win");







                  }
                } LogRandomElementP1();
                console.log("p34");
              })
            }
          }

        });

      };



      if (adon == true) {

        const adController = window.tads.init({
          widgetId: 599,
          type: 'static',
          debug: false, // Use 'true' for development and 'false' for production
          onClickReward: onClickRewardCallback,
          onAdsNotFound: adsNotFoundCallback
        });
        adController.loadAd()
          .then(() => adController.showAd())
          .catch((err) => {
            alert(err);
            adsNotFoundCallback();
          });
      }

    });

    playalert.addEventListener('click', () => {
      window.location.reload();
    })











    // Neon Crash Mini Game
    // --- Canvas and UI Setup ---
    const canvas = document.getElementById('crashCanvas');
    const ctx = canvas.getContext('2d');
    const multiplierDisplay = document.getElementById('multiplierDisplay');
    const betButton = document.getElementById('betButton');
    const demoButton = document.getElementById('demoButton');
    const cashOutButton = document.getElementById('cashOutButton');
    const messageDisplay = document.getElementById('message');
    const crashContainer = document.querySelector('.crash-container');

    const CANVAS_WIDTH = 300;
    const CANVAS_HEIGHT = 200;

    // Adjust canvas size for mobile responsiveness
    function resizeCanvas() {
      const containerWidth = crashContainer.clientWidth - 40; // Subtract padding
      canvas.width = containerWidth;
      canvas.height = containerWidth * (2 / 3); // Maintain 3:2 aspect ratio
      drawGraph();
    }
    window.addEventListener('resize', resizeCanvas);

    // --- Game Constants and Variables ---
    const START_COLOR = '#00ff80';
    const RISING_COLOR = '#00ffff';
    const CRASH_COLOR = '#ff004c';
    const WARNING_ORANGE = '#ff9900';
    const BG_GRID_COLOR = '#222';
    const NEON_BET_YELLOW = '#ffcc00';

    const WARNING_THRESHOLD = 0.5;
    const FINAL_MAX_CRASH = 10.00;

    const NEON_PULSE_COLORS = ['#e000ff', '#0099ff', RISING_COLOR, START_COLOR, NEON_BET_YELLOW];
    const DEFAULT_DISPLAY_COLOR = 'white';
    const DEFAULT_DISPLAY_SHADOW = '0 0 10px #00ff80';

    let gameState = 'waiting';
    let currentMultiplier = 0.00;
    let crashPoint = 0;
    let betPlaced = false;
    let isDemoMode = false;
    let cashedOut = false;
    let animationFrameId = null;
    let startTime = 0;

    let graphPoints = [];
    let scaleFactor = 1.0;
    let isFlashing = false;
    let breathingBlur = 10;
    let cashOutPoint = null;
    let pulsingIntervalId = null;
    let colorCycleIntervalId = null;
    let pulseColor = '';
    let colorIndex = 0;
    let brightnessPhase = 0;

    // --- Main Functions ---

    /**
     * New function: Transition to pending_start state after ad completion.
     * (Call this function in the successful ad completion callback from your Ad SDK)
     */

    function onAdCompleted2() {
      // Hide initial buttons
      betButton.style.display = 'none';
      demoButton.style.display = 'none';

      // Show the Claim/CashOut button as the final START button
      cashOutButton.style.display = 'block';
      cashOutButton.textContent = 'START';
      cashOutButton.classList.remove('delay-disabled');
      cashOutButton.classList.remove('loading-ad'); // Remove loading state
      cashOutButton.disabled = false;

      messageDisplay.textContent = 'Ready for takeoff. Click START!';
      messageDisplay.style.color = NEON_BET_YELLOW;

      gameState = 'pending_start';
    }
    function onAdCompleted2() {
      // Hide initial buttons
      betButton.style.display = 'none';
      demoButton.style.display = 'none';

      // Show the Claim/CashOut button as the final START button
      cashOutButton.style.display = 'block';
      cashOutButton.textContent = 'START';
      cashOutButton.classList.remove('delay-disabled');
      cashOutButton.classList.remove('loading-ad'); // Remove loading state
      cashOutButton.disabled = false;

      messageDisplay.textContent = 'Ready for takeoff. Click START!';
      messageDisplay.style.color = NEON_BET_YELLOW;

      gameState = 'pending_start';
    }

    /**
     * Ad display simulation function (2 seconds).
     * In a real application, you would remove this and replace it with your Ad SDK logic.
     */
    function simulateAd() {
      messageDisplay.textContent = 'Loading The Game ...';
      messageDisplay.style.color = 'var(--ad-loading)';

      betButton.classList.add('loading-ad');
      betButton.textContent = 'Loading Ad...';
      betButton.disabled = true;
      demoButton.disabled = true;

      setTimeout(() => {
        betButton.classList.remove('loading-ad');
        // Call onAdCompleted after successful ad display
        onAdCompleted2();
      }, 7000);
    }

    function startRound() {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      stopPulsingEffect();
      startPulsingEffect(null, 'waiting');

      // Determine random crash point
      const R = Math.max(0.001, Math.random());
      let rawCrash;
      if (R < 0.6) {
        rawCrash = 1.50 + Math.random() * 1.0;
      } else {
        rawCrash = 9.50 + Math.random() * 1.5;
      }
      crashPoint = Math.min(rawCrash, FINAL_MAX_CRASH);
      crashPoint = parseFloat(crashPoint.toFixed(2));


      currentMultiplier = 0.00;
      betPlaced = false;
      isDemoMode = false;
      cashedOut = false;
      gameState = 'betting';
      startTime = 0;
      scaleFactor = 1.0;
      isFlashing = false;
      cashOutPoint = null;
      graphPoints = [{ x: 0, y: CANVAS_HEIGHT }];

      multiplierDisplay.textContent = 'X 0.00';
      multiplierDisplay.style.color = DEFAULT_DISPLAY_COLOR;
      multiplierDisplay.style.textShadow = DEFAULT_DISPLAY_SHADOW;
      multiplierDisplay.style.transform = 'translate(0, 0)';

      messageDisplay.textContent = '';

      // Set initial buttons for selection
      betButton.disabled = false;
      betButton.textContent = 'Start Game (Ad)'; // UPDATED TEXT HERE
      betButton.classList.remove('disabled-button', 'delay-disabled', 'loading-ad');
      betButton.style.display = 'block';
      betButton.classList.add('breathing-neon');

      demoButton.disabled = false;
      demoButton.textContent = 'Demo Play (Free)';
      demoButton.classList.remove('disabled-button');
      demoButton.style.display = 'block';

      cashOutButton.style.display = 'none';
      cashOutButton.textContent = 'Claim';

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGraph();
    }

    // isDemoMode
    function startDemoRound() {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      stopPulsingEffect();
      startPulsingEffect(null, 'waiting');

      // Determine random crash point
      const R = Math.max(0.001, Math.random());
      let rawCrash;
      if (R < 0.6) {
        rawCrash = 1.50 + Math.random() * 1.0;
      } else {
        rawCrash = 9.50 + Math.random() * 1.5;
      }
      crashPoint = Math.min(rawCrash, FINAL_MAX_CRASH);
      crashPoint = parseFloat(crashPoint.toFixed(2));


      currentMultiplier = 0.00;
      betPlaced = false;
      isDemoMode = false;
      cashedOut = false;
      gameState = 'betting';
      startTime = 0;
      scaleFactor = 1.0;
      isFlashing = false;
      cashOutPoint = null;
      graphPoints = [{ x: 0, y: CANVAS_HEIGHT }];

      multiplierDisplay.textContent = 'X 0.00';
      multiplierDisplay.style.color = DEFAULT_DISPLAY_COLOR;
      multiplierDisplay.style.textShadow = DEFAULT_DISPLAY_SHADOW;
      multiplierDisplay.style.transform = 'translate(0, 0)';

      messageDisplay.textContent = '';

      // Set initial buttons for selection
      betButton.disabled = false;
      betButton.textContent = 'Start Game (Ad)'; // UPDATED TEXT HERE
      betButton.classList.remove('disabled-button', 'delay-disabled', 'loading-ad');
      betButton.style.display = 'block';
      betButton.classList.add('breathing-neon');

      demoButton.disabled = false;
      demoButton.textContent = 'Demo Play (Free)';
      demoButton.classList.remove('disabled-button');
      demoButton.style.display = 'block';

      cashOutButton.style.display = 'none';
      cashOutButton.textContent = 'Claim';

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGraph();
    }

    // Handle Claim/START button click
    function handleClaimClick() {
      if (gameState === 'pending_start' && cashOutButton.textContent.toUpperCase() === 'START') {
        beginRising();
        return;
      }


      // Normal Cash Out logic
      cashOut();
    }
    function handleClaimClick2() {
      if (gameState === 'pending_start' && cashOutButton.textContent.toUpperCase() === 'START') {
        beginRising();
        return;
      }


      // Normal Cash Out logic
      cashOut2();
    }

    function beginRising() {
      if (gameState !== 'betting' && gameState !== 'pending_start') return;

      gameState = 'rising';
      startTime = Date.now();
      messageDisplay.textContent = 'Flight started! Claim at any multiplier!';
      messageDisplay.style.color = START_COLOR;

      // Set up Claim button
      cashOutButton.style.backgroundColor = 'var(--neon-start)';
      cashOutButton.style.boxShadow = '0 0 15px var(--neon-start)';
      cashOutButton.textContent = 'Claim';
      cashOutButton.disabled = false;

      // Disable initial buttons
      betButton.classList.add('disabled-button');
      betButton.disabled = true;
      demoButton.classList.add('disabled-button');
      demoButton.disabled = true;

      cashOutButton.style.display = 'block';

      stopPulsingEffect();
      animate();
    }
    function beginRising2() {
      if (gameState !== 'betting' && gameState !== 'pending_start') return;

      gameState = 'rising';
      startTime = Date.now();
      messageDisplay.textContent = 'Flight started! Claim at any multiplier!';
      messageDisplay.style.color = START_COLOR;

      // Set up Claim button
      cashOutButton.style.backgroundColor = 'var(--neon-start)';
      cashOutButton.style.boxShadow = '0 0 15px var(--neon-start)';
      cashOutButton.textContent = 'Claim';
      cashOutButton.disabled = false;

      // Disable initial buttons
      betButton.classList.add('disabled-button');
      betButton.disabled = true;
      demoButton.classList.add('disabled-button');
      demoButton.disabled = true;

      cashOutButton.style.display = 'block';

      stopPulsingEffect();
      animate();
    }

    function activateResetButtonAfterDelay() {
      // Show the restart button
      betButton.style.display = 'block';
      betButton.textContent = 'Restart Round';

      // Apply disabled/gray state for one second
      betButton.classList.add('delay-disabled');
      betButton.classList.remove('disabled-button');
      betButton.disabled = true;

      setTimeout(() => {
        // Re-enable the button
        betButton.classList.remove('delay-disabled');
        betButton.disabled = false;
        betButton.classList.add('breathing-neon');
      }, 1000);
    }


    function cashOut() {


      if (gameState !== 'rising' || cashedOut) return;

      if (currentMultiplier <= 0.00) {
        messageDisplay.textContent = '⚠️ Wait! Multiplier must be above 0.00.';
        messageDisplay.style.color = CRASH_COLOR;
        return;
      }
      cashedOut = true;

      // Record the exact Cash Out point on the graph
      cashOutPoint = graphPoints[graphPoints.length - 1];

      const cashOutMultiplier = currentMultiplier.toFixed(2);


      messageDisplay.textContent = ` 🎉 CLAIMED at X${cashOutMultiplier} 🎉`;

      async function NeonPointsUpdate() {
        let { data: telusersinfo, error } = await _supabase
          .from('telusersinfo')
          .select('*')
          .eq('id', a)
          .single();

        let userpointforCrash = telusersinfo.point;

        let SumPoints = Number(cashOutMultiplier) + Number(userpointforCrash);
        const SumPoints2 = SumPoints.toFixed(2);




        const { data1, error1 } = await _supabase.from("telusersinfo")
          .update({ point: SumPoints })
          .eq('id', a)


      } NeonPointsUpdate();



      messageDisplay.style.color = START_COLOR;

      // Visually disable the Claim button
      cashOutButton.disabled = true;
      cashOutButton.style.backgroundColor = '#222';
      cashOutButton.style.boxShadow = 'none';
      cashOutButton.textContent = `PAID X${cashOutMultiplier}`;
    }


    function cashOut2() {


      if (gameState !== 'rising' || cashedOut) return;

      if (currentMultiplier <= 0.00) {
        messageDisplay.textContent = '⚠️ Wait! Multiplier must be above 0.00.';
        messageDisplay.style.color = CRASH_COLOR;
        return;
      }
      cashedOut = true;

      // Record the exact Cash Out point on the graph
      cashOutPoint = graphPoints[graphPoints.length - 1];

      const cashOutMultiplier = currentMultiplier.toFixed(2);


      messageDisplay.textContent = ` 🎉 DEMO CLAIMED at X${cashOutMultiplier}. !No coins won!`;



      messageDisplay.style.color = START_COLOR;

      // Visually disable the Claim button
      cashOutButton.disabled = true;
      cashOutButton.style.backgroundColor = '#222';
      cashOutButton.style.boxShadow = 'none';
      cashOutButton.textContent = `PAID X${cashOutMultiplier}`;
    }

    function endRound(isManualCashOut) {
      cancelAnimationFrame(animationFrameId);
      gameState = 'crashed';
      isFlashing = false;

      multiplierDisplay.style.transform = 'translate(0, 0)';

      if (!cashedOut) {
        multiplierDisplay.textContent = `X ${crashPoint.toFixed(2)}`;
        multiplierDisplay.style.color = CRASH_COLOR;
        console.log(crashPoint.toFixed(2));




        if (isDemoMode) {
          messageDisplay.textContent = ` 💥 Demo CRASHED at X${crashPoint.toFixed(2)}. Start a new round!`;
          messageDisplay.style.color = WARNING_ORANGE;
        }

        // Crash explosion effect
        if (graphPoints.length > 0) {
          const finalPoint = graphPoints[graphPoints.length - 1];
          ctx.fillStyle = CRASH_COLOR;

          for (let r = 0; r < 50; r += 10) {
            ctx.globalAlpha = 1 - (r / 50);
            ctx.beginPath();
            const explosionX = finalPoint.x / scaleFactor;
            const explosionY = finalPoint.y / scaleFactor;
            ctx.arc(explosionX, explosionY, r / scaleFactor, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.globalAlpha = 1.0;
        }
      }

      cashOutButton.style.display = 'none';
      demoButton.style.display = 'none';

      const pulseColor = (cashedOut) ? START_COLOR : CRASH_COLOR;
      startPulsingEffect(pulseColor, 'result');

      activateResetButtonAfterDelay();
    }

    // --- Core Animation Function ---
    function animate() {
      if (gameState !== 'rising') return;

      const now = Date.now();
      const elapsedTime = (now - startTime) / 1000;

      // Multiplier calculation logic (based on elapsed time)
      breathingBlur = 10 + Math.sin(now / 200) * 3;
      const C = 0.05;
      const T_POWER = 1.2;
      const effectiveTime = Math.pow(elapsedTime, T_POWER);
      let baseMultiplier = (Math.expm1(effectiveTime * C) * 3);

      const DIP_AMPLITUDE = 0.10;
      const sinePhase = (baseMultiplier / 0.5) * Math.PI;
      const sineWave = Math.sin(sinePhase);
      let dipValue = (baseMultiplier > 0.10) ? (sineWave * DIP_AMPLITUDE * Math.min(1.0, baseMultiplier / 2.0)) : 0;

      currentMultiplier = Math.floor((baseMultiplier + dipValue) * 100) / 100;
      currentMultiplier = Math.max(0.00, currentMultiplier);

      const distanceToCrash = crashPoint - currentMultiplier;

      // --- Crash Warning Section ---
      // If the multiplier is within 0.35 of the crash point, start flashing
      if (distanceToCrash <= WARNING_THRESHOLD && distanceToCrash > 0.01 && !cashedOut) {
        isFlashing = true;
        if (Math.floor(now / 150) % 2 === 0) {
          cashOutButton.style.backgroundColor = CRASH_COLOR;
          cashOutButton.style.boxShadow = ` 0 0 15px ${CRASH_COLOR}`;
        } else {
          cashOutButton.style.backgroundColor = WARNING_ORANGE;
          cashOutButton.style.boxShadow = ` 0 0 15px ${WARNING_ORANGE}`;
        }
        messageDisplay.textContent = '🚨 CRASH Danger! Claim quickly! 🚨';
        messageDisplay.style.color = WARNING_ORANGE;
        messageDisplay.textShadow = ` 0 0 5px ${CRASH_COLOR}`;
      } else if (!cashedOut) {
        isFlashing = false;
        cashOutButton.style.backgroundColor = 'var(--neon-start)';
        cashOutButton.style.boxShadow = '0 0 15px var(--neon-start)';
        messageDisplay.textContent = 'Flight started! Claim at any multiplier!';
        messageDisplay.style.color = 'var(--neon-start)';
        messageDisplay.textShadow = '0 0 5px var(--neon-start)';
      }

      // --- Multiplier Jitter and Color ---
      if (currentMultiplier > 1.5) {
        const jitter = Math.min(5, (currentMultiplier - 1.0) * 0.5);
        const randomX = (Math.random() - 0.5) * jitter;
        const randomY = (Math.random() - 0.5) * jitter;
        multiplierDisplay.style.transform = ` translate(${randomX}px, ${randomY}px)`;

        const hue = 120 - Math.min(120, currentMultiplier * 10);
        multiplierDisplay.style.color = ` hsl(${hue}, 100%, 70%)`;
        multiplierDisplay.style.textShadow = ` 0 0 ${Math.min(20, currentMultiplier * 3)}px hsl(${hue}, 100%, 50%)`;
      } else {
        multiplierDisplay.style.transform = `translate(0, 0)`;
        multiplierDisplay.style.color = DEFAULT_DISPLAY_COLOR;
        multiplierDisplay.style.textShadow = DEFAULT_DISPLAY_SHADOW;
      }

      // Scaling logic and record new point
      const X_PACE = canvas.width / 10;
      const X_LIMIT_PERCENTAGE = 0.85;

      const totalX = elapsedTime * X_PACE * 1.5;
      const newY = getGraphY(currentMultiplier);

      const maxX = totalX;
      const maxY = canvas.height - newY;

      const MAX_ALLOWED_X = canvas.width * X_LIMIT_PERCENTAGE;

      let requiredScaleX = MAX_ALLOWED_X / maxX;
      let requiredScaleY = canvas.height / maxY;

      scaleFactor = Math.min(1.0, requiredScaleX, requiredScaleY);
      if (scaleFactor < 0.01) scaleFactor = 0.01;

      graphPoints.push({ x: totalX, y: newY });

      drawGraph();

      multiplierDisplay.textContent = `X ${currentMultiplier.toFixed(2)}`;

      // Update Claim button text
      if (!cashedOut && cashOutButton.textContent.toUpperCase() !== 'START') {
        cashOutButton.textContent = isDemoMode ? `Claim (Demo - X${currentMultiplier.toFixed(2)})` : `Claim (X${currentMultiplier.toFixed(2)})`;
      }

      if (currentMultiplier >= crashPoint) {
        endRound(false);
        return;
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // --- Canvas Helper Functions ---

    const getGraphY = (multiplier) => {
      const adjustedMultiplier = Math.max(1.01, multiplier + 1.0);
      const yOffset = (Math.log10(adjustedMultiplier) * 60);
      return canvas.height - Math.min(yOffset * 2.5, canvas.height);
    };

    function drawGraph() {
      ctx.fillStyle = 'rgba(17, 17, 17, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(0, canvas.height);
      ctx.scale(scaleFactor, scaleFactor);
      ctx.translate(0, -canvas.height);

      ctx.strokeStyle = BG_GRID_COLOR;
      ctx.lineWidth = 1 / scaleFactor;

      const horizontalStep = 40;
      const verticalStep = 30;

      const maxGridX = canvas.width / scaleFactor;
      const maxGridY = canvas.height / scaleFactor;

      // Draw grid lines
      for (let y = -horizontalStep * 2; y <= maxGridY + horizontalStep * 2; y += horizontalStep) {
        ctx.beginPath();
        ctx.moveTo(-verticalStep * 2, y);
        ctx.lineTo(maxGridX + verticalStep * 2, y);
        ctx.stroke();
      }
      for (let x = -verticalStep * 2; x <= maxGridX + verticalStep * 2; x += verticalStep) {
        ctx.beginPath();
        ctx.moveTo(x, -horizontalStep * 2);
        ctx.lineTo(x, maxGridY + horizontalStep * 2);
        ctx.stroke();
      }

      if (graphPoints.length < 2) {
        ctx.fillStyle = START_COLOR;
        ctx.beginPath();
        ctx.arc(0, canvas.height, 4 / scaleFactor, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }

      // Draw graph line
      let lineColor = RISING_COLOR;
      let shadowBlur = breathingBlur;

      if (isFlashing) {
        lineColor = (Math.floor(Date.now() / 100) % 2 === 0) ? CRASH_COLOR : WARNING_ORANGE;
        shadowBlur = 15;
      }

      ctx.strokeStyle = lineColor;
      ctx.shadowColor = lineColor;
      ctx.shadowBlur = shadowBlur / scaleFactor;
      ctx.lineWidth = 3 / scaleFactor;

      ctx.beginPath();
      ctx.moveTo(graphPoints[0].x, graphPoints[0].y);

      for (let i = 1; i < graphPoints.length; i++) {
        ctx.lineTo(graphPoints[i].x, graphPoints[i].y);
      }

      ctx.stroke();

      // Draw current point (tip of the graph)
      const lastPoint = graphPoints[graphPoints.length - 1];
      ctx.fillStyle = lineColor;
      ctx.beginPath();
      ctx.arc(lastPoint.x, lastPoint.y, 4 / scaleFactor, 0, Math.PI * 2);
      ctx.fill();

      // Draw Cashout Point marker
      if (cashOutPoint) {
        ctx.shadowBlur = 10 / scaleFactor;
        ctx.shadowColor = START_COLOR;
        ctx.fillStyle = START_COLOR;

        ctx.beginPath();
        const cashoutX = cashOutPoint.x;
        const cashoutY = cashOutPoint.y;
        ctx.arc(cashoutX, cashoutY, 6 / scaleFactor, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(cashoutX, cashoutY, 2 / scaleFactor, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.restore();
    }

    // --- Pulse Effect Functions ---
    function startPulsingEffect(color, mode = 'result') {
      stopPulsingEffect();
      pulseColor = color;
      brightnessPhase = 0;

      if (mode === 'waiting') {
        colorIndex = 0;
        colorCycleIntervalId = setInterval(() => {
          colorIndex = (colorIndex + 1) % NEON_PULSE_COLORS.length;
          crashContainer.style.borderColor = NEON_PULSE_COLORS[colorIndex];
        }, 500);
      }

      pulsingIntervalId = setInterval(() => {

        brightnessPhase += 0.1;
        const shadowStrength = 10 + Math.sin(brightnessPhase) * 5;

        let currentEffectColor = pulseColor;

        if (mode === 'waiting') {
          currentEffectColor = NEON_PULSE_COLORS[colorIndex];

          multiplierDisplay.style.color = DEFAULT_DISPLAY_COLOR;
          multiplierDisplay.style.textShadow = DEFAULT_DISPLAY_SHADOW;
        } else {
          multiplierDisplay.style.color = currentEffectColor;
          multiplierDisplay.style.textShadow = ` 0 0 ${10 + Math.sin(brightnessPhase) * 3}px ${currentEffectColor}`;
        }

        crashContainer.style.boxShadow = `0 0 ${25 + shadowStrength}px ${currentEffectColor}`;

      }, 100);
    }

    function stopPulsingEffect() {
      if (pulsingIntervalId) {
        clearInterval(pulsingIntervalId);
        pulsingIntervalId = null;
      }
      if (colorCycleIntervalId) {
        clearInterval(colorCycleIntervalId);
        colorCycleIntervalId = null;
      }
      crashContainer.style.boxShadow = '0 0 25px var(--neon-bet)';
      crashContainer.style.borderColor = 'var(--neon-bet)';
    }

    function handleBetStart(isDemo) {

      messageDisplay.style.display = 'all';
      messageDisplay.textContent = '👇 Click the ad to start 👇';

      if (betButton.textContent == "Start Game (Ad)") {
        document.getElementById('tads-container-894').style.display = "flex";
        betButton.style.pointerEvents = "none";
        const adsNotFoundCallback = () => {
          document.getElementById('tads-container-894').style.display = "none";
          // messageDisplay.textContent = 'Please try again a few minutes later or change your IP to 🇩🇪,🇬🇧 or 🇺🇲';





          // --------------------------FreePay Ads Loading
          const AdPageLoading = document.getElementById('FreePayLoadingAds');
          AdPageLoading.style.display = 'Flex';
          async function FreePayAds() {

            // -----------------Onclick on FreePay Ads
            function OnClickRewardFreePay() {
              AdPageLoading.style.display = 'none';

              betButton.style.pointerEvents = "all";

              cashOutButton.style.backgroundColor = 'aqua';

              // Initial selection logic
              if (gameState === 'betting' || gameState === 'waiting') {

                betPlaced = !isDemo;
                isDemoMode = isDemo;

                betButton.classList.remove('breathing-neon');

                if (isDemo) {
                  //     //   // Demo Mode: Immediate start
                  demoButton.textContent = `Round in progress...`;
                  betButton.style.display = 'none';
                  beginRising();

                } else {
                  //     // Ad/Real Mode: Start ad process
                  simulateAd();
                }
              } else if (gameState === 'crashed' || gameState === 'cashedOut') {
                //   startRound();
              }


            };

            let { data: adsinfo, error1 } = await _supabase
              .from('advertisingtable')
              .select('id')
              .eq("Mode", "On")




            let { data: AdViewer, error } = await _supabase
              .from('AdViewer')
              .select('AdId')
              .eq("LastViewer", a)

            // console.log(adsinfo);
            // console.log(AdViewer);



            // Del Ads On AdsTable for last Viewer
            const AllAds = adsinfo;
            const AdViewed = AdViewer;
            const AdsShowded = AdViewed.map(item => item.AdId);
            const AdsOkToShow = AllAds.filter(item => !AdsShowded.includes(item.id));
            const AdReady = AdsOkToShow[0];

            if (!AdReady) {
              // console.log('Ads Cant Found');
              betButton.style.pointerEvents = "all";

              AdPageLoading.innerHTML = `
                <div style="display: flex;flex-direction: row;align-items: center;width: 90%;border-radius: 0.5rem;">
                  <div  style="display: flex;flex-direction: column;width: 100%;height: auto;">
                  <p class="LoadingAdP" id="LinkName2" style="Font-Size:large" >Please turn back later</p>  
                  </div>
                </div>
                <p class="LoadingAdPGolden" style="background-color: #fff;padding: 0.5rem;border-radius: 0.5rem;">Ads By FreePay</p>
              `;
              setTimeout(() => {
                AdPageLoading.style.display = 'none';
              }, 3000)

            } else if (AdReady) {
              const ADNumberId = AdReady.id;

              async function AdsLoading() {
                let { data: AdsLoading, error3 } = await _supabase
                  .from('advertisingtable')
                  .select('*')
                  .eq("id", ADNumberId)
                  .single();
                // console.log(AdsLoading);

                const ADInfo = AdsLoading;

                AdPageLoading.innerHTML = `
                <div style="display: flex;flex-direction: row;align-items: center;background-color: black;width: 90%;border-radius: 0.5rem;">
                  <img style="width: 5.5rem;height: 5.5rem;border-radius: 0.5rem 0rem 0rem 0.5rem;" src="https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/Adsicon.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9BZHNpY29uLmpwZyIsImlhdCI6MTc2MzY1NjIxMiwiZXhwIjozMTU1MzMyMTIwMjEyfQ.d9p74qgt6g6zyX2OygemieMz2sRW_SEkJqV7cG15I70" alt="">
                  <div  style="display: flex;flex-direction: column;background-color: black;width: 100%;height: auto;">
                    <p class="LoadingAdP" id="LinkName" >${ADInfo.channelname}</p>
                    <button id="OpenAdLink" style="color:white; background-color: #EE00ff;width: 100%;height: 2.5rem;">Click Now</button>
                  </div>
                </div>
                <p class="LoadingAdPGolden" style="background-color: #fff;padding: 0.5rem;border-radius: 0.5rem;">Ads By FreePay</p>
              `;
                const ChannelAmountPluser = AdsLoading.channelamount += 1;
                const ChannelMaxAmount = AdsLoading.channelamountmaxamount;

                // console.log(ChannelAmountPluser);


                document.getElementById('OpenAdLink').onclick = function () {
                  async function ClickedOnAd() {

                    const { data, error } = await _supabase
                      .from('AdViewer')
                      .insert([
                        {
                          ChannelName: ADInfo.channelname,
                          ChannelLink: ADInfo.channellink,
                          LastViewer: a,
                          AdId: AdReady.id

                        },
                      ])





                    document.getElementById("OpenAdLink").style.pointerEvents = "none";
                    if (ChannelMaxAmount == ChannelAmountPluser) {


                      const { data, error } = await _supabase
                        .from('advertisingtable')
                        .update({ channelamount: ChannelAmountPluser, Mode: 'Off' })
                        .eq('id', ADNumberId)
                        .select();

                    } else if (ChannelMaxAmount > ChannelAmountPluser) {

                      const { data, error } = await _supabase
                        .from('advertisingtable')
                        .update({ channelamount: ChannelAmountPluser, })
                        .eq('id', ADNumberId)
                        .select();
                    }
                    window.open(ADInfo.channellink, "_blank");



                  } ClickedOnAd().then(() => {
                    setTimeout(() => {
                      OnClickRewardFreePay();





                    }, 5000)
                  })

                };




              } AdsLoading();

            }





            // console.log(NotShoedAdId);
            // const OnModeAds = adsinfo.find(item => item.Mode === 'On');
            // console.log(OnModeAds);
            // document.getElementById('tads-container-894').innerHTML="<p>hii</p>";
            // document.getElementById("LinkName").innerText = `${OnModeAds.channelname}`;


            // document.getElementById("OpenAdLink").onclick = function () {
            // const adUrl = OnModeAds.channellink;
            // function LinkLoad() {
            //   window.open(adUrl, "_blank");

            // } LinkLoad().then(console.log("lll"));
            // };
          } FreePayAds();

          // Write your code here in case we couldn't display ad
        };

        // Callback for REWARDED format
        const onClickRewardCallback = (adId) => {
          document.getElementById('tads-container-894').style.display = "none";
          betButton.style.pointerEvents = "all";

          cashOutButton.style.backgroundColor = 'aqua';

          // Initial selection logic
          if (gameState === 'betting' || gameState === 'waiting') {

            betPlaced = !isDemo;
            isDemoMode = isDemo;

            betButton.classList.remove('breathing-neon');

            if (isDemo) {
              //     //   // Demo Mode: Immediate start
              demoButton.textContent = `Round in progress...`;
              betButton.style.display = 'none';
              beginRising();

            } else {
              //     // Ad/Real Mode: Start ad process
              simulateAd();
            }
          } else if (gameState === 'crashed' || gameState === 'cashedOut') {
            //   startRound();
          }
        };

        const adController = window.tads.init({
          widgetId: 894,
          type: 'static',
          debug: false, // Use 'true' for development and 'false' for production
          onClickReward: onClickRewardCallback,
          onAdsNotFound: adsNotFoundCallback
        });
        adController.loadAd()
          .then(() => adController.showAd())
          .catch((err) => {
            alert(err);
            adsNotFoundCallback();
          });


      }
      // If the button is a restart button, restart the round
      if (betButton.textContent === 'Restart Round' && !isDemo) {
        if (!betButton.disabled) {
          startRound();
        }
        return;
      }




      cashOutButton.onclick = function () {

        handleClaimClick();
      };
    }
    function handleDemoStart() {

      messageDisplay.style.display = 'all';
      cashOutButton.style.backgroundColor = "silver";
      messageDisplay.textContent = ` 💥 CRASHED at X${crashPoint.toFixed(2)}. No coins won.`;
      messageDisplay.style.color = CRASH_COLOR;
      // messageDisplay.textContent = "Demo Mode!!";



      // cashOutButton.style.backgroundColor = 'aqua';

      // Initial selection logic
      // if (gameState === 'betting' || gameState === 'waiting') {

      // betPlaced = !isDemo;
      // isDemoMode = isDemo;

      // betButton.classList.remove('breathing-neon');


      // Ad/Real Mode: Start ad process
      // messageDisplay.textContent = 'Loading The Game ...';
      // messageDisplay.style.color = 'var(--ad-loading)';

      betButton.style.display = 'none';
      betButton.disabled = true;
      demoButton.disabled = true;

      // setTimeout(() => {
      betButton.classList.remove('loading-ad');
      // Call onAdCompleted after successful ad display
      // onAdCompleted2();
      beginRising2();

      cashOutButton.onclick = function () {

        handleClaimClick2();
      };




    }



    // --- Event Listeners ---
    function setupEventListeners() {
      betButton.onclick = function () { handleBetStart() };
      demoButton.onclick = function () { handleDemoStart() };


    };

    function OnloadNeonClash() {
      resizeCanvas(); // Initial canvas size setup
      startRound();
      setupEventListeners();
    } OnloadNeonClash();

    document.getElementById('ComBackHomeNeon').addEventListener('click', () => {
      document.getElementById('NoeonPage').style.display = 'none';
    });
  } userifoo();
  // --- Initial Start ---




  let { data: telusersinfoleaderbord, error1 } = await _supabase
    .from('telusersinfo')
    .select('*')

  let usersBoard = telusersinfoleaderbord;
  // console.log(usersBoard);
  const top99 = usersBoard.map(user => ({
    ...user,
    finalScore: user.Score * (1 + (user.reffrallCount || 0) / 100)
  })).sort((a, b) => b.finalScore - a.finalScore).slice(0, 102);

  // console.log(telusersinfo);
  let MyScoreNumber = telusersinfo.id;



  const targetDate = new Date('2026-02-15').getTime();
  setInterval(() => {
    const now = Date.now();
    const left = targetDate - now;
    const d = Math.floor(left / 86400000);
    const h = Math.floor((left % 86400000) / 3600000);
    const m = Math.floor((left % 3600000) / 60000);
    const s = Math.floor((left % 60000) / 1000);

    // console.log(`Day:${d} Hour:${h} minutes:${m} Secound:${s}`);

    document.getElementById('day').innerText = `${d} `;
    document.getElementById('hour').innerText = ` ${h}`;
    document.getElementById('minutes').innerText = ` ${m} `;
    document.getElementById('second').innerText = ` ${s}`;





  })

  for (let i = 1; i <= 100; i++) {

    if (MyScoreNumber === top99[i].id) {
      console.log("user Find");
      document.getElementById('NumberScore').innerText = `${i}`;
    } else {
    }
    let fontColor = 'white';
    // console.log(top99[i].NFTName);
    if (top99[i].rank == 'Silver') {
      // console.log("silver Ok");
      fontColor = 'white';
    } else if (top99[i].rank == 'Golden') {
      // console.log("Golden Ok");
      fontColor = 'gold';
    } else if (top99[i].rank == 'Diamond') {
      // console.log('Diamond Find');
      fontColor = 'rgb(45, 244, 244)';
    }


    // console.log(top99[i].name);
    let userboerd = document.createElement('div');
    if (i <= 3) {
      userboerd.className = 'UserPutDivLeaderWinners';
    } else if (i > 3) {
      userboerd.className = 'UserPutDivLeader';
    }
    userboerd.innerHTML = `<div class="UserDivLeader"><div class="LeaderboedprofileDiv">
    <img style="width: 100%;height: 100%;" src="${top99[i].ProfLink}" alt="">
  </div>

  <div class="LeaderboedNameDiv">
    <p style="color: ${fontColor};font-weight: 300;">${top99[i].name.slice(0, 7)}</p>
    <p style="display: flex; margin-top: -0.5rem;color: aquamarine;"> ${i}</p>
  </div>

  <div class="LeaderboedinfoDiv">
    <p style="color: rgb(1, 223, 1);">
      Game Score: ${top99[i].Score.toFixed(0)}
    </p>
    <p style="color: rgb(1, 179, 223); display: flex; margin-top: -0.5rem;">
      Friend invited: ${top99[i].reffrallCount.toFixed(0)}
    </p>
  </div>

  <div class="LeaderboedScoreDiv">
    <p style="color: white;font-weight: 300;">
      = ${top99[i].finalScore.toFixed(0)}
    </p>
  </div>
  </div>`;
    let brAdd = document.createElement('div');
    brAdd.innerHTML = `<br><br><br><br><br><br><br><br><br><br><br><br>`;
    if (i == 100) {
      // console.log('ok');
      document.getElementById('usersviewer').appendChild(brAdd);

    }
    document.getElementById('usersviewer').appendChild(userboerd);
  }

} telebot();











// .............Refresh page
window.addEventListener('load', () => {
  Profbtn.className = 'textshadowbtn';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('profsec').style.display = 'flex';
  document.getElementById('shopsec').style.display = 'none';
});
const username = document.getElementById('Userp');
const Rank = document.getElementById('Ranks');
const level = document.getElementById('Levelp');
const Points = document.getElementById('Pointsp');
const headerPoint = document.getElementById('pointvalue');
const emailbox = document.getElementById('emailpp');
// ....Go BAck to Homee
document.getElementById('ComBackHome').addEventListener("click", () => {
  document.getElementById('earnsec322').style.display = 'none';
})
// PooP Main Go......
document.getElementById('PooPGameShow').addEventListener("click", () => {
  document.getElementById('earnsec322').style.display = 'flex';
})
// Neon Crash
document.getElementById('CrashId').addEventListener("click", () => {
  document.getElementById('NoeonPage').style.display = 'flex';
});

function sendEmail() {
  document.getElementById('RefPage').style.display = 'flex';
};

document.getElementById('ReffCodeInfo').addEventListener('click', () => {
  document.getElementById('RefPage4').style.display = 'flex';
});
document.getElementById('BackFer4').addEventListener('click', () => {
  document.getElementById('RefPage4').style.display = 'none';
});


Profbtn.addEventListener('click', () => {
  Profbtn.className = 'textshadowbtn';
  shopbtn.className = '';
  Taskinput.className = '';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('profsec').style.display = 'flex';
  document.getElementById('shopsec').style.display = 'none';
  document.getElementById('TasksPage').style.display = 'none';
  document.getElementById('Controler').style.display = 'flex';


});
shopbtn.addEventListener('click', () => {
  Profbtn.className = '';
  shopbtn.className = 'textshadowbtn';
  Taskinput.className = '';
  shopbtn.style.zIndex = '99999';
  document.getElementById('profsec').style.display = 'none';
  document.getElementById('shopsec').style.display = 'flex';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('TasksPage').style.display = 'none';
  document.getElementById('Controler').style.display = 'flex';


});

document.getElementById('Taskinput').addEventListener('click', () => {
  Taskinput.className = 'textshadowbtn';
  Profbtn.className = '';
  shopbtn.className = '';
  // earnbtn.className = '';
  document.getElementById('TasksPage').style.display = 'flex';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('profsec').style.display = 'none';
  document.getElementById('shopsec').style.display = 'none';
  document.getElementById('Controler').style.display = 'none';

})

document.getElementById('PlayGalaxyGame').addEventListener('click', () => {
  window.location.href = 'https://thefreepay.github.io/FreePayGalexy/';
  document.getElementById("LoadingGame").style.display = 'flex';
})
document.getElementById('InvateFriend').addEventListener('click', () => {

  window.location.href = `https://t.me/share/url?text=🎲%20Play%20games%20and%20become%20one%20of%20the%20lucky%20winners%20of%20Telegram%20gifts%20%26%20amazing%20prizes!%20Enter%20now%20via%20the%20link%20below%20and%20win%20big!%20🚀🌃%0A%0A👉%20https://t.me/TheFreePayBot/thefreepaygalaxy?start=ref_${a}`;
})
// ...............shop sec............... !!


// document.getElementById('ProfileShowBtn').addEventListener('click', () => {
//   window.location.href = 'https://thefreepay.github.io/FreePayNfts/';

// })

document.getElementById('Shopinput').innerHTML = `<p>Rewards</p>
<img src="https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/public/TelGifts/TedyGift.png" style="width: 2rem;height: 2rem; display:flex;margin-left: -0.2rem" alt="">
`;

document.getElementById('Controler').addEventListener('click', () => {

  document.getElementById('profsec').style.display = 'none';
  document.getElementById('Controler').style.display = 'none';
  document.getElementById('ComBackHome').style.display = 'flex';
  document.getElementById('earnsec').style.display = 'flex';
  document.getElementById('TasksPage').style.display = 'none';
  document.getElementById('shopsec').style.display = 'none';
  document.getElementById('btns').style.display = 'none';
  Profbtn.className = 'textshadowbtn';
  shopbtn.className = '';
  Taskinput.className = '';
})
document.getElementById('ComBackHome').addEventListener('click', () => {
  document.getElementById('Controler').style.display = 'flex';
  document.getElementById('ComBackHome').style.display = 'none';
  document.getElementById('profsec').style.display = 'flex';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('shopsec').style.display = 'none';
  document.getElementById('Controler').style.display = 'flex';

  document.getElementById('btns').style.display = 'flex';

})
document.getElementById('NFTsinput').addEventListener('click', () => {
  window.location.href = "https://thefreepay.github.io/FreePayNfts/";
  document.getElementById("LoadingGame").style.display = 'flex';

})
