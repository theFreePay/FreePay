const supabase = window.supabase.createClient(
  'https://nomuylulsjtwjoinrxmr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbXV5bHVsc2p0d2pvaW5yeG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzgwOTgsImV4cCI6MjA2MTI1NDA5OH0.9Vgp9y1EQkbH2GooJgUmXjW4NEA-WY8keL4P5S1tiIc'
);
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;

if (!user) {
  window.location.href = "https://t.me/TheFreePayBot?start=true";
}



const a = user.id;




async function telebot() {

  const { data2, error2 } = await supabase
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

  let BackRef = document.getElementById('BackFer');
  BackRef.addEventListener('click', () => {
    document.getElementById('RefPage').style.display = 'none';
  });
  let { data: telusersinfo, error } = await supabase
    .from('telusersinfo')
    .select('*')
    .eq('id', a)
    .single();

    // console.log(telusersinfo.reffrall);
    const reffrall = telusersinfo.reffrall;
    let points1 = telusersinfo.point;
    let fixedPoint = points1.toFixed(1);

    let UserFind = telusersinfo;
  if (UserFind.id) {
    document.getElementById('loadingPage').style.display = 'none';
  };



  // ...........................Point Updating ...................
  setInterval(() => {
    async function PointUpdating() {
      let { data: telusersinfo, error1 } = await supabase
        .from('telusersinfo')
        .select('*')
        .eq('id', a)
        .single();

      let info = telusersinfo;
      let points = info.point;
      let fixedPoint = points.toFixed(1);


      document.getElementById('pointvalue').textContent = `${fixedPoint}`;
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
  document.getElementById('RefCopyId').addEventListener('click', () => {
    navigator.clipboard.writeText(`${info.id}`).then(() => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "",
        showConfirmButton: false,
        timer: 1500
      });
    })
  });
  const ClaimRefBtn = document.getElementById('ClaimRef');
  const ReffValue = document.getElementById('FriendRef');
  function ReffCan() {
    // if (fixedPoint >= '20') {
    //   console.log('Ref Can');
    // }
    if (reffrall <= "1" && points1 >= 20) {
      ClaimRefBtn.style.backgroundColor = 'Green';
      ClaimRefBtn.addEventListener('click', () => {
        // console.log("Ok");
        // console.log(ReffValue.value);
        const FriendFind = ReffValue.value;
        async function ReffOkRun() {
          let { data: FindFriend, error } = await supabase
            .from('telusersinfo')
            .select('*')
            .eq('id', FriendFind)
            .single();


          let FriendPoint = FindFriend.point += 50;

          let MyPointReff = points1 += 50;
          console.log(FriendPoint);
          async function FriendRewardedOk() {
            // my Friend reward Referral

            const { data1, error1 } = await supabase.from("telusersinfo")
              .update({ point: FriendPoint })
              .eq('id', FriendFind)

            // my reward Referral
            const { data2, error2 } = await supabase.from("telusersinfo")
              .update({ point: MyPointReff })
              .eq('id', a)
            // my Ref Change
            const { data3, error3 } = await supabase.from("telusersinfo")
              .update({ reffrall: FriendFind })
              .eq('id', a)

            setTimeout(() => {
              window.location.reload();
            }, 2000)
          } FriendRewardedOk();

          // console.log(FindFriend);


        } ReffOkRun();


      });
    } else {
      if (reffrall >= "1") {
        // console.log(reffrall);
        document.getElementById('ClaimRef').style.display = 'none';
        document.getElementById('FriendRef').style.borderRadius = ' 0.5rem 0.5rem 0.5rem 0.5rem';
        document.getElementById('FriendRef').value = `${reffrall}`;
        document.getElementById('FriendRef').style.pointerEvents = 'none';
      }


      console.log('Ref Cant');
    }

  } ReffCan();


  if (info.name <= '') {
    console.log('aazzzzz');
    document.getElementById('Userp').style.display = 'none';
  }
  if (info.name.length >= 1) {

    let short_name = info.name.substring(0, 7);
    document.getElementById('Userp').innerText = `Name : ${short_name}...`;
  }

  // ..................Rank Mode ...............
  if (info.rank == "Silver") {

    document.getElementById('Ranks').style.color = "#c7c7c7";


    // ................SilverRank..................
    async function ShopSilverRank() {
      const { data: SilverRank, error } = await supabase
        .from('SilverRank')
        .select('*')


      if (error) {
        console.log('error :', error);
      }
      const SilverPack = SilverRank;
      GemSilverPack110 = SilverPack.find(item => item.PackName === '100 Gem Free Fire').PNeed;
      // console.log(GemSilverPack110);

      document.getElementById('Gem110').innerText = `${SilverPack.find(item => item.PackName === '100 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv110').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '100 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '100 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop110Gem
        let Name110 = document.getElementById('Name');
        let Email110 = document.getElementById('Email');
        let Id110 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop110() {
            // PNeed110Gem = info.point;
            GemSilverPack110 = SilverPack.find(item => item.PackName === '100 Gem Free Fire').PNeed;
            // console.log(PNeed110Gem, GemSilverPack110);
            if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop110Gem() {
                const user_Point = parseInt(info.point);
                const PNeed110Gem = parseInt(GemSilverPack110);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 1;

                if (user_Point >= PNeed110Gem) {
                  const UShop110Gem = user_Point - PNeed110Gem;
                  console.log(UShop110Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop110Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data110, error110 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '100 Gem Free Fire').PackName,
                          User_Name: Name110.value,
                          Gmail: Email110.value,
                          id_Uid_address: Id110.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name110.value = '';
                    Email110.value = '';
                    Id110.value = '';

                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop110Gem();


            } else {
              if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }


          } Shop110();
        };
      };
      // free220
      document.getElementById('Gem200').innerText = `${SilverPack.find(item => item.PackName === '210 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv221').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '210 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '210 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop221Gem
        let Name221 = document.getElementById('Name');
        let Email221 = document.getElementById('Email');
        let Id221 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop221() {
            GemGolden221 = SilverPack.find(item => item.PackName === '210 Gem Free Fire').PNeed;
            if (Name221.value.length > 1 && Email221.value.length > 4 && Id221.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop221Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden221);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 2;

                if (user_Point >= PNeedGem) {
                  const UShop221Gem = user_Point - PNeedGem;
                  console.log(UShop221Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop221Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data221, error221 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '210 Gem Free Fire').PackName,
                          User_Name: Name221.value,
                          Gmail: Email221.value,
                          id_Uid_address: Id221.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name221.value = '';
                    Email221.value = '';
                    Id221.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop221Gem();


            } else {
              if (Name221.value.length > 1 && Email221.value.length > 4 && Id221.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }
            // else if(Name110.value.length <1 && Email110.value.length < 4 && Id110.value.length < 5 ){
            //   console.log('cant');
            // }



            // console.log(`data${data110}`);
            // console.log(`error${error110}`);

          } Shop221();
        };
      };
      // free530
      document.getElementById('Gem500').innerText = `${SilverPack.find(item => item.PackName === '530 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv530').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '530 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '530 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop530Gem
        let Name530 = document.getElementById('Name');
        let Email530 = document.getElementById('Email');
        let Id530 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop530() {
            GemGolden530 = SilverPack.find(item => item.PackName === '530 Gem Free Fire').PNeed;
            if (Name530.value.length > 1 && Email530.value.length > 4 && Id530.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop530Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden530);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 5;

                if (user_Point >= PNeedGem) {
                  const UShop530Gem = user_Point - PNeedGem;
                  console.log(UShop530Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop530Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data530, error530 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '530 Gem Free Fire').PackName,
                          User_Name: Name530.value,
                          Gmail: Email530.value,
                          id_Uid_address: Id530.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name530.value = '';
                    Email530.value = '';
                    Id530.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop530Gem();


            } else {
              if (Name530.value.length > 1 && Email530.value.length > 4 && Id530.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop530();
        };
      };
      // free1080
      document.getElementById('Gem1080').innerText = `${SilverPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv1188').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '1060 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop1188Gem
        let Name1188 = document.getElementById('Name');
        let Email1188 = document.getElementById('Email');
        let Id1188 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop1188() {
            GemGolden1188 = SilverPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed;
            if (Name1188.value.length > 1 && Email1188.value.length > 4 && Id1188.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop1188Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden1188);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 10;

                if (user_Point >= PNeedGem) {
                  const UShop1188Gem = user_Point - PNeedGem;
                  console.log(UShop1188Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop1188Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data1188, error1188 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '1060 Gem Free Fire').PackName,
                          User_Name: Name1188.value,
                          Gmail: Email1188.value,
                          id_Uid_address: Id1188.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name1188.value = '';
                    Email1188.value = '';
                    Id1188.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop1188Gem();


            } else {
              if (Name1188.value.length > 1 && Email1188.value.length > 4 && Id1188.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop1188();
        };
      };
      // free2200
      document.getElementById('Gem2200').innerText = `${SilverPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed}`;
      document.getElementById('FreeDiv2200').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop1188Gem
        let Name2200 = document.getElementById('Name');
        let Email2200 = document.getElementById('Email');
        let Id2200 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop2200() {
            GemGolden2200 = SilverPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed;
            if (Name2200.value.length > 1 && Email2200.value.length > 4 && Id2200.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop2200Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden2200);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 20;

                if (user_Point >= PNeedGem) {
                  const UShop2200Gem = user_Point - PNeedGem;
                  console.log(UShop2200Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop2200Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data2200, error2200 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PackName,
                          User_Name: Name2200.value,
                          Gmail: Email2200.value,
                          id_Uid_address: Id2200.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name2200.value = '';
                    Email2200.value = '';
                    Id2200.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop2200Gem();


            } else {
              if (Name2200.value.length > 1 && Email2200.value.length > 4 && Id2200.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop2200();
        };
      };
      // 60UC
      document.getElementById('UC60').innerText = `${SilverPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
      document.getElementById('PUBG60UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '60 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopUC60
        let NameUC60 = document.getElementById('Name');
        let EmailUC60 = document.getElementById('Email');
        let IdUC60 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function ShopUC60() {
            GoldenUC60 = SilverPack.find(item => item.PackName === '60 UC PUBG').PNeed;
            if (NameUC60.value.length > 1 && EmailUC60.value.length > 4 && IdUC60.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function ShopUC60() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GoldenUC60);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 1;

                if (user_Point >= PNeedGem) {
                  const UShopUC60 = user_Point - PNeedGem;
                  console.log(UShopUC60);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShopUC60, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { dataUC60, errorUC60 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '60 UC PUBG').PackName,
                          User_Name: NameUC60.value,
                          Gmail: EmailUC60.value,
                          id_Uid_address: IdUC60.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    NameUC60.value = '';
                    EmailUC60.value = '';
                    IdUC60.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } ShopUC60();


            } else {
              if (NameUC60.value.length > 1 && EmailUC60.value.length > 4 && IdUC60.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } ShopUC60();
        };
      };
      // 325UC
      document.getElementById('UC300').innerText = `${SilverPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
      document.getElementById('PUBG325UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '300+25 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopUC325
        let Name325UC = document.getElementById('Name');
        let Email325UC = document.getElementById('Email');
        let Id325UC = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop325UC() {
            Golden325UC = SilverPack.find(item => item.PackName === '300+25 UC PUBG').PNeed;
            if (Name325UC.value.length > 1 && Email325UC.value.length > 4 && Id325UC.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop325UC() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden325UC);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 3;

                if (user_Point >= PNeedGem) {
                  const UShop325UC = user_Point - PNeedGem;
                  console.log(UShop325UC);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop325UC, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data325UC, error325UC } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '300+25 UC PUBG').PackName,
                          User_Name: Name325UC.value,
                          Gmail: Email325UC.value,
                          id_Uid_address: Id325UC.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name325UC.value = '';
                    Email325UC.value = '';
                    Id325UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop325UC();


            } else {
              if (Name325UC.value.length > 1 && Email325UC.value.length > 4 && Id325UC.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop325UC();
        };
      };
      // 660UC
      document.getElementById('UC600').innerText = `${SilverPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
      document.getElementById('PUBG660UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '600+60 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop660UC
        let Name660UC = document.getElementById('Name');
        let Email660UC = document.getElementById('Email');
        let Id660UC = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop660UC() {
            Golden660UC = SilverPack.find(item => item.PackName === '600+60 UC PUBG').PNeed;
            if (Name660UC.value.length > 1 && Email660UC.value.length > 4 && Id660UC.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop660UC() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden660UC);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 6;

                if (user_Point >= PNeedGem) {
                  const UShop660UC = user_Point - PNeedGem;
                  console.log(UShop660UC);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop660UC, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data660UC, error660UC } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '600+60 UC PUBG').PackName,
                          User_Name: Name660UC.value,
                          Gmail: Email660UC.value,
                          id_Uid_address: Id660UC.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name660UC.value = '';
                    Email660UC.value = '';
                    Id660UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop660UC();


            } else {
              if (Name660UC.value.length > 1 && Email660UC.value.length > 4 && Id660UC.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop660UC();
        };
      };
      // FreePayGolden
      document.getElementById('GoldenRank').innerText = `${SilverPack.find(item => item.PackName === 'Golden Account FreePay').PNeed}`;
      document.getElementById('DivGoldendAccount').onclick = function () {
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreePayAcount.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlUGF5QWNvdW50LmpwZyIsImlhdCI6MTc1MjM5NjExNCwiZXhwIjoyODM5OTkyMzk2MTE0fQ.Dfafwuv3IYR2Y_BrfEb8SzZIPjyxqjii_LuP4NEnCBo';
        Swal.fire({
          title: " Golden Rank:",
          text: `${SilverPack.find(item => item.PackName === 'Golden Account FreePay').description}`,
          icon: "question"
        });

        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === 'Golden Account FreePay').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === 'Golden Account FreePay').PNeed}`;
        document.getElementById('pUpderid').innerText = 'Account Rank Up';
        document.getElementById('pUpderid').style.backgroundColor = 'rgba(255, 192, 203, 0.275)';
        document.getElementById('id').style.pointerEvents = 'none';
        document.getElementById('id').style.backgroundColor = 'rgba(255, 192, 203, 0.275)';
        document.getElementById('id').value = ' This Account';
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopDiamondAccount
        let NameDiamondAccount = document.getElementById('Name');
        let EmailDiamondAccount = document.getElementById('Email');
        // let IdDiamondAccount = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function ShopSilverAccount() {
            SilverGoldenAccount = SilverPack.find(item => item.PackName === 'Golden Account FreePay').PNeed;
            if (NameDiamondAccount.value.length > 1 && EmailDiamondAccount.value.length > 4) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function ShopSilverAccount() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(SilverGoldenAccount);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 10;

                if (user_Point >= PNeedGem) {
                  const UShopDiamondAccount = user_Point - PNeedGem;
                  console.log(UShopDiamondAccount);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShopDiamondAccount, level: userLevelUpdate, rank: 'Golden' })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop DiamondAccount Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { dataDiamondAccount, errorDiamondAccount } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === 'Golden Account FreePay').PackName,
                          User_Name: NameDiamondAccount.value,
                          Gmail: EmailDiamondAccount.value,
                          Mode: 'Ok',
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    NameDiamondAccount.value = '';
                    EmailDiamondAccount.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } ShopSilverAccount();


            } else {
              if (NameDiamondAccount.value.length > 1 && EmailDiamondAccount.value.length > 4) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } ShopSilverAccount();
        };
      };
      // FreePayDaimond
      document.getElementById('DiamondRank').innerText = `${SilverPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
      document.getElementById('DivDiamondAccount').onclick = function () {
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreePayAcount.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlUGF5QWNvdW50LmpwZyIsImlhdCI6MTc1MjM5NjExNCwiZXhwIjoyODM5OTkyMzk2MTE0fQ.Dfafwuv3IYR2Y_BrfEb8SzZIPjyxqjii_LuP4NEnCBo';
        Swal.fire({
          title: " Diamond Rank:",
          text: `${SilverPack.find(item => item.PackName === ' Diamond Account FreePay').description}`,
          icon: "question"
        });

        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === ' Diamond Account FreePay').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
        document.getElementById('pUpderid').innerText = 'Account Rank Up';
        document.getElementById('pUpderid').style.backgroundColor = 'rgba(255, 192, 203, 0.275)';
        document.getElementById('id').style.pointerEvents = 'none';
        document.getElementById('id').style.backgroundColor = 'rgba(255, 192, 203, 0.275)';
        document.getElementById('id').value = ' This Account';
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopDiamondAccount
        let NameDiamondAccount = document.getElementById('Name');
        let EmailDiamondAccount = document.getElementById('Email');
        // let IdDiamondAccount = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function ShopSilverAccount() {
            SilverGoldenAccount = SilverPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed;
            if (NameDiamondAccount.value.length > 1 && EmailDiamondAccount.value.length > 4) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function ShopSilverAccount() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(SilverDiamondAccount);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 10;

                if (user_Point >= PNeedGem) {
                  const UShopDiamondAccount = user_Point - PNeedGem;
                  console.log(UShopDiamondAccount);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShopDiamondAccount, level: userLevelUpdate, Rank: 'Diamond' })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop DiamondAccount Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { dataDiamondAccount, errorDiamondAccount } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === ' Diamond Account FreePay').PackName,
                          User_Name: NameDiamondAccount.value,
                          Gmail: EmailDiamondAccount.value,
                          Mode: 'Ok',
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    NameDiamondAccount.value = '';
                    EmailDiamondAccount.value = '';
                    // Id660UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } ShopSilverAccount();


            } else {
              if (NameDiamondAccount.value.length > 1 && EmailDiamondAccount.value.length > 4) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } ShopSilverAccount();
        };
      };
      // 15$
      document.getElementById('Tether15Value').innerText = `${SilverPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
      document.getElementById('DivTether15Trc20').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'Tether USDT (TRC20) Address:';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'TGKuY87SlkccqHzASJircuxHQLTi2MJRg8';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/TETHERtrc20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9URVRIRVJ0cmMyMC5qcGciLCJpYXQiOjE3NTIzOTYwNTAsImV4cCI6MjgzOTk5MjM5NjA1MH0.ZzgQQI4c8U2brT2-hYLwyAL090lpwcyGPppJr519ca4';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '15$ tether trc20').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
        Swal.fire({
          title: " 15$ USDT ",
          text: `${SilverPack.find(item => item.PackName === '15$ tether trc20').description}`,
          icon: "warning"
        });
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop15TRC20
        let Name15TRC20 = document.getElementById('Name');
        let Email15TRC20 = document.getElementById('Email');
        let Id15TRC20 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop15TRC20() {
            Golden15TRC20 = SilverPack.find(item => item.PackName === '15$ tether trc20').PNeed;
            if (Name15TRC20.value.length > 1 && Email15TRC20.value.length > 4 && Id15TRC20.value.length > 30) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop15TRC20() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden15TRC20);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 15;

                if (user_Point >= PNeedGem) {
                  const UShop15TRC20 = user_Point - PNeedGem;
                  console.log(UShop15TRC20);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop15TRC20, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 15TRC20 Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data15TRC20, error15TRC20 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '15$ tether trc20').PackName,
                          User_Name: Name15TRC20.value,
                          Gmail: Email15TRC20.value,
                          id_Uid_address: Id15TRC20.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name15TRC20.value = '';
                    Email15TRC20.value = '';
                    Id15TRC20.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop15TRC20();


            } else {
              if (Name15TRC20.value.length > 1 && Email15TRC20.value.length > 4 && Id15TRC20.value.length > 30) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields or Check your wallet address",
                icon: "warning",
                draggable: true
              });
            }

          } Shop15TRC20();
        };
      };

      // 50$
      document.getElementById('Tether50Value').innerText = `${SilverPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;
      document.getElementById('DivTether50Trc20').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'Tether USDT (TRC20) Address:';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'TGKuY87SlkccqHzASJircuxHQLTi2MJRg8';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/TETHERtrc20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9URVRIRVJ0cmMyMC5qcGciLCJpYXQiOjE3NTIzOTYwNTAsImV4cCI6MjgzOTk5MjM5NjA1MH0.ZzgQQI4c8U2brT2-hYLwyAL090lpwcyGPppJr519ca4';
        document.getElementById('P').innerText = `${SilverPack.find(item => item.PackName === '50$ tether trc20').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${SilverPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;
        Swal.fire({
          title: " 50$ USDT ",
          text: `${SilverPack.find(item => item.PackName === '50$ tether trc20').description}`,
          icon: "warning"
        });
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop50TRC20
        let Name50TRC20 = document.getElementById('Name');
        let Email50TRC20 = document.getElementById('Email');
        let Id50TRC20 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop50TRC20() {
            Golden50TRC20 = SilverPack.find(item => item.PackName === '50$ tether trc20').PNeed;
            if (Name50TRC20.value.length > 1 && Email50TRC20.value.length > 4 && Id50TRC20.value.length > 30) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop50TRC20() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden50TRC20);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 50;

                if (user_Point >= PNeedGem) {
                  const UShop50TRC20 = user_Point - PNeedGem;
                  console.log(UShop50TRC20);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop50TRC20, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 50TRC20 Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data50TRC20, error50TRC20 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: SilverPack.find(item => item.PackName === '50$ tether trc20').PackName,
                          User_Name: Name50TRC20.value,
                          Gmail: Email50TRC20.value,
                          id_Uid_address: Id50TRC20.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name50TRC20.value = '';
                    Email50TRC20.value = '';
                    Id50TRC20.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop50TRC20();


            } else {
              if (Name50TRC20.value.length > 1 && Email50TRC20.value.length > 4 && Id50TRC20.value.length > 30) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields or Check your wallet address",
                icon: "warning",
                draggable: true
              });
            }

          } Shop50TRC20();

        }

      }

    } ShopSilverRank();




  } else if (info.rank == "Golden") {

    //.................. Golden Rank ................
    // console.log('Rank is Golden');
    document.getElementById('Ranks').style.color = "#ffee00";

    async function ShopGoldenRank() {
      const { data: GoldenRank, error } = await supabase
        .from('GoldenRank')
        .select('*')
      if (error) {
        console.log('error :', error);
      } else {
        // console.log('data :',GoldenRank);
      }

      const GoldenPack = GoldenRank;
      document.getElementById('Gem110').innerText = `${GoldenPack.find(item => item.PackName === '100 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv110').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '100 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '100 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop110Gem
        let Name110 = document.getElementById('Name');
        let Email110 = document.getElementById('Email');
        let Id110 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop110() {
            // PNeed110Gem = info.point;
            GemGolden110 = GoldenPack.find(item => item.PackName === '100 Gem Free Fire').PNeed;
            // console.log(PNeed110Gem, GemGolden110);
            if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop110Gem() {
                const user_Point = parseInt(info.point);
                const PNeed110Gem = parseInt(GemGolden110);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 1;

                if (user_Point >= PNeed110Gem) {
                  const UShop110Gem = user_Point - PNeed110Gem;
                  console.log(UShop110Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop110Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data110, error110 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '100 Gem Free Fire').PackName,
                          User_Name: Name110.value,
                          Gmail: Email110.value,
                          id_Uid_address: Id110.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name110.value = '';
                    Email110.value = '';
                    Id110.value = '';

                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop110Gem();


            } else {
              if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }


          } Shop110();
        };
      };
      // free220
      document.getElementById('Gem200').innerText = `${GoldenPack.find(item => item.PackName === '210 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv221').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '210 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '210 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop221Gem
        let Name221 = document.getElementById('Name');
        let Email221 = document.getElementById('Email');
        let Id221 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop221() {
            GemGolden221 = GoldenPack.find(item => item.PackName === '210 Gem Free Fire').PNeed;
            if (Name221.value.length > 1 && Email221.value.length > 4 && Id221.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop221Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden221);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 2;

                if (user_Point >= PNeedGem) {
                  const UShop221Gem = user_Point - PNeedGem;
                  console.log(UShop221Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop221Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data221, error221 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '210 Gem Free Fire').PackName,
                          User_Name: Name221.value,
                          Gmail: Email221.value,
                          id_Uid_address: Id221.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name221.value = '';
                    Email221.value = '';
                    Id221.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop221Gem();


            } else {
              if (Name221.value.length > 1 && Email221.value.length > 4 && Id221.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }
            // else if(Name110.value.length <1 && Email110.value.length < 4 && Id110.value.length < 5 ){
            //   console.log('cant');
            // }



            // console.log(`data${data110}`);
            // console.log(`error${error110}`);

          } Shop221();
        };
      };
      // free530
      document.getElementById('Gem500').innerText = `${GoldenPack.find(item => item.PackName === '530 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv530').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '530 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '530 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop530Gem
        let Name530 = document.getElementById('Name');
        let Email530 = document.getElementById('Email');
        let Id530 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop530() {
            GemGolden530 = GoldenPack.find(item => item.PackName === '530 Gem Free Fire').PNeed;
            if (Name530.value.length > 1 && Email530.value.length > 4 && Id530.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop530Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden530);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 5;

                if (user_Point >= PNeedGem) {
                  const UShop530Gem = user_Point - PNeedGem;
                  console.log(UShop530Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop530Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data530, error530 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '530 Gem Free Fire').PackName,
                          User_Name: Name530.value,
                          Gmail: Email530.value,
                          id_Uid_address: Id530.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name530.value = '';
                    Email530.value = '';
                    Id530.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop530Gem();


            } else {
              if (Name530.value.length > 1 && Email530.value.length > 4 && Id530.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop530();
        };
      };
      // free1080
      document.getElementById('Gem1080').innerText = `${GoldenPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv1188').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '1060 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop1188Gem
        let Name1188 = document.getElementById('Name');
        let Email1188 = document.getElementById('Email');
        let Id1188 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop1188() {
            GemGolden1188 = GoldenPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed;
            if (Name1188.value.length > 1 && Email1188.value.length > 4 && Id1188.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop1188Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden1188);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 10;

                if (user_Point >= PNeedGem) {
                  const UShop1188Gem = user_Point - PNeedGem;
                  console.log(UShop1188Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop1188Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data1188, error1188 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '1060 Gem Free Fire').PackName,
                          User_Name: Name1188.value,
                          Gmail: Email1188.value,
                          id_Uid_address: Id1188.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name1188.value = '';
                    Email1188.value = '';
                    Id1188.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop1188Gem();


            } else {
              if (Name1188.value.length > 1 && Email1188.value.length > 4 && Id1188.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop1188();
        };
      };
      // free2200
      document.getElementById('Gem2200').innerText = `${GoldenPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed}`;
      document.getElementById('FreeDiv2200').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop1188Gem
        let Name2200 = document.getElementById('Name');
        let Email2200 = document.getElementById('Email');
        let Id2200 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop2200() {
            GemGolden2200 = GoldenPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed;
            if (Name2200.value.length > 1 && Email2200.value.length > 4 && Id2200.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop2200Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden2200);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 20;

                if (user_Point >= PNeedGem) {
                  const UShop2200Gem = user_Point - PNeedGem;
                  console.log(UShop2200Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop2200Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data2200, error2200 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PackName,
                          User_Name: Name2200.value,
                          Gmail: Email2200.value,
                          id_Uid_address: Id2200.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name2200.value = '';
                    Email2200.value = '';
                    Id2200.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop2200Gem();


            } else {
              if (Name2200.value.length > 1 && Email2200.value.length > 4 && Id2200.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop2200();
        };
      };

      // 60UC
      document.getElementById('UC60').innerText = `${GoldenPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
      document.getElementById('PUBG60UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '60 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopUC60
        let NameUC60 = document.getElementById('Name');
        let EmailUC60 = document.getElementById('Email');
        let IdUC60 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function ShopUC60() {
            GoldenUC60 = GoldenPack.find(item => item.PackName === '60 UC PUBG').PNeed;
            if (NameUC60.value.length > 1 && EmailUC60.value.length > 4 && IdUC60.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function ShopUC60() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GoldenUC60);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 1;

                if (user_Point >= PNeedGem) {
                  const UShopUC60 = user_Point - PNeedGem;
                  console.log(UShopUC60);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShopUC60, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { dataUC60, errorUC60 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '60 UC PUBG').PackName,
                          User_Name: NameUC60.value,
                          Gmail: EmailUC60.value,
                          id_Uid_address: IdUC60.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    NameUC60.value = '';
                    EmailUC60.value = '';
                    IdUC60.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } ShopUC60();


            } else {
              if (NameUC60.value.length > 1 && EmailUC60.value.length > 4 && IdUC60.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } ShopUC60();
        };
      };
      // 325UC
      document.getElementById('UC300').innerText = `${GoldenPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
      document.getElementById('PUBG325UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '300+25 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopUC325
        let Name325UC = document.getElementById('Name');
        let Email325UC = document.getElementById('Email');
        let Id325UC = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop325UC() {
            Golden325UC = GoldenPack.find(item => item.PackName === '300+25 UC PUBG').PNeed;
            if (Name325UC.value.length > 1 && Email325UC.value.length > 4 && Id325UC.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop325UC() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden325UC);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 3;

                if (user_Point >= PNeedGem) {
                  const UShop325UC = user_Point - PNeedGem;
                  console.log(UShop325UC);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop325UC, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data325UC, error325UC } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '300+25 UC PUBG').PackName,
                          User_Name: Name325UC.value,
                          Gmail: Email325UC.value,
                          id_Uid_address: Id325UC.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name325UC.value = '';
                    Email325UC.value = '';
                    Id325UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop325UC();


            } else {
              if (Name325UC.value.length > 1 && Email325UC.value.length > 4 && Id325UC.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop325UC();
        };
      };
      // 660UC
      document.getElementById('UC600').innerText = `${GoldenPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
      document.getElementById('PUBG660UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '600+60 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop660UC
        let Name660UC = document.getElementById('Name');
        let Email660UC = document.getElementById('Email');
        let Id660UC = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop660UC() {
            Golden660UC = GoldenPack.find(item => item.PackName === '600+60 UC PUBG').PNeed;
            if (Name660UC.value.length > 1 && Email660UC.value.length > 4 && Id660UC.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop660UC() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden660UC);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 6;

                if (user_Point >= PNeedGem) {
                  const UShop660UC = user_Point - PNeedGem;
                  console.log(UShop660UC);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop660UC, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data660UC, error660UC } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '600+60 UC PUBG').PackName,
                          User_Name: Name660UC.value,
                          Gmail: Email660UC.value,
                          id_Uid_address: Id660UC.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name660UC.value = '';
                    Email660UC.value = '';
                    Id660UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop660UC();


            } else {
              if (Name660UC.value.length > 1 && Email660UC.value.length > 4 && Id660UC.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop660UC();
        };
      };
      // FreePayGolden
      document.getElementById('GoldenRank').innerText = `${GoldenPack.find(item => item.PackName === 'Golden Account FreePay').PNeed}`;
      document.getElementById('DivGoldendAccount').onclick = function () {
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
          title: `your account :${info.rank}`
        });
      };
      // FreePayDaimond 
      document.getElementById('DiamondRank').innerText = `${GoldenPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
      document.getElementById('DivDiamondAccount').onclick = function () {
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreePayAcount.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlUGF5QWNvdW50LmpwZyIsImlhdCI6MTc1MjM5NjExNCwiZXhwIjoyODM5OTkyMzk2MTE0fQ.Dfafwuv3IYR2Y_BrfEb8SzZIPjyxqjii_LuP4NEnCBo';
        Swal.fire({
          title: " Diamond Rank:",
          text: `${GoldenPack.find(item => item.PackName === ' Diamond Account FreePay').description}`,
          icon: "question"
        });

        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === ' Diamond Account FreePay').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
        document.getElementById('pUpderid').innerText = 'Account Rank Up';
        document.getElementById('pUpderid').style.backgroundColor = 'rgba(255, 192, 203, 0.275)';
        document.getElementById('id').style.pointerEvents = 'none';
        document.getElementById('id').style.backgroundColor = 'rgba(255, 192, 203, 0.275)';
        document.getElementById('id').value = ' This Account';
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopDiamondAccount
        let NameDiamondAccount = document.getElementById('Name');
        let EmailDiamondAccount = document.getElementById('Email');
        // let IdDiamondAccount = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function ShopDiamondAccount() {
            GoldenDiamondAccount = GoldenPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed;
            if (NameDiamondAccount.value.length > 1 && EmailDiamondAccount.value.length > 4) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function ShopDiamondAccount() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GoldenDiamondAccount);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 10;

                if (user_Point >= PNeedGem) {
                  const UShopDiamondAccount = user_Point - PNeedGem;
                  console.log(UShopDiamondAccount);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShopDiamondAccount, level: userLevelUpdate, rank: 'Diamond' })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop DiamondAccount Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { dataDiamondAccount, errorDiamondAccount } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === ' Diamond Account FreePay').PackName,
                          User_Name: NameDiamondAccount.value,
                          Gmail: EmailDiamondAccount.value,
                          Mode: 'Ok',
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    NameDiamondAccount.value = '';
                    EmailDiamondAccount.value = '';
                    // Id660UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } ShopDiamondAccount();


            } else {
              if (NameDiamondAccount.value.length > 1 && EmailDiamondAccount.value.length > 4) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } ShopDiamondAccount();
        };
      };
      // 15$
      document.getElementById('Tether15Value').innerText = `${GoldenPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
      document.getElementById('DivTether15Trc20').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'Tether USDT (TRC20) Address:';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'TGKuY87SlkccqHzASJircuxHQLTi2MJRg8';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/TETHERtrc20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9URVRIRVJ0cmMyMC5qcGciLCJpYXQiOjE3NTIzOTYwNTAsImV4cCI6MjgzOTk5MjM5NjA1MH0.ZzgQQI4c8U2brT2-hYLwyAL090lpwcyGPppJr519ca4';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '15$ tether trc20').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
        Swal.fire({
          title: " 15$ USDT ",
          text: `${GoldenPack.find(item => item.PackName === '15$ tether trc20').description}`,
          icon: "warning"
        });
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop15TRC20
        let Name15TRC20 = document.getElementById('Name');
        let Email15TRC20 = document.getElementById('Email');
        let Id15TRC20 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop15TRC20() {
            Golden15TRC20 = GoldenPack.find(item => item.PackName === '15$ tether trc20').PNeed;
            if (Name15TRC20.value.length > 1 && Email15TRC20.value.length > 4 && Id15TRC20.value.length > 30) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop15TRC20() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden15TRC20);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 15;

                if (user_Point >= PNeedGem) {
                  const UShop15TRC20 = user_Point - PNeedGem;
                  console.log(UShop15TRC20);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop15TRC20, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 15TRC20 Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data15TRC20, error15TRC20 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '15$ tether trc20').PackName,
                          User_Name: Name15TRC20.value,
                          Gmail: Email15TRC20.value,
                          id_Uid_address: Id15TRC20.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name15TRC20.value = '';
                    Email15TRC20.value = '';
                    Id15TRC20.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop15TRC20();


            } else {
              if (Name15TRC20.value.length > 1 && Email15TRC20.value.length > 4 && Id15TRC20.value.length > 30) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields or Check your wallet address",
                icon: "warning",
                draggable: true
              });
            }

          } Shop15TRC20();
        };
      };
      // 50$
      document.getElementById('Tether50Value').innerText = `${GoldenPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;
      document.getElementById('DivTether50Trc20').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'Tether USDT (TRC20) Address:';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'TGKuY87SlkccqHzASJircuxHQLTi2MJRg8';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/TETHERtrc20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9URVRIRVJ0cmMyMC5qcGciLCJpYXQiOjE3NTIzOTYwNTAsImV4cCI6MjgzOTk5MjM5NjA1MH0.ZzgQQI4c8U2brT2-hYLwyAL090lpwcyGPppJr519ca4';
        document.getElementById('P').innerText = `${GoldenPack.find(item => item.PackName === '50$ tether trc20').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${GoldenPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;
        Swal.fire({
          title: " 50$ USDT ",
          text: `${GoldenPack.find(item => item.PackName === '50$ tether trc20').description}`,
          icon: "warning"
        });
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop50TRC20
        let Name50TRC20 = document.getElementById('Name');
        let Email50TRC20 = document.getElementById('Email');
        let Id50TRC20 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop50TRC20() {
            Golden50TRC20 = GoldenPack.find(item => item.PackName === '50$ tether trc20').PNeed;
            if (Name50TRC20.value.length > 1 && Email50TRC20.value.length > 4 && Id50TRC20.value.length > 30) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop50TRC20() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden50TRC20);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 50;

                if (user_Point >= PNeedGem) {
                  const UShop50TRC20 = user_Point - PNeedGem;
                  console.log(UShop50TRC20);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop50TRC20, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 50TRC20 Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data50TRC20, error50TRC20 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '50$ tether trc20').PackName,
                          User_Name: Name50TRC20.value,
                          Gmail: Email50TRC20.value,
                          id_Uid_address: Id50TRC20.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name50TRC20.value = '';
                    Email50TRC20.value = '';
                    Id50TRC20.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop50TRC20();


            } else {
              if (Name50TRC20.value.length > 1 && Email50TRC20.value.length > 4 && Id50TRC20.value.length > 30) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields or Check your wallet address",
                icon: "warning",
                draggable: true
              });
            }

          } Shop50TRC20();
        };
      };
    } ShopGoldenRank();

  } else if (info.rank == "Diamond") {
    // ...................DiamondRankMod..............
    document.getElementById('Ranks').style.color = "#00d9ff";

    async function ShopDiamondRank() {
      const { data: DiamondRank, error } = await supabase
        .from('DiamondRank')
        .select('*')
      if (error) {
        console.log('error :', error);
      } else {
        // console.log('data :',DiamondRankRank);
      }

      const DiamondPack = DiamondRank;

      document.getElementById('Gem110').innerText = `${DiamondPack.find(item => item.PackName === '100 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv110').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '100 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '100 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop110Gem
        let Name110 = document.getElementById('Name');
        let Email110 = document.getElementById('Email');
        let Id110 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop110() {
            // PNeed110Gem = info.point;
            GemGolden110 = DiamondPack.find(item => item.PackName === '100 Gem Free Fire').PNeed;
            // console.log(PNeed110Gem, GemGolden110);
            if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop110Gem() {
                const user_Point = parseInt(info.point);
                const PNeed110Gem = parseInt(GemGolden110);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 1;

                if (user_Point >= PNeed110Gem) {
                  const UShop110Gem = user_Point - PNeed110Gem;
                  console.log(UShop110Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop110Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data110, error110 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '100 Gem Free Fire').PackName,
                          User_Name: Name110.value,
                          Gmail: Email110.value,
                          id_Uid_address: Id110.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name110.value = '';
                    Email110.value = '';
                    Id110.value = '';

                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop110Gem();


            } else {
              if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }


          } Shop110();
        };
      };
      // free220
      document.getElementById('Gem200').innerText = `${DiamondPack.find(item => item.PackName === '210 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv221').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '210 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '210 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop221Gem
        let Name221 = document.getElementById('Name');
        let Email221 = document.getElementById('Email');
        let Id221 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop221() {
            GemGolden221 = DiamondPack.find(item => item.PackName === '210 Gem Free Fire').PNeed;
            if (Name221.value.length > 1 && Email221.value.length > 4 && Id221.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop221Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden221);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 2;

                if (user_Point >= PNeedGem) {
                  const UShop221Gem = user_Point - PNeedGem;
                  console.log(UShop221Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop221Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data221, error221 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '210 Gem Free Fire').PackName,
                          User_Name: Name221.value,
                          Gmail: Email221.value,
                          id_Uid_address: Id221.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name221.value = '';
                    Email221.value = '';
                    Id221.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop221Gem();


            } else {
              if (Name221.value.length > 1 && Email221.value.length > 4 && Id221.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }
            // else if(Name110.value.length <1 && Email110.value.length < 4 && Id110.value.length < 5 ){
            //   console.log('cant');
            // }



            // console.log(`data${data110}`);
            // console.log(`error${error110}`);

          } Shop221();
        };
      };
      // free530
      document.getElementById('Gem500').innerText = `${DiamondPack.find(item => item.PackName === '530 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv530').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '530 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '530 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop530Gem
        let Name530 = document.getElementById('Name');
        let Email530 = document.getElementById('Email');
        let Id530 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop530() {
            GemGolden530 = DiamondPack.find(item => item.PackName === '530 Gem Free Fire').PNeed;
            if (Name530.value.length > 1 && Email530.value.length > 4 && Id530.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop530Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden530);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 5;

                if (user_Point >= PNeedGem) {
                  const UShop530Gem = user_Point - PNeedGem;
                  console.log(UShop530Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop530Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data530, error530 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '530 Gem Free Fire').PackName,
                          User_Name: Name530.value,
                          Gmail: Email530.value,
                          id_Uid_address: Id530.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name530.value = '';
                    Email530.value = '';
                    Id530.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop530Gem();


            } else {
              if (Name530.value.length > 1 && Email530.value.length > 4 && Id530.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop530();
        };
      };
      // free1080
      document.getElementById('Gem1080').innerText = `${DiamondPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed}`;
      document.getElementById('FreeDiv1188').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '1060 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop1188Gem
        let Name1188 = document.getElementById('Name');
        let Email1188 = document.getElementById('Email');
        let Id1188 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop1188() {
            GemGolden1188 = DiamondPack.find(item => item.PackName === '1060 Gem Free Fire').PNeed;
            if (Name1188.value.length > 1 && Email1188.value.length > 4 && Id1188.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop1188Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden1188);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 10;

                if (user_Point >= PNeedGem) {
                  const UShop1188Gem = user_Point - PNeedGem;
                  console.log(UShop1188Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop1188Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data1188, error1188 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '1060 Gem Free Fire').PackName,
                          User_Name: Name1188.value,
                          Gmail: Email1188.value,
                          id_Uid_address: Id1188.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name1188.value = '';
                    Email1188.value = '';
                    Id1188.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop1188Gem();


            } else {
              if (Name1188.value.length > 1 && Email1188.value.length > 4 && Id1188.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop1188();
        };
      };
      // free2200
      document.getElementById('Gem2200').innerText = `${DiamondPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed}`;
      document.getElementById('FreeDiv2200').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/FreeFire.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9GcmVlRmlyZS5wbmciLCJpYXQiOjE3NTIzOTU4NzgsImV4cCI6MjgzOTk5MjM5NTg3OH0.NRDOZvqIRJGmU3hJ_MRPQlUXCSCpNgttLvhw1pIM6CM';
        document.getElementById('pUpderid').innerText = 'Free Fire id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your Free Fire id ';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop1188Gem
        let Name2200 = document.getElementById('Name');
        let Email2200 = document.getElementById('Email');
        let Id2200 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop2200() {
            GemGolden2200 = DiamondPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PNeed;
            if (Name2200.value.length > 1 && Email2200.value.length > 4 && Id2200.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop2200Gem() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GemGolden2200);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 20;

                if (user_Point >= PNeedGem) {
                  const UShop2200Gem = user_Point - PNeedGem;
                  console.log(UShop2200Gem);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop2200Gem, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data2200, error2200 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === 'Weekly Membership for Free Fire').PackName,
                          User_Name: Name2200.value,
                          Gmail: Email2200.value,
                          id_Uid_address: Id2200.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name2200.value = '';
                    Email2200.value = '';
                    Id2200.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop2200Gem();


            } else {
              if (Name2200.value.length > 1 && Email2200.value.length > 4 && Id2200.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop2200();
        };
      };

      // 60UC
      document.getElementById('UC60').innerText = `${DiamondPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
      document.getElementById('PUBG60UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '60 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopUC60
        let NameUC60 = document.getElementById('Name');
        let EmailUC60 = document.getElementById('Email');
        let IdUC60 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function ShopUC60() {
            GoldenUC60 = DiamondPack.find(item => item.PackName === '60 UC PUBG').PNeed;
            if (NameUC60.value.length > 1 && EmailUC60.value.length > 4 && IdUC60.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function ShopUC60() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(GoldenUC60);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 1;

                if (user_Point >= PNeedGem) {
                  const UShopUC60 = user_Point - PNeedGem;
                  console.log(UShopUC60);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShopUC60, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { dataUC60, errorUC60 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '60 UC PUBG').PackName,
                          User_Name: NameUC60.value,
                          Gmail: EmailUC60.value,
                          id_Uid_address: IdUC60.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    NameUC60.value = '';
                    EmailUC60.value = '';
                    IdUC60.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } ShopUC60();


            } else {
              if (NameUC60.value.length > 1 && EmailUC60.value.length > 4 && IdUC60.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } ShopUC60();
        };
      };
      // 325UC
      document.getElementById('UC300').innerText = `${DiamondPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
      document.getElementById('PUBG325UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '300+25 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shopUC325
        let Name325UC = document.getElementById('Name');
        let Email325UC = document.getElementById('Email');
        let Id325UC = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop325UC() {
            Golden325UC = DiamondPack.find(item => item.PackName === '300+25 UC PUBG').PNeed;
            if (Name325UC.value.length > 1 && Email325UC.value.length > 4 && Id325UC.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop325UC() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden325UC);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 3;

                if (user_Point >= PNeedGem) {
                  const UShop325UC = user_Point - PNeedGem;
                  console.log(UShop325UC);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop325UC, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data325UC, error325UC } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '300+25 UC PUBG').PackName,
                          User_Name: Name325UC.value,
                          Gmail: Email325UC.value,
                          id_Uid_address: Id325UC.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name325UC.value = '';
                    Email325UC.value = '';
                    Id325UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop325UC();


            } else {
              if (Name325UC.value.length > 1 && Email325UC.value.length > 4 && Id325UC.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop325UC();
        };
      };
      // 660UC
      document.getElementById('UC600').innerText = `${DiamondPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
      document.getElementById('PUBG660UC').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'PUBG id :';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'input your PUBG id ';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/PUBG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9QVUJHLnBuZyIsImlhdCI6MTc1MjM5NjAwMywiZXhwIjoyODM5OTkyMzk2MDAzfQ.lFASuf_1wQt00RjIwUQFdL5wDhqKaF1kH2ftxb95ix4';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '600+60 UC PUBG').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop660UC
        let Name660UC = document.getElementById('Name');
        let Email660UC = document.getElementById('Email');
        let Id660UC = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop660UC() {
            Golden660UC = DiamondPack.find(item => item.PackName === '600+60 UC PUBG').PNeed;
            if (Name660UC.value.length > 1 && Email660UC.value.length > 4 && Id660UC.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop660UC() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden660UC);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 6;

                if (user_Point >= PNeedGem) {
                  const UShop660UC = user_Point - PNeedGem;
                  console.log(UShop660UC);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop660UC, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop UC60 PUBG Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data660UC, error660UC } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '600+60 UC PUBG').PackName,
                          User_Name: Name660UC.value,
                          Gmail: Email660UC.value,
                          id_Uid_address: Id660UC.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name660UC.value = '';
                    Email660UC.value = '';
                    Id660UC.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop660UC();


            } else {
              if (Name660UC.value.length > 1 && Email660UC.value.length > 4 && Id660UC.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }

          } Shop660UC();
        };
      };
      // FreePayGolden
      document.getElementById('GoldenRank').innerText = `${DiamondPack.find(item => item.PackName === 'Golden Account FreePay').PNeed}`;
      document.getElementById('DivGoldendAccount').onclick = function () {
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
          title: `your account :${info.rank}`
        });
      };
      // FreePayDaimond
      document.getElementById('DiamondRank').innerText = `${DiamondPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
      document.getElementById('DivDiamondAccount').onclick = function () {
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
          title: `your account :${info.rank}`
        });
      };
      // 15$
      document.getElementById('Tether15Value').innerText = `${DiamondPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
      document.getElementById('DivTether15Trc20').onclick = function () {
        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'Tether USDT (TRC20) Address:';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'TGKuY87SlkccqHzASJircuxHQLTi2MJRg8';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/TETHERtrc20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9URVRIRVJ0cmMyMC5qcGciLCJpYXQiOjE3NTIzOTYwNTAsImV4cCI6MjgzOTk5MjM5NjA1MH0.ZzgQQI4c8U2brT2-hYLwyAL090lpwcyGPppJr519ca4';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '15$ tether trc20').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
        Swal.fire({
          title: " 15$ USDT ",
          text: `${DiamondPack.find(item => item.PackName === '15$ tether trc20').description}`,
          icon: "warning"
        });
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop15TRC20
        let Name15TRC20 = document.getElementById('Name');
        let Email15TRC20 = document.getElementById('Email');
        let Id15TRC20 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop15TRC20() {
            Golden15TRC20 = DiamondPack.find(item => item.PackName === '15$ tether trc20').PNeed;
            if (Name15TRC20.value.length > 1 && Email15TRC20.value.length > 4 && Id15TRC20.value.length > 30) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop15TRC20() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden15TRC20);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 15;

                if (user_Point >= PNeedGem) {
                  const UShop15TRC20 = user_Point - PNeedGem;
                  console.log(UShop15TRC20);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop15TRC20, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 15TRC20 Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data15TRC20, error15TRC20 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '15$ tether trc20').PackName,
                          User_Name: Name15TRC20.value,
                          Gmail: Email15TRC20.value,
                          id_Uid_address: Id15TRC20.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name15TRC20.value = '';
                    Email15TRC20.value = '';
                    Id15TRC20.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop15TRC20();


            } else {
              if (Name15TRC20.value.length > 1 && Email15TRC20.value.length > 4 && Id15TRC20.value.length > 30) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields or Check your wallet address",
                icon: "warning",
                draggable: true
              });
            }

          } Shop15TRC20();
        };
      };
      // 50$
      document.getElementById('Tether50Value').innerText = `${DiamondPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;
      document.getElementById('DivTether50Trc20').onclick = function () {

        document.getElementById('id').value = '';
        document.getElementById('pUpderid').innerText = 'Tether USDT (TRC20) Address:';
        document.getElementById('pUpderid').style.backgroundColor = 'pink';
        document.getElementById('id').style.pointerEvents = 'all';
        document.getElementById('id').style.backgroundColor = 'pink';
        document.getElementById('id').placeholder = 'TGKuY87SlkccqHzASJircuxHQLTi2MJRg8';
        document.getElementById('Cardimage').src = 'https://nomuylulsjtwjoinrxmr.supabase.co/storage/v1/object/sign/picsbucketshop/TETHERtrc20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81YTYzZmZiNS02NDZkLTRlYzAtOTJmMC02YWFlZTE2MmNkOGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaWNzYnVja2V0c2hvcC9URVRIRVJ0cmMyMC5qcGciLCJpYXQiOjE3NTIzOTYwNTAsImV4cCI6MjgzOTk5MjM5NjA1MH0.ZzgQQI4c8U2brT2-hYLwyAL090lpwcyGPppJr519ca4';
        document.getElementById('P').innerText = `${DiamondPack.find(item => item.PackName === '50$ tether trc20').PackName}`;
        document.getElementById('PNeedP').innerText = `Price : ${DiamondPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;
        Swal.fire({
          title: " 50$ USDT ",
          text: `${DiamondPack.find(item => item.PackName === '50$ tether trc20').description}`,
          icon: "warning"
        });
        let hidenform = document.getElementById('FormSec');
        if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        } else if (hidenform.className = "formHiden") {
          hidenform.className = "formsec";
        }
        // ......................shop50TRC20
        let Name50TRC20 = document.getElementById('Name');
        let Email50TRC20 = document.getElementById('Email');
        let Id50TRC20 = document.getElementById('id');


        document.getElementById('subshopbtn').onclick = function () {
          async function Shop50TRC20() {
            Golden50TRC20 = DiamondPack.find(item => item.PackName === '50$ tether trc20').PNeed;
            if (Name50TRC20.value.length > 1 && Email50TRC20.value.length > 4 && Id50TRC20.value.length > 30) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';
              document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem gray';

              async function Shop50TRC20() {
                const user_Point = parseInt(info.point);
                const PNeedGem = parseInt(Golden50TRC20);
                const userLevel = parseInt(info.level);
                const userLevelUpdate = userLevel + 50;

                if (user_Point >= PNeedGem) {
                  const UShop50TRC20 = user_Point - PNeedGem;
                  console.log(UShop50TRC20);
                  const { data, error } = await supabase.from("telusersinfo")
                    .update({ point: UShop50TRC20, level: userLevelUpdate })
                    .eq('id', a)

                  if (error) {
                    // console.error('Please Charg your Account', error);

                  } else {
                    // shop 50TRC20 Ok 
                    document.getElementById('FormSec').className = 'formHiden';
                    const { data50TRC20, error50TRC20 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: DiamondPack.find(item => item.PackName === '50$ tether trc20').PackName,
                          User_Name: Name50TRC20.value,
                          Gmail: Email50TRC20.value,
                          id_Uid_address: Id50TRC20.value,
                          Player_Rank: info.rank,
                          userTelid: info.id,

                        },
                      ])
                    Swal.fire({
                      title: "Success!!",
                      icon: "success",
                      draggable: true
                    });
                    Name50TRC20.value = '';
                    Email50TRC20.value = '';
                    Id50TRC20.value = '';
                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                  document.getElementById('subshopbtn').style.pointerEvents = 'all';
                  document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                  document.getElementById('subshopbtn').style.boxShadow = '0rem 0rem 0.8rem #1eff00';

                }
              } Shop50TRC20();


            } else {
              if (Name50TRC20.value.length > 1 && Email50TRC20.value.length > 4 && Id50TRC20.value.length > 30) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields or Check your wallet address",
                icon: "warning",
                draggable: true
              });
            }

          } Shop50TRC20();
        };
      };

    } ShopDiamondRank()
  };





  // .........................Earn Sec.....................
  let ExValue = info.point;
  let Pvalue = parseInt('0');
  let button = document.getElementById('ShowAdsbtn');


  document.getElementById('ShowAdsbtn')?.addEventListener('click', () => {
    // Pvalue++;
    // const NewValue = Pvalue + ExValue;
    // console.log(NewValue);

    // console.log('hii');
    async function amShow() {




      // const { data, error } = await supabase
      //   .from('telusersinfo')
      //   .update({ point : NewValue })
      //   .eq('id', a)
      //   .select()
    } amShow();

    // button.disabled = true;
    document.getElementById('ShowAdsbtn').className = "PlusBtnDis";

    //   //tads
    //   const adsNotFoundCallback = () => {
    //     //alert('No ads found to show');
    //     setTimeout(function () {
    //       button.disabled = false;
    //       document.getElementById('ShowAdsbtn').className = "PlusBtn";
    //       button.style.pointerEvents = "true";

    //     }, 5000);
    //     // Write your code here in case we couldn't display ad
    //   };

    //   // Callback for REWARDED format
    //   const onClickRewardCallback = (adId) => {

    //     async function secsess() {
    //       ExValue++
    //       Pvalue++;
    //       let b = document.getElementById('Claimbtn');
    //       document.getElementById('Claimbtn').value = `Claim ( ${Pvalue} )`;
    //       if (Pvalue > 0 && b.className == 'ClaimInputgray') {
    //         document.getElementById('Claimbtn').className = "ClaimInputgreen";

    //       }
    //       const { data, error } = await supabase.from("telusersinfo")
    //         .update({ point: ExValue, })
    //         .eq('user_id', a)
    //     } secsess();
    //     const Toast = Swal.mixin({
    //       toast: true,
    //       position: "top-end",
    //       showConfirmButton: false,
    //       timer: 1800,
    //       timerProgressBar: true,
    //       didOpen: (toast) => {
    //         toast.onmouseenter = Swal.stopTimer;
    //         toast.onmouseleave = Swal.resumeTimer;
    //       }
    //     });
    //     Toast.fire({
    //       icon: "success",
    //       title: "Good Job"
    //     });
    //     setTimeout(function () {
    //       button.disabled = false;
    //       document.getElementById('ShowAdsbtn').className = "PlusBtn";
    //       button.style.pointerEvents = "true";

    //     }, 5000);
    //   };

    //   const adController = window.tads.init({
    //     widgetId: 599,
    //     type: 'static',
    //     debug: false, // Use 'true' for development and 'false' for production
    //     onClickReward: onClickRewardCallback,
    //     onAdsNotFound: adsNotFoundCallback
    //   });

    //   adController.loadAd()
    //     .then(() => adController.showAd())
    //     .catch((err) => {
    //       //alert(err);
    //       adsNotFoundCallback();
    //     });






    //   window.TelegramAdsController.triggerNativeNotification(true).then((result) => {
    //     // Ok 
    //     async function secsess() {
    //       ExValue++
    //       Pvalue++;
    //       let b = document.getElementById('Claimbtn');
    //       document.getElementById('Claimbtn').value = `Claim ( ${Pvalue} )`;
    //       if (Pvalue > 0 && b.className == 'ClaimInputgray') {
    //         document.getElementById('Claimbtn').className = "ClaimInputgreen";

    //       }
    //       const { data, error } = await supabase.from("telusersinfo")
    //         .update({ point: ExValue, })
    //         .eq('user_id', a)
    //     } secsess();
    //     const Toast = Swal.mixin({
    //       toast: true,
    //       position: "top-end",
    //       showConfirmButton: false,
    //       timer: 1800,
    //       timerProgressBar: true,
    //       didOpen: (toast) => {
    //         toast.onmouseenter = Swal.stopTimer;
    //         toast.onmouseleave = Swal.resumeTimer;
    //       }
    //     });
    //     Toast.fire({
    //       icon: "success",
    //       title: "Good Job"
    //     });


    //   }).catch((result) => {
    //     window.TelegramAdsController.triggerInterstitialBanner(true).then((result) => {
    //       async function secsessBaner() {
    //         ExValue++
    //         Pvalue++;
    //         let b = document.getElementById('Claimbtn');
    //         document.getElementById('Claimbtn').value = `Claim ( ${Pvalue} )`;
    //         if (Pvalue > 0 && b.className == 'ClaimInputgray') {
    //           document.getElementById('Claimbtn').className = "ClaimInputgreen";

    //         }
    //         const { data, error } = await supabase.from("telusersinfo")
    //           .update({ point: ExValue, })
    //           .eq('user_id', a)
    //       } secsessBaner();
    //       const Toast = Swal.mixin({
    //         toast: true,
    //         position: "top-end",
    //         showConfirmButton: false,
    //         timer: 1800,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //           toast.onmouseenter = Swal.stopTimer;
    //           toast.onmouseleave = Swal.resumeTimer;
    //         }
    //       });
    //       Toast.fire({
    //         icon: "success",
    //         title: "Good Job"
    //       });
    //     }).catch((result) => {

    //       // no ad was for show
    //       // CantShow
    //       const Toast = Swal.mixin({
    //         toast: true,
    //         position: "top-end",
    //         showConfirmButton: false,
    //         timer: 4000,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //           toast.onmouseenter = Swal.stopTimer;
    //           toast.onmouseleave = Swal.resumeTimer;
    //         }
    //       });

    //       Toast.fire({
    //         icon: "error",
    //         title: "Please try again a few minutes later or change your IP to 🇩🇪,🇬🇧 or 🇺🇲"
    //       });
    //     });



    //   });
  });













  // ......................POOP GAME SEC JS.................
  async function userifoo() {
    let { data: telusersinfo, error1 } = await supabase
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

    // ...........................Point Updating ...................
    async function PointUpdating() {
      let { data: telusersinfo, error1 } = await supabase
        .from('telusersinfo')
        .select('*')
        .eq('id', a)
        .single();

      let info = telusersinfo;
      let points = info.point;
      let fixedPoint = points.toFixed(1);
      document.getElementById('pointvalue2').textContent = `${fixedPoint}`;
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
      AMStart.style.pointerEvents = 'All';
      AMStart.value = 'Start (show ad)';
      AMStart.className = 'AMStartBTN';
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
      AMStart.value = 'Only for (x1 & x2)';
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
      AMStart.value = 'Only for (x1 & x2)';
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [3.1, 3.2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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


            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 1];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [6.1, 6.2, 6.2, 6.3, 6.4, 6.5, 3.6, 3.7, 3.8, 3.9];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [4, "💩", 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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


            const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
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
            const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(4);
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            points -= 20;
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            points -= 20;
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            points -= 20;
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            points -= 20;
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [10.1, "💩", 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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


            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21];
            function createArrayForP1() {
              return [0, 1, 2].map(() => p1Numbs[Math.floor(Math.random() * p1Numbs.length)]).concat(21);
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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

            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p2Numbs = [23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 23];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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
            const p1Numbs = [17.1, "💩", 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8];
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
                  const { data1, error1 } = await supabase.from("telusersinfo")
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

    AMStart.addEventListener('click', () => {

      window.show?.().then(() => alert('tma ad played')).catch(e => console.log(e))

    })


    playalert.addEventListener('click', () => {
      window.location.reload();
    })
  } userifoo();
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

function sendEmail() {
  document.getElementById('RefPage').style.display = 'flex';
};


const Profbtn = document.getElementById('Profileinput');
const shopbtn = document.getElementById('Shopinput');
const earnbtn = document.getElementById('Earninput');



Profbtn.addEventListener('click', () => {
  Profbtn.className = 'textshadowbtn';
  shopbtn.className = '';
  earnbtn.className = '';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('profsec').style.display = 'flex';
  document.getElementById('shopsec').style.display = 'none';
});
shopbtn.addEventListener('click', () => {
  Profbtn.className = '';
  shopbtn.className = 'textshadowbtn';
  earnbtn.className = '';
  document.getElementById('profsec').style.display = 'none';
  document.getElementById('shopsec').style.display = 'flex';
  document.getElementById('earnsec').style.display = 'none';

});
earnbtn.addEventListener('click', () => {
  Profbtn.className = '';
  shopbtn.className = '';
  earnbtn.className = 'textshadowbtn';
  document.getElementById('profsec').style.display = 'none';
  document.getElementById('earnsec').style.display = 'flex';
  document.getElementById('shopsec').style.display = 'none';
})

// ...............shop sec............... !!

document.getElementById('Noshopbtn').onclick = function () {
  document.getElementById('FormSec').className = 'formHiden';
};














