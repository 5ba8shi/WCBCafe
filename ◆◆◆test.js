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

  function output(val, person) {
    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.textContent = val;

    if(person === 'me') {
      li.classList.add('chat-right');
      ul.appendChild(li);
      li.appendChild(div);
    } else if(person === 'other') {
      chatBtn.disabled = true;
      setTimeout( ()=> {
        chatBtn.disabled = false;
        li.classList.add('chat-left');
        ul.appendChild(li);
        li.appendChild(div);

        chatCout++;
      }, 2000);
    }
  }

  const chatBtn = document.getElementById('chat-button');
  const inputText = document.getElementById('chat-input');

  chatBtn.addEventListener('click', function() {
    if(!inputText.value) return false;

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
        setTimeout( () => {
          output(chat[4], 'other');
        }, 2000);
        break;
      
      case 6;
        output(chat[5][Math.floor(Math.floor(Math.random()* chat[5].length))], 'other');

    }
  });

  output(chat[0], 'other');

  setTimeout( ()=> {
    output(chat[1], 'other');
  }, 2000);

});

window.addEventListener("load", function() {
  let btn = document.querySelector("buttton#Button");

  btn.addEventListener("click", function() {
    console.log("Hello World");
  })

  let btn2 = document.querySelector("button#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click", function() {
    changeText.innerHTML = '変更されました';
  });

  let btn3 = document.querySelector("#Button3");

  btn3.addEventListener("click", function() {
    changeText.classList.add("red");
  })
})