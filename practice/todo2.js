const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']]//ランダムな返答
];


let chatCount = 0;

function output(val, person){
  const ul = document.getElementById('chat-ul');
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.textContent = val;

  if (person === 'me') {
    li.classList.add('chat-right');
    ul.appendChild(li);
    li.appendChild(div);
  }else if (person === 'other') {
    chatBtn.disabled = true;
    setTimeout( ()=>{
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
  if(!inputText.value)return false;
  output(inputText.value, 'me');

  setTimeout( ()=>{
    inputText.value = '';
  }, 1);

  switch(chatCount) {
    case 2:
      output('Hi, ' + inputText.value + ' !', 'other');
      setTimeout( ()=> {
        output(chat[2], 'other');
      }, 2000);
      break;

    case 4:
      output(chat[3][Math.floor(Math.random()* chat[3])])
  }
}

output(chat[0], 'other');
setTimeout( ()=>{
  output(chat[1], 'other');
}, 2000);


$(function(){
  $('a[href^="#"]').click(function(){
    let adjust = 0;
    let speed = 800;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;

    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

import React, {Component} from 'react';
import { animateScroll as scroll } from 'react-scroll';
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


import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav':
import Title from './Components/Title';
import About from './Components/AboutMe';
import Works from './Components/Works';
import Contact from './Components/Contact';

class App extends Component  {
  render(){
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

import React,{ Component } from 'react';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-scroll';


class Nav extends Component{
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" style={{ fontWeight: 'bold', fontSize:'45px'}}>
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
                  duration={800}
                  >Works</Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  >Contact</Link>
            </Navigation>
          </Header>
          <Drawer title=" ">
            <Navigation>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >About</Link>
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >Works</Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
                >Contact</Link>
            </Navigation>
          </Drawer>
        </Layout>
      </div>
    )
  }
}
export default Nav;


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

  if (person === 'me'){
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

function btnFunc() {
  if (!inputText.value)return false;
  output(inputText.value, 'me');

  setTimeout( ()=>{
    inputText.value = '';
  }, 1);

  switch(chatCount){
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
setTimeout( ()=> {
  output(chat[1], 'other');
}, 2000);






const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']]//ランダムな返答
];

let chatCount = 0;

function output(val, person){
  const ul = document.getElementById('chat-ul');
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.textContent = val;

  if (person === 'me') {
    li.classList.add('chat-right');
    ul.appendChild(li);
    li.appendChild(div);
  }else if (person === 'other') {
    chatBtn.disabled = true;
    setTimeout( ()=>{
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


function btnFunc() {
  if (!inputText.value) return false;
  output(inputText.value, 'me');

  setTimeout( ()=> {
    inputText.value = '';
  }, 1);

  switch(chatCount) {
    case 2:
      output('Hi, ' + inputText.value + ' !', 'other');
      setTimeout( ()=> {
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