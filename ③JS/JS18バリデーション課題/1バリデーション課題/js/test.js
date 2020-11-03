var name = document.getElementById('name');
var mail = document.getElementById('mail');
var form = document.getElementById('form');
var errorElement2 = document.getElementById('error2');
var errorElement3 = document.getElementById('error3');


function blurfunc(){
  let message = [];
  message.push('メールアドレスが不正です。');

  if (message.length > 0){ 
    errorElement2.innerText = message;
  }
}


// 送信をボタンを押したとき
form.addEventListener('submit', (e) => {
  let message = [];
  if (name.value === '' || name.value == null || mail.value === '' || mail.value == null) {
    let blank = '値を入力して下さい';
    message.push(blank);
  }

  if (name.value.length >= 20){
    let length = '全角1〜20文字で入力してください。';
    message.push(length);
  }

  if (message.length > 0){ 
    e.preventDefault();
    if(message == 'blank'){
      errorElement3.innerText = message;
    } else if(message == 'length'){
      errorElement1.innerText = message;
    }
  }
});