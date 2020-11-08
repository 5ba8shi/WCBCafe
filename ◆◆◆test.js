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

  