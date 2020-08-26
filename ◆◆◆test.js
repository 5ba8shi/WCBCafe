function countdown(due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [days, hours, min, sec];

  return count;
}

const goal = new Date(2025, 4, 3);

function recalc() {
  const counter = countdown(goal);
  document.getElementById('day').textContent = container[0];
  document.getElementById('hour').textContent = container[1];
  document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
  document.getElementById('sec').textContent = String(container[3]).padStart(2, '0');
  refresh();
}

function refresh(){
  setTimeout(recalc, 1000);
}

recalc();

window.addEventListener("load", function(){

  const chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    [['Alright !'], ['Oh really!'], ['Ok!']],
    'Where are you from?',
    [['Perfect !!'], ['Great!!'], ['I want live there!'], ['I think crazy place!!'], ['I have been there. When I was kids.'],['Fuck You!!']]
  ]
})