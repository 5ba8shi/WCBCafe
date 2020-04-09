
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

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

window.addEventListener("load", function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element){
    let result = "^" + element;
    return result;
  }

  $('#submit').on("click",function(){
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
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

$