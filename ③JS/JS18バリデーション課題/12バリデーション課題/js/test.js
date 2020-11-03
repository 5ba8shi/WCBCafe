// 各エラーメッセージの取得
var errorElement1 = document.getElementById('error1');
var errorElement2 = document.getElementById('error2');
var errorElement3 = document.getElementById('error3');
var errorElement4 = document.getElementById('error4');
var errorElement5 = document.getElementById('error5');
 

// 名前チェック用の正規表現
var regexp1 = /^[^\x01-\x7E\xA1-\xDF]+$/
// メールアドレスチェック用の正規表現 
var regexp2 =  /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]/;




// 名前のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
function blurfunc(){
  let message = [];
  var name = document.getElementById('name').value;
  if(name !== ""){
    if(!name.match(regexp1) || name.length >= 20){
      message.push('全角１〜２０文字で入力して下さい。');
    }
  }

  if (message.length > 0){ 
    errorElement1.innerText = message;
  } else if(name.match(regexp1) && name.length <= 20){
    errorElement1.innerText = '';
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーー名前のバリデーションチェック






// メールアドレス用のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
// メールアドレス
function blurfunc1(){
  let message = [];
  var address = document.getElementById('local1').value;
  if(address.match(regexp2) || address.length >= 30){
    message.push('メールアドレスが不正です。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
  } else if(address !== ""){
    if(!address.match(regexp2) && address.length <= 30){
      errorElement2.innerText = '';
    } 
  }
}


function blurfunc2(){
  let message = [];
  var address = document.getElementById('domain1').value;
  if(address.match(regexp2) || address.length >= 30){
    message.push('メールアドレスが不正です。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
  } else if(address !== ""){
    if(!address.match(regexp2) && address.length <= 30){
    errorElement2.innerText = '';
    }
  }
}

// メールアドレス確認用
function blurfunc3(){
  let message = [];
  var address = document.getElementById('local1').value;
  var address2 = document.getElementById('local2').value;

  if(address !== address2){
    message.push('入力したメールアドレスが異なっています。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
  } else if(address2 !== ""){
    if(address === address2){
    errorElement2.innerText = '';
    }
  }
}

function blurfunc4(){
  let message = [];
  var address = document.getElementById('domain1').value;
  var address2 = document.getElementById('domain2').value;

  if(address !== address2){
    message.push('入力したメールアドレスが異なっています。');
  }

  if (message.length > 0){ 
    errorElement3.innerText = message;
  } else if(address2 !== ""){
    if(address === address2){
    errorElement3.innerText = '';
    }
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーーメールアドレス用のバリデーションチェック






// 送信のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
form.addEventListener('submit', (e) => {
  let message1 = [];
  let message2 = [];
  let message3 = [];
  let message4 = [];
  let message5 = [];
  
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