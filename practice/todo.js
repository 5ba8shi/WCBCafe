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

window.alert('こんにちは');

console.log('こんにちは');

let name = 'yamada';

console.log (name + 'さんこんばんは');


const name ='koba';

console.log(name + 'さんこんばんは')

let num = 60;

if (num % 15 == 0){
  console.log(num + 'は３と５の倍数です');
} else if (num % 3 == 0) {
  console.log(num + 'は3の倍数です');
} else if (num % 5 == 0) {
  console.log(num + 'は５の倍数です。');
} else {
  console.log(num + 'は３の倍数でも、５のバイイ数でもありません')
}

let list = ['Ruby', 'Ruby on Rails', 'javascript', 'html', 'css'];
console.log(list.length);


let list = ['red', 'blue'];
list.push('black');
console.log(list);


let list = ['red', 'blue'];
list.pop();
console.log(list);

let list = ['yel', 'dd'];
list.shift();
console.log(list);

let obj = {};

document.querySelector("button");

document.querySelector("button#Button2");

document.querySelector("footer a.next");

let btn = document.querySelector("button");

function printHello() {
  console.log("Hello world");
}

btn.addEventListener("click", printHello)

window.addEventListener("load", function(){
  let btn = document.querySelector("button");
  function printHello(){
    console.log("Hello world");
  }

  btn.addEventListener("click", printHello);
});

window.addEventListener("load", function(){
  let btn = document.querySelector("button");
  function printHello(){
    console.log("Hello world");
  }

  btn.addEventListener("click", printHello);
});

window.addEventListener("load", function(){
  let btn = document.querySelector("button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });
});

document.getElementById();

document.getElementsByClassName

document.querySelector("セレクタ名");


window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch() {
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);
    
    document.getElementsByClassName("content")[index].classList.add("show");
  }
  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

window.addEventListener("load", function(){
  let btn = document.querySelector("button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function(){
    changeText.innerHTML = '変更されました'
  })

  let btn3 = document.querySelector("#Button3");

  btn3.addEventListener("click", function(){
    changeText.classList.add("red");
  });

  let btn4 = document.querySelector("#Button4");
  let removeText = document.querySelector("div");

  btn4.addEventListener("click", function(){
    removeText.classList.remove("blue");
    console.log(removeText.classList);
  });

});

window.addEventListener("load", function(){
  let btn = document.querySelector("button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function(){
    changeText.classList.add("red");
  });

  let btn3 = document.querySelector("#Button3");

  btn3.addEventListener("click", function(){
    changeText.classList.add("red");
  });

  let btn4 = document.querySelector("#Button4");
  let removeText = document.querySelector("div");
  
  btn4.addEventListener("click", function(){
    removeText.classList.remove("blue");
    console.log(removeText.classList);
  });
});

window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
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
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log('Hello World');
  });

  let btn2 = document.querySelector("button#Button2");
  let changText = document.querySelector("p");

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
  let tabs = document.getElementsByClassName("menu_item");
  tabsAry = Array.prototype.slice.call(tabs);
  
  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");
    
    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].add('show');
  }
  
  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});


window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active").classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }
  tabsAry.forEach(value)(function(){
    value.addEventListener("click", tabSwitch);
  });
});
window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch() {
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }
  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});


window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  }
  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click", function(){
    let input = $("keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if(fruit.match(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした。")
    }
  });
});

'use strict';

