//PAIZA
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  var N = lines[0];
  for(var i = 0; i < N; i++) {
    var line = lines[i+1].split(" ");
    console.log("hello = " + line[0] + ", world = " + line[1]);
  }
});

$(function() {

  var search_list = $(".contents.row");

  function appendTweet(tweet) {
    var current_user = tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id ? 
                              `<li>
                                <a href="/tweets/${tweet.id}/edit" data-method="get" >編集</a>
                              </li>
                              <li>
                                <a href="/tweets/${tweet.id}" data-method="delete" >削除</a>
                              </li>` : "";

    var html = `<div class="content_post" style="background-image: url(${tweet.image});">
                  <div class="more">
                    <span><img src="/assets/arrow_top.png"></span>
                    <ul class="more_list">
                      <li>
                        <a href="/tweets/${tweet.id}" data-method="get" >詳細</a>
                      </li>
                      ${current_user}
                    </ul>
                  </div>
                  <p>${tweet.text}</p><br>
                  <span class="name">
                    <a href="/users/${tweet.user_id}">
                      <span>投稿者</span>${tweet.nickname}
                    </a>
                  </span>
                </div>`
    search_list.append(html);
   }

  $(".search-input").on("keyup", function() {
    var input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(tweets) {
      search_list.empty();
      if (tweets.length !== 0) {
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else {
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })
  });
});

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function() {
  let list = $("#list");

  function appendList(word) {
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result;
  }

  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});


$(function() {
  $('form').on('submit', function(e) {
    let output = ''; 
    let checkboxes = $(this).find('input[type="checkbox"]');
    checkboxes.each(function(i, checkbox) {
      checkbox = $(checkboxes[i]);
      if (checkbox.prop('checked')) {
        output += checkbox.attr('value') + '\n';
      }
    });
    e.preventDefault();
    alert('あなたが選んだ果物:\n' + output);
  });
});




$(function() {
  let list = $("#list");

  function appendList(word) {
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result;
  }

  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});


let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function() {
  let list = $("#list");

  function appendList(word) {
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result;
  }

  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});


$(function() {
  $('form').on('submit', function(e) {
    let output = ''; 
    let checkboxes = $(this).find('input[type="checkbox"]');
    checkboxes.each(function(i, checkbox) {
      checkbox = $(checkboxes[i]);
      if (checkbox.prop('checked')) {
        output += checkbox.attr('value') + '\n';
      }
    });
    e.preventDefault();
    alert('あなたが選んだ果物:\n' + output);
  });
});


$(function() {
  let tabs = $(".menu_item");

  function tabSwitch() {
    $('.active').removeClass("active");

    $(this).addClass("active");

    const index = tabs.index(this);

    $(".content").removeClass("show").eq(index).addClass("show");
  }
  tabs.click(tabSwitch);
});



window.addEventListener("load", function() {
  // タブのDOMを取得し、変数で定義
  let tabs = document.getElementsByClassName("menu_item");
  // tabsを配列に変換する
  tabsAry = Array.prototype.slice.call(tabs);

  // クラスの切り替えをtabSwitch関数で定義
  function tabSwitch() {
    // 全てのactiveクラスのうち、最初の要素を削除（"[0]は、最初の要素の意味"）
    document.getElementsByClassName("active")[0].classList.remove("active");

    // クリックしたタブにactiveクラスを追加
    this.classList.add("active");

    // コンテンツの全てのshowクラスのうち、最初の要素を削除
    document.getElementsByClassName("show")[0].classList.remove("show");

    // 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
    const index = tabsAry.indexOf(this);

    // クリックしたcontentクラスにshowクラスを追加する
    document.getElementsByClassName("content")[index].classList.add("show");
  }

  // タブメニューの中でクリックイベントが発生した場所を探し、下で定義したtabSwitch関数を呼び出す
  tabsAry.forEach(function(value) {
    value.addEventListener("click", tabSwitch);
  });
});


$(function(){
  let tabs = $(".menu_item");

  function tabSwitch(){
    $('.active').removeClass("active");

    $(this).addClass("active");

    const index = tabs.index(this);

    $(".content").removeClass("show").eq(index).addClass("show");
  }
  tabs.click(tabSwitch);
});



// 変数定義
let isPlaying = false
let tapCount, time = 0
const tapBtn    = document.getElementById('js-tapBtn')
const startBtn  = document.getElementById('js-startBtn')
const countText = document.getElementById('js-count')
const timeText  = document.getElementById('js-time')

// ゲームの初期値設定
const setGame = () => {
  tapCount = 0
  time = 10000
  countText.innerText = tapCount
  timeText.innerHTML = time / 1000
}
setGame()

// タップした時にカウントを増やす
tapBtn.addEventListener('click', () => {
  if (!isPlaying) return false
  tapCount++
  countText.innerText = tapCount
})

// STARTボタンを押してゲームをスタートさせる
startBtn.addEventListener('click', () => {
  setGame()
  isPlaying = true
  tapBtn.disabled = false
  startBtn.style.display = 'none'

  const timer = setInterval( () => {
    time -= 10
    timeText.innerHTML = (time / 1000).toFixed(2)

    if (time === 0) {
      clearInterval(timer)
      isPlaying = false
      startBtn.style.display = 'inline-block'
      startBtn.innerText = 'もう一回'
    }
  }, 10)
})


//チャットボットーーーーーーーーーーーーーーーーーーーーーーーー

//相手の返答内容
const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']]//ランダムな返答
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
function btnFunc() {
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
          setTimeout( ()=> {
              output(chat[2], 'other');
          }, 2000);
          break;
      
      //もし相手のトーク数が4個の時に送信ボタンが押されたら、
      //chat配列の3（4個目）のランダム番目が返信
      case 4:
          output(chat[3][Math.floor(Math.random() * chat[3].length)], 'other');
          break;
  }
}


//最初に相手から話しかけられる
output(chat[0], 'other');
setTimeout( ()=> {
  output(chat[1], 'other');
}, 2000);

function sayHello(){
  console.log('hello');
}

function sayName(name){
  console.log(name);
}

let myName = 'yamada';
sayHello();
sayName(myName);


function sayHello(){
  console.log('hello');
}

function sayName(name){
  console.log(name);
}

let myName = 'yamada';
sayHello();
sayName(myName);

num = 1;
for (let i = 0; i < 10; i += 1) {
  console.log(num + '回目の出力')
  num += 1
} 