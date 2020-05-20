
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels:
  }
})

window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");
  
  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("button#Button2");
  let changeText = document.querySelector("p");

  btn.addEventListener("click", function(){
    changeText.innerHTML = '変更されました';
  });


  let btn3 = document.querySelector("#Button4");

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
});

window.addEvenetListener("load", function(){
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });
  
  let btn2 = document.querySelector("button#Button2");
  let changText = document.querySelector("p");
  
  btn2.addEventListener("click", function(){
    changeText.inner(HTML) = '変更されました';
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

const chat = [
  'Hello'
]

import React from "react"
import styled from "styled-components"
import InViewMonitor from "react-inview-monitor"

export const Up = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInUp delay={delay}>{children}</FadeInUp>
  </InViewMonitor>
)

window.addEventListener("load", function(){
  let btn = document.querySelector("button}#Button");

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

  function tabSwitch() {
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }

  tabsAry.forEach(function(value) {
    value.addEventListener("click", tabSwitch);
  });
});


$(function(){

  $('form').on('submit', function(e){
    let output = '';
    let checkboxes = $(this).find('input[type="checkbox"]');

    checkboxes.each(function(i, checkbox){
      checkbox = $(checkboxes[i]);
      if(checkbox.prop('checked')){
        output += checkbox.attr('value') + '\n';
      }
    });
    
    e.preventDefault();
    alert('あなたが選んだ果物:\n' + output);
  });
});



function MailCheck( mail ) {
  var mail_regex1 = new RegExp( '(?:[-!#-\'*+/-9=?A-Z^-~]+\.?(?:\.[-!#-\'*+/-9=?A-Z^-~]+)*|"(?:[!#-\[\]-~]|\\\\[\x09 -~])*")@[-!#-\'*+/-9=?A-Z^-~]+(?:\.[-!#-\'*+/-9=?A-Z^-~]+)*' );
  var mail_regex2 = new RegExp( '^[^\@]+\@[^\@]+$' );
  if( mail.match( mail_regex1 ) && mail.match( mail_regex2 ) ) {
      // 全角チェック
      if( mail.match( /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]/ ) ) { 
        return false; 
      }
      // 末尾TLDチェック（〜.co,jpなどの末尾ミスチェック用）
      if( !mail.match( /\.[a-z]+$/ ) ) { 
        return false; 
      }
      return true;
  } else {
      return false;
  }
}


/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$

^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$


^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$