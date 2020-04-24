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