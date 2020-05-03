import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Title from './Components/Title';
import About from './Components/AboutMe';
import Works from './Components/Works';
import Contact from './Components/Contact';

class App extends Component {
  render (){
    return(
      <div className="app">
        <Nav />
        <Title />
        <About />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-scroll';

class Nav extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" style = {{ fontWeight: 'bold', fontSize: '45px'}} title= " " scroll>
            <Navigation className="navigation">
              <Link
                activeClass="active"
                to="title"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {800}
                >Top</Link>
            </Navigation>
          </Header>
        </Layout>
      </div>
    )
  }
}

window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");
  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("button#button2");
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
  
  btn.addEvent
})

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
  })
});

window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("")
  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
todo.push('歯医者に行く');
for(let item of todo) {
  const li = `<li>${item}</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}


let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
todo.push('歯医者に行く');
for(let item of todo) {
  const li = `<li>${item}</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}

let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
todo.push('歯医者に行く');
for(let item of todo) {
  const li = `<li>${item}</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}



let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
todo.push('歯医者に行く');
for(let item of todo){
  const li = `<li>${item}</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}


$(box).find('check').addClass('crowded');


$('.check').on('click', function(){
  if($(this).hasClass('crowded')) {
    $(this).text('残席わずか').addClass('red');
  } else {
    $(this).text('お席あります').addClass('green');
  }
})

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


function success(pos){
  console.log(pos);
}

function fail(error){
  alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

navigator.geolocation.getCurrentPosition(success, fail);

function success(pos){
  console.log(pos);
}

{
  coords: {
    latitude: 緯度,
    longitude: 軽度,
    accuracy: 精度
  }
}

function success(pos){
  const lat = pos.coords.latitude;
  const lng = pos.coords.
}

const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']]//ランダムな返答
];

let chatCount = 0;

function output(val, person) {
  const ul = document.getElementById('chat-ul');
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.textContent = val;

  if(person === 'me'){
  } else if (person === 'other') {
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
  if (!inputText.value) return false;
  output(inputText.value, 'me');

  setTimeout( ()=>{
    inputText.value = '';
  }, 1);

  switch(chatCount) {
    case 2:
      output('Hi, ' + inputText.value + ' !', 'other');
      setTimeout( ()=>{
        output(chat[2], 'other');
      }, 2000);
      break;
    
    case 4:
      output(chat[3][Math.floor(Math.random() * chat[3].length)], 'other');
      break;
  }
}

output(chat[0], 'other');

setTimeout( ()=>{
  output(chat[1], 'other');
}, 2000);

window.addEventListener("load", function(){

  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");
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

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  

  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});