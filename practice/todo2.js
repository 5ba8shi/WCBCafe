
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
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String(counter[2]).padStart(2,'0');
  document.getElementById('sec').textContent = String(counter[3]).padStart(2,'0');
  refresh();
}

function refresh() {
  setTimeout(recalc,1000);
}
recalc();


function countdown(due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hour = Math.floor(rest / 1000 / 60 / 60) % 24;
  const day = Math.floor(rest / 1000 / 60 / 60 / 24);

  const count = [days, hours, min, sec];

  return count;
}

const goal = new Date(2025, 4, 3);

function recalc() {
  const counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
  document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
  refresh();
}

function refresh(){
  setTimeout(recalc, 1000);
}

recalc();

$(function(){
  let tabs = $(".menu_item");

  function tabSwitch(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    const index = tabs.index(this);
    $(".content").removeClass("show").eq(index).addClass("show");
  }

  tabs.click(tabSwitch);
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

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});



$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;

    var speed = 800;

    var href = $(this).attr("href");

    var target = $(href == "#" || href == "" ? 'html' : href);

    var position = target.offset().top + adjust;

    $('body.html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

window.addEventListener("load", function(){
  let btn = document.querySelector("button#Button");

  btn.addEventListener("click", function(){
    console.log("Hello world");
  });

  let btn2 = document.querySelector("button#Button2");
  let changeText = document.querySelector("p");

  btn2.addEventListener("click",function(){
    changeText.innerHTML = '変更されました.'
  });

  let btn3 = document.querySelector("#Button3");

  btn3.addEventListener("click", function(){
    changeText.classList.add("red");
  });

  let btn4 = document.querySelector("#Button4");
  let obj = document.querySelector("div");

  btn4.addEventListener("click", function(){
    obj.classList.remove("blue");
  })
});