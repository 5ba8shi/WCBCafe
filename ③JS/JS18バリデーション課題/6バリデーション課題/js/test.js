var errorElement2 = document.getElementById('error2');
// メールアドレスチェック用の正規表現 
var regexp =  /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]{1,30}/ ;


// メールアドレス用のバリデーションチェックーーーーーーーーーーーーーーーーーーーーーーー
function blurfunc1(){
  let message = [];
  var address = document.getElementById('local1').value;
  if(address.match(regexp) || address.length >= 30){
    message.push('メールアドレスが不正です。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
  }
}

function blurfunc2(){
  let message = [];
  var address = document.getElementById('domain1').value;
  if(address.match(regexp) || address.length >= 30){
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