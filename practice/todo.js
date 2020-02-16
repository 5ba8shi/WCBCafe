//PAIZA
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  var N = lines[0];
  for(var i = 0; i < N; i++) {
    var line = lines[i+1].split(" ");
    console.log("hello = " + line[0] + ", world = " + line[1]);
  }
});

$(function() {

  var search_list = $(".contents.row");

  function appendTweet(tweet) {
    var current_user = tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id ? 
                              `<li>
                                <a href="/tweets/${tweet.id}/edit" data-method="get" >編集</a>
                              </li>
                              <li>
                                <a href="/tweets/${tweet.id}" data-method="delete" >削除</a>
                              </li>` : "";

    var html = `<div class="content_post" style="background-image: url(${tweet.image});">
                  <div class="more">
                    <span><img src="/assets/arrow_top.png"></span>
                    <ul class="more_list">
                      <li>
                        <a href="/tweets/${tweet.id}" data-method="get" >詳細</a>
                      </li>
                      ${current_user}
                    </ul>
                  </div>
                  <p>${tweet.text}</p><br>
                  <span class="name">
                    <a href="/users/${tweet.user_id}">
                      <span>投稿者</span>${tweet.nickname}
                    </a>
                  </span>
                </div>`
    search_list.append(html);
   }

  $(".search-input").on("keyup", function() {
    var input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(tweets) {
      search_list.empty();
      if (tweets.length !== 0) {
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else {
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })
  });
});

let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function() {
  let list = $("#list");

  function appendList(word) {
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result;
  }

  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});


$(function() {
  $('form').on('submit', function(e) {
    let output = ''; 
    let checkboxes = $(this).find('input[type="checkbox"]');
    checkboxes.each(function(i, checkbox) {
      checkbox = $(checkboxes[i]);
      if (checkbox.prop('checked')) {
        output += checkbox.attr('value') + '\n';
      }
    });
    e.preventDefault();
    alert('あなたが選んだ果物:\n' + output);
  });
});




$(function() {
  let list = $("#list");

  function appendList(word) {
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result;
  }

  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});


let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function() {
  let list = $("#list");

  function appendList(word) {
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result;
  }

  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});


$(function() {
  $('form').on('submit', function(e) {
    let output = ''; 
    let checkboxes = $(this).find('input[type="checkbox"]');
    checkboxes.each(function(i, checkbox) {
      checkbox = $(checkboxes[i]);
      if (checkbox.prop('checked')) {
        output += checkbox.attr('value') + '\n';
      }
    });
    e.preventDefault();
    alert('あなたが選んだ果物:\n' + output);
  });
});


$(function() {
  let tabs = $(".menu_item");

  function tabSwitch() {
    $('.active').removeClass("active");

    $(this).addClass("active");

    const index = tabs.index(this);

    $(".content").removeClass("show").eq(index).addClass("show");
  }
  tabs.click(tabSwitch);
});



window.addEventListener("load", function() {
  // タブのDOMを取得し、変数で定義
  let tabs = document.getElementsByClassName("menu_item");
  // tabsを配列に変換する
  tabsAry = Array.prototype.slice.call(tabs);

  // クラスの切り替えをtabSwitch関数で定義
  function tabSwitch() {
    // 全てのactiveクラスのうち、最初の要素を削除（"[0]は、最初の要素の意味"）
    document.getElementsByClassName("active")[0].classList.remove("active");

    // クリックしたタブにactiveクラスを追加
    this.classList.add("active");

    // コンテンツの全てのshowクラスのうち、最初の要素を削除
    document.getElementsByClassName("show")[0].classList.remove("show");

    // 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
    const index = tabsAry.indexOf(this);

    // クリックしたcontentクラスにshowクラスを追加する
    document.getElementsByClassName("content")[index].classList.add("show");
  }

  // タブメニューの中でクリックイベントが発生した場所を探し、下で定義したtabSwitch関数を呼び出す
  tabsAry.forEach(function(value) {
    value.addEventListener("click", tabSwitch);
  });
});


$(function(){
  let tabs = $(".menu_item");

  function tabSwitch(){
    $('.active').removeClass("active");

    $(this).addClass("active");

    const index = tabs.index(this);

    $(".content").removeClass("show").eq(index).addClass("show");
  }
  tabs.click(tabSwitch);
});



// 変数定義
let isPlaying = false
let tapCount, time = 0
const tapBtn    = document.getElementById('js-tapBtn')
const startBtn  = document.getElementById('js-startBtn')
const countText = document.getElementById('js-count')
const timeText  = document.getElementById('js-time')

// ゲームの初期値設定
const setGame = () => {
  tapCount = 0
  time = 10000
  countText.innerText = tapCount
  timeText.innerHTML = time / 1000
}
setGame()

// タップした時にカウントを増やす
tapBtn.addEventListener('click', () => {
  if (!isPlaying) return false
  tapCount++
  countText.innerText = tapCount
})

// STARTボタンを押してゲームをスタートさせる
startBtn.addEventListener('click', () => {
  setGame()
  isPlaying = true
  tapBtn.disabled = false
  startBtn.style.display = 'none'

  const timer = setInterval( () => {
    time -= 10
    timeText.innerHTML = (time / 1000).toFixed(2)

    if (time === 0) {
      clearInterval(timer)
      isPlaying = false
      startBtn.style.display = 'inline-block'
      startBtn.innerText = 'もう一回'
    }
  }, 10)
})