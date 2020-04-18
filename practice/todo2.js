import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Title from './Components/Title';
import About from './Components/AboutMe';
import Works from './Components/Works';
import Contact from './Components/Contact';

class App extends Component {
  render () {
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
import { element } from 'prop-types';

class Nav extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" style={{ fontWeight: 'bold', fontSize: '45px'}} title=" " scroll>
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
                to="title"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                >Top@</Link>
            </Navigation>
          </Drwaer>
        </Layout>
      </div>
    )
  }
}

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word){
    let result = "^" + element;
    return result;
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
      if(fruit.match(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0){
      appendList("一致する果物は有りませんでした。")
    }
  });
});


