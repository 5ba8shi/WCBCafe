$(function(){
  $('a[href^="#').click(function(){
    var adjust = 0;

    var speed = 800;

    var href = $(this).attr("href");

    var target = $(href == "#" || href == "" ? 'html' : html);

    var position = target.offset().top + adjust;
    
    $('body, html').animate({scrollTop:position}, speed, 'swing');

    return false;
  });
});


for(var i = cards.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = cards[i];

  cards[i] = cards[r];

  cards[r] = tmp;
};

for(var i = 1; i <= 4; i++){
  var div = document.createElement("div");
  div.id = 'row' + i;
  document.getElementById('allCards').appendChild(div);
};

var a = 1;
var b = 1;

for(var i = 1; i <= 52; i++){
  var div = document.createElement("div");
  div.id = i;
  div.className = "card";

  var img = document.createElement('img');
  img.src = '../img/card_back.png';

  div.appendChild(img);

  document.getElementById('row' + a).appendChild(div);

  if(b == 13){
    a++;
    var b = 0;
  };

  b++;
};

var cardsNodes = document.querySelectorAll('.card');

  var pickedSingle;

  var pickedArray = [];

  var currentCard;

  var prevCard;

  cardNodes.forEach((card) =>{

    card.addEventListener('click', () => {
      if(pickedArray.length === 2){
        
      }
    });
  });