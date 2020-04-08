const agree = Cookies.get('cookie-agree');
const panel = document.getElementById('privacy-panel');
if(agree === 'yes') {
  document.body.removeChild(panel);
} else {
  document.getElementById('agreebtn').onclick = function() {
    Cookies.set('cookie-agree', 'yes', {expires: 7});
    document.body.removeChild(panel);
  };

}

document.getElementById('testbtn').onclick = function() {
  Cookies.remove('cookie-agree');
}

function countdown(due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);

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
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [day, hours, min, sec];

  return count;
}

const goal = new Date(2025, 4, 3);

function recalc(){
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


window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");
  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
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

window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");
  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
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

window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");
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
    value.addEventLister("click", tabSwitch);
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

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});


const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index){
  item.onclick = function() {
    document.getElementById('bigimg').src = this.dataset.image;
  }
});


const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
  item.onclick = function() {
    document.getElementById('bigimg').src = this.dataset.image;
  }
})


function countdown(due) {
  const now = new Data();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [days, hours, min, sec];

  return count;
}

const goal = new Date(2025, 4, 3);

function recalc(){
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

function countdown(due){
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest  / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [days, hours, min, sec];

  return count;
}

const goal = new Date(2025, 4, 3);

function recalc(){
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






function countdown(due){
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);

  return count;
}

const goal = new Date(2025, 4, 3);

function recalc(){
  const counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String(counter).padStart(2, '0');
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
  const hours = Math.floor(rest / 1000 / 60 / 60 / 24);
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

function refresh() {
  setTimeout(recalc, )
}


$(document).ready(function(){
  $('#open_nav').on('click', function() {
    $('#wrpeer, #nav').toggleClass('show');
  });
});



$(document).ready(function() {
  $('#open_nav').on('click', function(){
    $('#wrapper, #nav').toggleClass('show');
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


window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch() {
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    let index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
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

  tabsAry.forEach(function(value){
    value.addEventListener('click', tabSwitch);
  });
});

$(function(){
  let tabs = $(".menu_item");

  function tabSwitch(){
    $('active').removeClass('active');

    $(this).addClass('active');
 
    const index = tabs.index(this);

    $(".content").removeClass("show").eq(index).addClass("show");

  }
  tabs.click(tabSwitch);
});


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

  let tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show"):
  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});


$(function(){
  $('form').on('submit', function(e){
    let output = '';
    let checkboxes = $(this).find('input[type="checkbox"]');
    checkboxes.each(function(i, checkbox){
      checkbox = $(checkboxes[i]);
      if (checkbox.prop('checked')){
        output += checkbox.attr('value') + '\n';
      }
    });
    e.preventDefault();
    alert('あなたが選んだ果物:\n' + output);
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

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwitch);
  });
});

window.addEventListener("load", function(){
  let tabs = document.getElementsByClass("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
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


window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
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

  $('form').on('submit', function(e){
    let output ='';
    let checkboxes = $(this).find('input=[type="checkbox"]');

    checkboxes.each(function(i, checkbox){
      if(checkbox.prop('checked')){
        output += checkbox.attr('value') + '\n';
      }
    });

    e.preventDefault();
    alert('あなたが選んだ果物: \n' + output);
  });

});

$(function(){
  $('form').on('submit', function(e){
    let output = '';
    let checkboxes = $(this).find('input[type="checkbox"]');

    checkboxes.each(function(i, checkbox){
      checkbox =$(checkboxes[i]);
      if(checkbox.prop('checked')){
        output += checkbox.attr('value') + '\n';
      }
    });

    e.preventDefault();
    alert('あなたが選んだ果物: \n' + output);
  });
});


let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element){
   let result = "^" + element;
   return result;
  }

  $('#submit').on("click", function(){
    let input = $("keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if(fruit.match(reg)){
        appendList(fruit);
      }
    });

    if($(".list").length === 0) {
      appendList("一致する果物はありませんでした。")
    }
  });
});


$(function(){
  $("form").on("submit", function(){
    console.log("送信ボタンが押されました");
  });
});

$(function(){
  $("form").on("submit", function(){
    console.log("送信ボタンが押されました");
  });
});


let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $(('<li class="list">')).append(word);
    list.append(item);
  }

  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click", function(){
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if (fruit.match(reg){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした。")
    }
  });
});

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click", function(){
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if (fruit.match(reg)){
        appendList(fruit);
      }
    });
    
    if ($(".list").length === 0){
      appendList("一致する果物はありませんでした。")
    }
  });
});


let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class = "list">').append(word);
    list.append(item);
  }

  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click", function(){
    let input = $("keyword").val();
    let inputs = input.split(" ");
    let newinput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if (fruit.match(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした。")
    }
    });
});

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];
