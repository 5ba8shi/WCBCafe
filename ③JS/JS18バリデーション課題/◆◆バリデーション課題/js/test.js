var name = document.getElementById('name').value;
var mail = document.getElementById('mail');
var form = document.getElementById('form');
var errorElement2 = document.getElementById('error2');
var errorElement3 = document.getElementById('error3');
// メールアドレスチェック用の正規表現
var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

function blurfunc(){
  let message = [];
  if(true){
    message.push('メールアドレスが不正です。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
  }
}


// 送信をボタンを押したとき
form.addEventListener('submit', (e) => {
  let message = [];

  if (name === '' || name == null) {
    message.push('値を入力して下さい');
  }

  if (message.length > 0){
    e.preventDefault()
    errorElement3.innerText = message;
  }
});