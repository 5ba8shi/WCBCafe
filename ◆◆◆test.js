window.addEventListener("load", function() {
  const chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    [['Alright !'], ['Oh really!'], ['Ok!']],
    'Where are you from?',
    [['Perfect !!'], ['Great!!'], ['I want live there!'], ['I think crazy place!!'], ['I have been there. When I was kids.'],['Fuck You!!']]
  ];

  let chatCount = 0;

  function output(val, person){
    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');
    // このdivにテキストを指定
    const div = document.createElement('div');
    div.textContent = val;

    if (person === 'me') { 
      // 自分
    } else if (person === 'other') {
      chatBtn.disabled = true;
      setTimeout( () => {
        chatBtn.disabled = false;
        li.classList.add('chat-left');
        ul.appendChild(li);
        li.appendChild(div);
        // Aiのトークの合計数に1を足す
        chatCount++;
      }, 2000);
    }
  }

  const chatBtn = document.getElementById('chat-button');
  const inputText = document.getElementById('chat-input');


  // 送信ボタンを押した時の処理
  chatBtn.addEventListener('click', function(){

    // 無記入の場合は無反応
    if (!inputText.value) return false;

    output(inputText.value, 'me');

    setTimeout( ()=> {
      inputText.value = '';
    }, 1);

    switch(chatCout) {
      case 2:
        output('Hi, ' + inputText.value + ' !', 'other');

        setTimeout( ()=> {
          output(chat[2], 'other');
        }, 2000);
        break;

      case 4:
        output(chat[3][Math.floor(Math.random() * chat[3].lenght)], 'other');
        setTimeout( ()=> {
          output(chat[4], 'other');
        }, 2000);
        break;

      case 6:
        output(chat[5][Math.floor])
    }
  });


  // AIが話しかける。
  output(chat[0], 'other');
  
  setTimeout( () => {
    output(chat[1], 'other');
  }, 2000);

});


window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello Wold");
  });


  let btn2 = document.querySelector("button#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function(){
    changeText.innerHTML = '変更されました';
  });

  let btn3 = document.querySelector("#Button3");

  btn3.addEventListener("click", function(){
    changeText.classList.add("red");
  });

  let btn4 = document.querySelector("#Button4");

  let obj = document.querySelector("div");

  btn4.addEventListener("click", function(){
    obj.classList.remove("blue");
  });
});

window.addEventListener("load", function(){
  // タブのDOMを取得し、変数で定義
  let tabs = document.getElementsByClassName("menu_item");
  // tabsを配列に変換する
  tabsAry = Array.prototype.slice.call(tabs);

  // クラスの切り替えをtabSwitch関数で定義
  function tabSwitch(){
  }

  // タブメニューの中でクリックイベントが発生した場所を探し、上で定義したtabSwitch関数を呼び出す
  tabsAry.forEach(function(value) {

  });
});