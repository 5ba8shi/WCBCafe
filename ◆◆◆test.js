window.addEventListener("load", function() {
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.call(tabs);

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

window.addEventListener("load", function() {

  function AutoScroll(){
    let filed = document.getElementsById('filed');

    let bottom = filed.scrollHeight - filed.clientHeight;

    console.log(bottom);

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

  let chatCount  = 0;

  function output(val, person) {
    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.textContent = val;

    if(person === 'me') {

    } else if (person === 'other') {
      chatBtn.disabled = true;
      setTimeout( () => {
        chatBtn.disabled = false;
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
  });

  output(chat[0], 'other');

});


for(let i = 1; i <= 9; i++) {
  for (let b = 1; b <= 9; b++){
    console.log(i + ' x ' + b + ' = ' + i * b);
  }
}