function fizzbuzz(num){
  if(num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if(num % 3 === 0) {
    return 'fizz';
  } else if(num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

let i = 1;
while(i <=30) {
  console.log(fizzbuzz(i));
  i += 1;
}


function calc(num1, num2){
  return num1*num2;
}

let num1 = 4;
let num2 = 5;

console.log(calc(num1, num2));

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

let hello = function(){
  console.log('hello');
}

hello();

let obj = { name: 'yamada', age: 25, address: 'tyokyo' };
console.log(obj.name);

let obj = { name:'yamada', age: 25, address: 'ky0oto'};
console.log(obj.name);

let obj = { name:'yamada', age: 25, address: 'tokyo' };
obj.name = 'tanaka';
console.log(obj.name);

num = 1;
for (let i = 0; i < 10; i += 1) {
  console.log(num + '回目の出力')
  num += 1
}

num = 1;
for (let i = 0; i < 10; i += 1){
  console.log(num + '回目の出力')
  num += 1
}

let btn = document.querySelector("button");

function printHello(){
  console.log("Hello world");
}

btn.addEventListener("click", printHello);


let btn = document.querySelector("button");

function printHello(){
  console.log("Hello world");
}

btn.addEventListener("click", printHello);



window.onload = function(){ 処理 };

function printHelloWithButton() {
  let btn = document.querySelector("button");

  function printHello() {
    console.log("Hello world");
  }

  btn.addEventListener("click", printHello);
}

window.addEventListener("load", printHelloWithButton);


window.addEventListener("load", function(){
  let btn = document.querySelector("button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });
});

document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円(税込み)です。';

document.getElementById('output').textContent = 'コーヒーメーカーの値段は${total(8000)}円(税込)です。';

document.getElementById('output').textContent = 'コーヒーメーカーの値段は${total(8000)}円(税込み)です。';

const total = `大人二人:${1800 * 2}円`;


window.addEventListener("load", function(){
  let btn = document.querySelector("button");
  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function(){
    changeText.innerHTML = '変更されました';
  });
});

let btn3 = document.querySelector("#Button3");

btn3.addEventListener("click", function(){
  changeText.classList.add("red");
  console.log(changeText.classList);
});


let btn4 = document.querySelector("#Button4");

let obj = document.querySelector("div");

btn4.addEventListener("click", function(){
  obj.classList.remove("blue");
});


$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click", function(){
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if (fruit.math(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0){
      appendList("一致する果物はありませんでした。")
    }
  });
});

$(function(){
  let list =$("#list");


  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click", function(){
    let input = $("keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if (fruit.match(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした。")
    }
  });
});

$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click", function(){
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if (fruit.match(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした。")
    }
  });
});



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

window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("button#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function(){
    changeText.innerHTML = "変更されました";
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
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("button#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function(){
    changeText.innerHTML = '変更されました';
  });

  let btn3 = document.querySelector("Button3");

  btn3.addEventListener("click", function(){
    changeText.classList.add("red");
  });

  let btn4 = document.querySelector("Button4");

  let obj = document.querySelector("div");

  btn4.addEventListener("click", function(){
    obj.classList.remove("blue");
  });
});



window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("button#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function(){
    changeText.innerHTML = '変更されました';
  });

  let btn3 = document.querySelector("Button3");

  btn3.addEventListener("click", function(){
    changeText.classList.add("red");
  });

  let btn4 = document.querySelector("Button4");
  let obj = document.querySelector("div");

  btn4.addEventListener("click", function(){
    obj.classList.remove("blue");
  });
});


window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
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
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch() {
    document.getElementsByClassName("active")[0].classList.remove("active");
    
    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
    
  }
  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});


let btn = document.querySelector("button");

function printHello() {
  console.log("Hello world");
}

btn.addEventListener("click", printHello);

document.querySelector("button#Button2");

document.querySelector("footer a.next");

document.querySelector("button");


window.addEventListener("load", function(){
  let btn = document.querySelector("button");

  btn.addEventListener("click", function(){
    console.log("hello world");
  })
});

window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch() {
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }

  tabs.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

let n = Math.floor(Math.random() * 6) + 1;
console.log(7 - n);


window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("content")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  };

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

