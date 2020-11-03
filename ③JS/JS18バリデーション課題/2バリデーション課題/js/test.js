var name = document.getElementById('name');
var mail = document.getElementById('mail');
var form = document.getElementById('form');
var errorElement2 = document.getElementById('error2');
var errorElement3 = document.getElementById('error3');



function blurfunc(){
  let message = [];
  // メールアドレスチェック用の正規表現 
  var address = document.getElementById('mail').value;
  var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

  if(regexp.test(address)){
    message.push('メールアドレスが不正です。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
  }
}


// 送信をボタンを押したとき
form.addEventListener('submit', (e) => {
  let message = [];

  if (name.value === '' || name.value == null || mail.value === '' || mail.value == null) {
    message.push('値を入力して下さい');
  } else if(true){
    message.push('全角1〜20文字で入力してください。');
  }

  if (message.length > 0){
    e.preventDefault()
    errorElement3.innerText = message;
  }

  // let message2 = [];

  // if (name.value.length >= 20){
  //   message2.push('全角1〜20文字で入力してください。');
  // }

  // if (message2.length > 0){
  //   e.preventDefault()
  //   errorElement4.innerText = message;
  // }

});