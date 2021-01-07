window.addEventListener("load", function() {

  function AutoScroll(){
    let filed = document.getElementById('field');

    let bottom = filed.scrollHeight - filed.clientHeight;

    filed.scroll(0, bottom);
  }

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

      // AutoScrollにて常に最下部へスクロール
      AutoScroll();

    } else if (person === 'other') {
      chatBtn.disabled = true;
      setTimeout( ()=> {
        chatBtn.disabled  = false;
        li.classList.add('chat-left');
        ul.appendChild(li);
        li.appendChild(div);

        AutoScroll();

        chatCount++;
      }, 2000);
    }
  }

  const chatBtn = document.getElementById('chat-button');
  const inputText = document.getElementById('chat-input');

  chatBtn.addEventListener('click', function(){
    
    if(!inputText.value) return false;

    output(inputText.value, 'me');
　　　　　　　　　　　　

  });

  output(chat[0], 'other');

  setTimeout( ()=> {
    output(chat[1], 'other');
  }, 2000);


});