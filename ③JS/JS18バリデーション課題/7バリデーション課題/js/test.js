var errorElement1 = document.getElementById('error1');
var errorElement2 = document.getElementById('error2');

// 名前チェック用の正規表現
var regexp1 = /^[^\x01-\x7E\xA1-\xDF]+$/
// メールアドレスチェック用の正規表現 
var regexp2 =  /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]/;

// 名前のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
function blurfunc(){
  let message = [];
  var address = document.getElementById('name').value;
  if(!address.match(regexp1) || address.length >= 20){
    message.push('全角１〜２０文字で入力して下さい。');
  }

  if (message.length > 0){ 
    errorElement1.innerText = message;
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーー名前のバリデーションチェック

// メールアドレス用のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
function blurfunc1(){
  let message = [];
  var address = document.getElementById('local1').value;
  if(address.match(regexp2) || address.length >= 30){
    message.push('メールアドレスが不正です。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
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
  }
}

function blurfunc3(){
  let message = [];
  var address = document.getElementById('local1').value;
  var address2 = document.getElementById('local2').value;

  if(address !== address2){
    message.push('入力したメールアドレスが異なっています。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
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
    errorElement2.innerText = message;
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーーメールアドレス用のバリデーションチェック