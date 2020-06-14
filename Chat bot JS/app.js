window.addEventListener("load", function() {


  //相手の返答内容
  const chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    [['Alright !'], ['Oh really!'], ['Ok!']],
    'Where are you from?',
    [['Perfect !!'], ['Great!!'], ['I want live there!'], ['I think crazy place!!'], ['I have been there. When I was kids.'],['Fuck You!!']]
  ];


  //相手の返信の合計回数（最初は0）
  //これを利用して、自分が送信ボタンを押したときの相手の返答を配列から指定する
  let chatCount = 0;


  //画面への出力
  //valはメッセージ内容，personは誰が話しているか
  function output(val, person) {
    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');
    //このdivにテキストを指定
    const div = document.createElement('div');
    div.textContent = val;
    
    //もしどこかでoutput('Hello', me)が実行されたらこれ
    if (person === 'me') { //自分
        li.classList.add('chat-right');
        ul.appendChild(li);
        li.appendChild(div);
    }else if (person === 'other') { //相手
        //相手が2個連続で返信してくる時、その間は返信不可にする
        //なぜなら、自分の返信を複数受け取ったことになり、その全てに返信してきてしまうから
        //例："Hi!〇〇!"を複数など
        //（今回の相手の連続返信は2個以内とする）
        chatBtn.disabled = true;
        setTimeout( ()=> {
            chatBtn.disabled = false;
            li.classList.add('chat-left');
            ul.appendChild(li);
            li.appendChild(div);
            //相手のトークの合計数に1足す
            chatCount++;
        }, 2000); 
    }
  }


  const chatBtn = document.getElementById('chat-button');
  const inputText = document.getElementById('chat-input');

  //送信ボタンを押した時の処理
  chatBtn.addEventListener('click', function(){
    if (!inputText.value) return false;
    //自分のテキストを送信
    output(inputText.value, 'me');

    setTimeout( ()=> {
        //入力内を空欄にする
        //一瞬の間でvalueを取得し、相手の"Hi!〇〇!"の返信に利用
        //送信ボタンを押した瞬間にvalueを消したら、やまびこに失敗した
        inputText.value = '';
    }, 1);

    //相手の送信の合計回数に応じて次の返信を指定
    switch(chatCount) {
        //もし相手のトーク数が2個の時に送信ボタンが押されたら、
        //名前のやまびこと、chat配列の2（3個目）が返信
        case 2:
            output('Hi, ' + inputText.value + ' !', 'other'); 
            //↑にてchatCountは3になる
            setTimeout( ()=> {
                output(chat[2], 'other');
                //↑にてさらにchatCountは4になる
            }, 2000);
            break;
        
        //もし相手のトーク数が4個の時に送信ボタンが押されたら、
        //chat配列の3（4個目）のランダム番目が返信
        case 4:
            output(chat[3][Math.floor(Math.random() * chat[3].length)], 'other');
            setTimeout( ()=> {
              output(chat[4], 'other');
            }, 2000);
            break;
        
        
        case 6:
            output(chat[5][Math.floor(Math.floor(Math.random()* chat[5].length))], 'other');
            break;
            
    }
  });


  //最初に相手から話しかけられる
  output(chat[0], 'other');

  setTimeout( ()=> {
    output(chat[1], 'other');
    }, 2000);

    
}); 


