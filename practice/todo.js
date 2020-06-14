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

function getHandValue(hand){
  cards = [];

  for(i = 0; i < hand.length; i++) {
    cards[i] = faceValue.get(hand[i].slice(0, hand[i].length - 1));
  };

  aceCount = 0;
  total = 0;

  for(i = 0; i < cards.length; i++) {
    if(cards[i] == 1){
      aceCount++;
    } else {
      total += cards[i];
    };
  };

  if(aceCount == 0){
    return total;
  } else {
    if(total <= 10) {
      return (total + 11) + (aceCount - 1);
    } else {
      return total + aceCount;
    };
  };

}

$(function(){

  $(".modalOpen").click(function(){

    var navClass = $(this).attr("class")
      href = $(this).attr("href");

      $(href).fadeIn();
    $(this).addClass("open");
    return false;
  });

  $(".modalClose").click(function(){
    $(this).parents(".modal").fadeOut();
    $(".modalOpen").removeClass("open");
    return false;
  });

});

$(function(){

  $(".modalOpen").click(function(){
    var navClass = $(this).attr("class");
      href = $(this).attr("href");

      $(href).fadeIn();
    $(this).addClass("open");
    return false;
  });

  $(".modalClose").click(function(){
    $(this).parents(".modal").fadeOut();
    $(".modalOpen").removeClass("open");
    return false;
  });
});


function getHandValue(hand) {
  cards = [];

  for(i = 0; i < hand.length; i++) {
    cards[i] = faceValue.get(hand[i].slice(0, hand[i].length - 1));
  };

  aceCount = 0;
  total = 0;

  for(i = 0; i < cards.length; i++) {
    if(cards[i] == 1) {
      aceCount++;
    } else {
      total += cards[i];
    };
  };

  if(aceCount == 0) {
    return total;
  } else {
    if(total <= 10) {
      return (total + 11) + (aceCount - 1);
    } else {
      return total + aceCount;
    };
  };
};

funtion getHandValue(hand) {
  cards = [];

  for(i = 0; i < hand.length; i++){
    cards[i] = faceValue.get(hand[i].slice(0, hand[i].length - 1));
  }
}

const DATA_URL = './sample.json';
fetch(DATA_URL)
  .then(function(response) {
    return response.json();
  });
  .then(function(jsonData){

    console.log(jsonData);
  });

  const DATA_URL = './sample.json';
  fetch(DATA_URL)
  .then((response) => response.json())
  .then((jsonData) => {
    // JSONデータを
  });

const DATA_URLS = [
  './sample_01.json',
  './sample_02.json',
  './sample_03.json'
];
DATA_URLS.forEach(function(dataUrl){
  fetch(dataUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(jsonData){

    console.log(jsonData);
  })
})

console.log( 5 > 0 ? "aaa")

window.addEventListener("load", function(){

  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch () {
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }
});