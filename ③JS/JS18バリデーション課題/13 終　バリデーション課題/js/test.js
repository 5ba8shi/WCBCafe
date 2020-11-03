// 各エラーメッセージの取得
var errorElement1 = document.getElementById('error1');
var errorElement2 = document.getElementById('error2');
var errorElement3 = document.getElementById('error3');
var errorElement4 = document.getElementById('error4');
var errorElement5 = document.getElementById('error5');
 

// 名前チェック用の正規表現
var regexp1 = /^[^\x01-\x7E\xA1-\xDF]+$/
// メールアドレスチェック用の正規表現
// メールの前半部分
var regexp2 =  /^\w+([-+.]\w+)*$/;
// メールの＠以降 
var regexp3 =  /^\w+([-+.]\w+)*\w+([-.]\w+)*\.\w+([-.]\w+)*$/;




// 名前のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
function blurfunc(){
  let message_a = [];
  var name = document.getElementById('name').value;
  if(name !== ""){
    if(!name.match(regexp1) || name.length >= 20){
      message_a.push('全角１〜２０文字で入力して下さい。');
    }
  }

  if (message_a.length > 0){ 
    errorElement1.innerText = message_a;
  } else if(name.match(regexp1) && name.length <= 20){
    errorElement1.innerText = '';
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーー名前のバリデーションチェック






// メールアドレス用のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
// メールアドレス
function blurfunc1(){
  let message_b = [];
  var address1 = document.getElementById('local1').value;
  var address2 = document.getElementById('domain1').value;
  if(!address1.match(regexp2) || address1.length >= 30){
    message_b.push('メールアドレスが不正です。');
  }

  if (message_b.length > 0){ 
    errorElement5.innerText = message_b;
  } else if(address1 !== "" && address2 !== ""){
    if(address1.match(regexp2) && address1.length <= 30){
      errorElement5.innerText = '';
    } 
  }
}


function blurfunc2(){
  let message_c = [];
  var address1 = document.getElementById('local1').value;
  var address2 = document.getElementById('domain1').value;
  if(!address2.match(regexp3) || address2.length >= 30){
    message_c.push('メールアドレスが不正です。');
  }

  if (message_c.length > 0){ 
    errorElement5.innerText = message_c;
  } else if(address1 !== "" && address2 !== ""){
    if(address2.match(regexp3) && address2.length <= 30){
    errorElement5.innerText = '';
    }
  }
}

// メールアドレス確認用
function blurfunc3(){
  let message_d = [];
  var address = document.getElementById('local1').value;
  var address2 = document.getElementById('local2').value;
  var address3 = document.getElementById('domain2').value;

  if(address !== address2){
    message_d.push('入力したメールアドレスが異なっています。');
  }

  if (message_d.length > 0){ 
    errorElement3.innerText = message_d;
  } else if(address2 !== "" || address3 !== ""){
    if(address === address2){
    errorElement3.innerText = '';
    }
  }
}

function blurfunc4(){
  let message_e = [];
  var address = document.getElementById('domain1').value;
  var address2 = document.getElementById('domain2').value;
  var address3 = document.getElementById('local2').value;

  if(address !== address2){
    message_e.push('入力したメールアドレスが異なっています。');
  }

  if (message_e.length > 0){ 
    errorElement3.innerText = message_e;
  } else if(address2 !== "" && address3 !== ""){
    if(address === address2){
    errorElement3.innerText = '';
    errorElement2.innerText = '';
    }
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーーメールアドレス用のバリデーションチェック

// 性別ボタンのバリデーション
function changefunc() {
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;

  if(male !== "" || female !== "") {
      errorElement4.innerText = '';
    }
  }






// 送信のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
form.addEventListener('submit', (e) => {
  let message1 = [];
  let message2 = [];
  let message3 = [];
  let message4 = [];
  
  // 名前の値取得
  var name = document.getElementById('name').value;

  // メールアドレスの値取得
  var address1 = document.getElementById('local1').value;
  var address2 = document.getElementById('local2').value;
  var address3 = document.getElementById('domain1').value;
  var address4 = document.getElementById('domain2').value;

  // 性別ボタンの値取得
  var element = document.getElementById("form");
  var radioNodeList = element.gender;
  var select = radioNodeList.value;
  

  // 各情報の未記入がないかのif分岐
  // 名前
  if(name === ""){
    message1.push('値を入力して下さい。');
    if (message1.length > 0){
      e.preventDefault()
      errorElement1.innerText = message1;
    } else if(name !== ""){
      errorElement1.innerText = '';
    }
  }

  // メールアドレス
  if (address1 === "" || address2 === ""){
    message2.push('値を入力して下さい。');
    if (message2.length > 0){
      e.preventDefault()
      errorElement5.innerText = message2;
    } else if(address1 !== "" && address2 !== ""){
      errorElement5.innerText = '';
    }
  }

  // メールアドレス確認用
  if(address3 === "" || address4 === ""){
    message3.push('値を入力して下さい。');
    if (message3.length > 0){
      e.preventDefault()
      errorElement2.innerText = message3;
    } else if(address3 !== "" && address4 !== ""){
      errorElement2.innerText = '';
    }
  }

  
  // 性別ボタン
  if(select === "") {
    message4.push('値を入力して下さい。');
    if (message4.length > 0){
      e.preventDefault()
      errorElement4.innerText = message4;
    } else if(select !== ""){
      errorElement4.innerText = '';
    }
  }

});


// ーーーーーーーーーーーーーーーーーーーーーーー送信のバリデーションチェック