const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']],//ランダムな返答
  'Where are you from?',
  [['Perfect !!'], ['Great!!'], ['I want live there!'], ['I think crazy place!!'], ['I have been there. When I was kids.'],['Fuck You!!']]
];

let chatCount = 0;

function output(val, person){
  const ul = document.getElementById('chat-ul');
  const li = document.getElementById('li');

  const div = document.createElement('div');
  div.textContent = val;

  if(person === 'me') {
    li.classList.add('chat-right');
    ul.appendChild(li);
    li.appendChild(div);
  }else if (person === 'other'){
    chatBtn.disabled = true;
    setTimeout( () =>{
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

  setTimeout( ()=> {
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
      output(chat[3][Math.floor(Math.floor(Math.random() * chat[3].length))], 'other');
      setTimeout( ()=> {
        output(chat[4], 'other');
      }, 2000);
      break;
    
    case 6:
      output(chat[5][Math.floor(Math.floor(Math.random()* chat[5].length))], 'other');
      break;
    
  }


}

output(chat[0], 'other');
setTimeout( ()=> {
  output(chat[1],'other');
}, 2000);

import React, { Component } from 'react';
import { animateScroll as scroll } from 'rect-scroll';
import './Title.css';

class ScrollUp extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(){
    return(
      <div className="scroll scroll-up">
        <div className="arrow bounce" style={{ bounce }}>
          <i onClick={this.scrollToTop} className="fa fa-chevron-circle-up" />
        </div>
      </div>
    );
  }


}

const bounce = {
  animation: 'bounce 2s infinite',
  color: '#fff'
}

export default ScrollUp;


import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Title from './Components/Title';
import About from './Components/AboutMe';
import Works from './Components/Works';
import Contact from './Components/Contact';

class App extends Component {
  render (){
    return (
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
          <Header className="header" style={{ fontWeight: 'bold', fontSize: '45px'}}>
            <Navigation className="navigation">
              <Link
                activeClass="active"
                to="title"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                >Top</Link>
              
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                >About</Link>

              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {800}
                >Works</Link>
            </Navigation>
          </Header>
        </Layout>
      </div>
    )
  }
}


$(function(){
  $('a[href^="#"]').click(function(){
    let adjust = 0;
    let speed = 800;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    
    $('body, html').animate({scrollTop: position}, speed, 'swing');

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

    $('body, html').animate({scrollTop: position}, speed, 'swing');
    return false;
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
    value.addEventListner("click", tabSwitch);
  });
});

