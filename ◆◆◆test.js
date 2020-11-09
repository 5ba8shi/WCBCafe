window.addEventListener("load", function() {
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

document.getElementById('form').onsubmit = function(event) {
  event.preventDefault();
  const search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = `「${search}」の検索...`;
};

async function callApi() {
  const res = await fetch("https://jsondata.okiba.me/v1/json/0hxL6200611030517");

  const jobs = await res.json();

  const Filter1 = jobs.filter(job1 => {
    return job1.grpId === 2;
  });

  Filter1.sort(function(a, b){
    a = a.jobName.toString().toLowerCase();
    b = b.jobName.toString().toLowerCase();
    if(a < b){
      return -1;
    } else if(a > b){
      return 1;
    }
    return 0;
  });

  const Filter2 = jobs.filter(job => {
    return job1.grpId === 2;
  });

  Filter1.sort(function(a, b){
    a = a.jobName.toString().toLowerCase();
    b = b.jobName.toString().toLowerCase();
    if(a < b){
      return -1;
    } else if(a > b){
      return 1;
    }
      return 0;
  });
}

const gaol = new Date(2025, 4, 3);

function recalc(due) {
  const counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
  document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
  refresh();
}

function refresh() {
  setTimeout(recalc, 1000);
}
recalc();

function countdown(due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const count = [days, hours, min, sec];

  return count;
}

const lang = document.querySelector('html').lang:

  if(lang === 'ja') {
    document.querySelector('option[value="index.html"]').selected = true;
  } else if(lang === 'en') {
    document.querySelector('option[value="index-en.html"]').selected = true;
  } else if (lang === 'zh') {
    document.querySelector('option[value="index-zh.html"]').selected = true;
  }

  document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
  }

document.getElementById('pi').textContent = Math.PI;
document.getElementById('floor').textContent = Math.floor(Math.PI);

function point(num, digit){
  const mover = 10 ** digit;
  return Math.floor(num * mover) / mover;2309

}

document.getElementById('output').textContent = point(Math.PI, 2);

let enemy = 100;
let count = 0;

window.alert('戦闘スタート');

while(enemy > 0) {
  const attack = Math.floor(Math.random() * 30) + 1;
  console.log('モンスターに' + attack + 'のダメージ！');
  enemy -= attack;
  count += 1;
}
console.log(count + '回でモンスターを倒した！');

function total(price) {
  const tax = 0.1;
  return price + price * tax;
}

console.log('コーヒーメーカーの値段は' + total(8000) + '円(税込み）です。');
document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円(税込)です。';


let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
todo.push('歯医者に行く');
for(let item of todo) {
  const li = `<li>${item}</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}


let jsbook = {title: 'JavaScript入門', pric: 2500, stock:3};

document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;]



const agree = Cookie.get('cookie-agree');
const panel = document.getElementById('privacy-panel');

if(agree === 'yes') {
  document.body.removeChild(panel);
} else {
  document.getElementById('agreebtn').onclick = function() {
    Cookie.set('cookie-agree', 'yes', {expire: 7});
    document.body.removeChild(panel);
  };
}

document.getElementById('testbtn').onclick = function() {
  Cookies.remove('cookie-agree');
};