const images = ['images/image1.jpg','images/image2.jpg','images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
let current = 0;

function changeImage(num) {
  if(current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
  }
}

function pageNum() {
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}

pageNum();

document.getElementById('prev').onclick = function() {
  changeImage(-1);
}
document.getElementById('next').onclick = function() {
  changeImage(1);
}


const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
let current = 0;

function changeImage(num){
  if(current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
  }
};

function pageNum(){
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
};

pageNum();

document.getElementById('prev').onclick = function() {
  changeImage(-1);
}
document.getElementById('next').onclick = function() {
  changeImage(1);
}

if(window.confirm('ゲームスタート!準備はいい？')){
  console.log('ゲーを開始します。');
} else {
  console.log('ゲームを終了します。');
}

import React from 'react';
class App extends React.Component {
  render(){

  }
}

export default App;

class App extends React.Component {
  render(){
    return (

    );
  }
}

class App extends React.Component {
  render() {
    const text ='Hello World';
    return(

    );
  }
}

render(){
  const text ='Hello World';
  return (
    <div>{ text }</div>
  );
}

render() {
  const imgUrl = 'https://.png';
  return(
    <img src={ imgUrl } />
  );
}

render(){
  return(
    <div>
      {/* この部分はコメントです */}
    </div>
  );
}

render(){
  return(
    <div>
      <h1>こんにちは、にんじゃわんこさん!</h1>
      <button>ひつじ千人</button>
      <button>にんじゃわんこ</button>
    </div>
  )
}

<button jump = {() => {}}></button>


<div>
  <h1>こんにちは、にんじゃわんこさん！</h1>
  <button onClick={() =>{処理}}>ひつじ仙人</button>
  <button onClick={() =>{処理}}>にんじゃわんこ</button>
</div>


<div>
  <h1>こんにちは、にんじゃわんこさん！</h1>
  <button onClick={()=> {console.log('ひつじ仙人')}}>
    ひつじ仙人
  </button>
  <button onClick={()=>{console.log('にんじゃわんこ')}}></button>
</div>

'const user = { name: "にんじゃわんこ", age: 14};
'
console.log(user.age);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:'にんじゃわんこ'};
  }
}


class App extends React.Component{
  constructor(props){
    super(prop);
    this.state = {name:'にんじゃわんこ'};
  }
  render(){
    console.log(this.state);
    return()
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: 'にんじゃわんこ'};
  }
  render(){
    return(
      <h1>こんにちは、{ this.state.name}さん！</h1>
    );
  }
}

this.setState({name : 'にんじゃわんこ'});

<h1>こんにちは、{this.state.name}さん！</h1>
<button onClick={()=>{this.setState({name:'ひつじ仙人'})}}>
  ひつじ仙人
</button>
<button onClick={()=>{this.setState({name:'にんじゃわんこ'})}}>
  にんじゃわんこ
</button>

class クラス名 {
  constructor(){

  }

  メソッド名(){

  }
}

class App extends React.Component{
  handleClick(){

  }
}

class App extends React.Component {
  handleClick() {

  }

  render() {
    return (
      <button onClick={()=>{this.handleClick()}}>
        ひつじ仙人
      </button>
    );
  }
}

class App extends React.Component {

  handleClick(name){
    this.setState({name: name});
  }

  render(){
    return(
      <button onClick ={()=>{this.handleClick('ひつじ仙人')}}>
        ひつじ仙人
      </button>
      <button onClick = {()=>{this.handleClick('にんじゃわんこ')}}>
        にんじゃわんこ
      </button> 
        
    )
  }
}


const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
let current = 0;

function changeImage(num){
  if(current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
  }
};

function pageNum(){
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
};

pageNum();

document.getElementsById('prev').textContent = function(){
  changeImage(-1);
}

document.getElementById('next').textContent = function(){
  changeImage(1);
}


const agree = Cookies.get('cookie-agree');
const panel = document.getElementById('privacy-panel');
if(agree === 'yes') {
  document.body.removeChild(panel);
} else {
  document.getElementById('agreebtn').onclick = function(){
    Cookies.set('cookie-agree', 'yes', {expires: 7});
    document.body.removeChild(panel);
  }

  document.getElementById('testbtn').onclick = function(){
    Cookies.remove('cookie-agree');
  };
}

constructor(props) {
  super(props);
  this.state = {count: 0};
}

render(){
  return (
    <div>
      <h1>
        {this.state.count}
      </h1>
      <button>+</button>
    </div>
  );
}

handleClick() {
  this.setState({count: this.state.count + 1});
}

class App extends React.Component {
  handleClick(){
    this.setState({count: this.state.count + 1});
  }

  render(){
    return(
      <button onClick={()=>{this.handleClick()}}>
        +
      </button>
    );
  }
}

class App extends React.Component{
  render() {
    return(
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
export default App;

importAppfrom'./components/App';
ReactDOM.render(<App/>,document.getElementById('root'));

class