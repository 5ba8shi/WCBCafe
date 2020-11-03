function func1() {
  var input_message = document.getElementById("input_message").value;

  input_message = "入力された内容は「" + input_message + "」です。";
  
  document.getElementById("output_message").innerHTML = input_message;
}


function MailCheck( mail ) {
  var mail_regex1 = new RegExp( '(?:[-!#-\'*+/-9=?A-Z^-~]+\.?(?:\.[-!#-\'*+/-9=?A-Z^-~]+)*|"(?:[!#-\[\]-~]|\\\\[\x09 -~])*")@[-!#-\'*+/-9=?A-Z^-~]+(?:\.[-!#-\'*+/-9=?A-Z^-~]+)*' );
  var mail_regex2 = new RegExp( '^[^\@]+\@[^\@]+$' );
  if( mail.match( mail_regex1 ) && mail.match( mail_regex2 ) ) {
      // 全角チェック
      if( mail.match( /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]/ ) ) {
         return false; 
        }
      // 末尾TLDチェック（〜.co,jpなどの末尾ミスチェック用）
      if( !mail.match( /\.[a-z]+$/ ) ) { return false; }
      return true;
  } else {
      return false;
  }
}