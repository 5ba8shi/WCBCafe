var errorElement2 = document.getElementById('error2');


function blurfunc(){
  let message = [];
  // メールアドレスチェック用の正規表現 
  var address = document.getElementById('mail').value;
  var regexp =  /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]{1,30}/ ;

  if(address.match(regexp)){
    message.push('メールアドレスが不正です。');
  }

  if (message.length > 0){ 
    errorElement2.innerText = message;
  }
}
