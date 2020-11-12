window.addEventListener("load", function(){

    //相手の返答内容
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

      if(person === 'me'){
        li.classList.add('chat-right');
        ul.appendChild(li);
        li.appendChild(div);
      } else if (person === 'other') {

        chatBtn.disabled = ture;
        setTimeout( () => {
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


    chatBtn.addEventListener('click', function() {
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
          setTimeout( ()=> {
            output(chat[4], 'other');
          }, 2000);
          break
      }
    });

    output(chat[0], 'other');

    setTimeout ( ()=> {
      output(chat[1], 'other');
    }, 2000);

});



function blurfunc() {
  const message_a = [];
  const name = document.getElementById('name').value;
  if(name !== "") {
    if(!name.match(regexp1) || name.length >= 20){
      message_a.push('全角１から２０文字で入力してください');
    }
  }
  
  if(message_a.length > 0) {
    errorElement1.innerText = message_a;
  } else if(name.match(reqexp1) && name.length <= 20){
    errorElement1.innerText = '';
  }
}