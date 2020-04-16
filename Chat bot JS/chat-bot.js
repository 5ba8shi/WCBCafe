const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']],
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