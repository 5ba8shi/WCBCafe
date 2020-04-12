
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

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

window.addEventListener("load", function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click",function(){
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

$(function(){
  $('a[href^="#"]').click(function(){

    let adjust = 0;
    let speed = 800;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;

    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    let adjust = 0;

    let speed = 800;

    let href = $(this).attr("href");

    let target = $(href == "#" || href == "" ? 'html' : href);

    let position = target.offset().top + adjust;
  });
});


$(function(){
  $('a[href^="#"]').click(function(){
    let adjust = 0;
    let speed = 800;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top+adjust;

    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});





const chat = [
  'Hello! Welcome to AI chat !',
  'What is your name?',
  'How are you today?',
  [['Alright!'],['Oh really'],['Ok!']]
];

let chatCount = 0;

function output(val, person){
  const ul = document.getElementById('chat-ul');
  const li = document.get.createElement('li');

  const div = document.createElement('div');
  div.textContent = val;

  if (person === 'me') {
    li.classList.add('chat-right');
    ul.appendChild(li);
    li.appendChild(div);
  }else if (person === 'other') {
    chatBtn.disabled = true;
    setTimeout( ()=> {
      chatBtn.disabled = false;
      li.classList.add('chat-left');
      ul.appendChild(li);
      li.appendChild(div);
      chatCount++;
    }, 2000);
  }
}

const chatBtn = document.getElementById('chat-button');
const inputText = document.getElementById('chat-input');


function btnFunc(){
  if(!inputText.value) return false;

  output(inputText.value, 'me');

  setTimeout( ()=> {
    inputText.value = '';
  },1);

  switch(chatCount) {
    case 2:
      output('Hi, ' + inputText.value + '!', 'other');
      setTimeout( ()=>{
        output(chat[2],'other');
      }, 2000);
      break;

    case 4:
      output(chat[3][Math.floor(Math.random() * chat[3].length)], 'other');
      break;
  }
}

output(chat[0], 'other');
setTimeout( ()=>{
  output(chat[1],'other');
}, 2000);








const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']]//ランダムな返答
];


let chatCount = 0;

function output(val, person){
}

const chatBtn = document.getElementById('chat-button');
const inputText = document.getElementById('chat-input');

function btnFunc(){
}

output(chat[0], 'other');
setTimeout( ()=>{
  output(chat[1], 'other');
}, 2000);