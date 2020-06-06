parao = document.createElement("P");
if(showDealerCard) {
  result = document.createTextNode("ディーラーのカード" + getHandValue(opponentsHand) + aiInfo);
  parao.appendChild(result);
  opponent.appendChild(parao);
};

for(i = 0; i < yourHand.length; i++) {
  img = new Image();
  img.src = '../img/' + yourHand[i] + '.jpg';
  you.appendChild(img); 
};

para = document.createElement("p");
if(getHandValue(yourHand) <= 21) {
  result = document.createTextNode("あなたの合計: " + getHandValue(yourHand));
  para.appendChild(result);
  you.appendChild(para);
} else {
  result = document.createTextNode("あなたの合計: アウト‼");
  para.appendChild(result);
  you.appendChild(para);
};


function draw() {
  opponent = document.getElementsByClassName("opponent")[0];
  you = document.getElementsByClassName("you")[0];
  opponent.innerHTML = "<p>ディーラーのカード</p>";
  you.innerHTML = "<p>あなたのカード</p>";

  for(i = 0; i < opponentsHand.length; i++){
    img = new Image();

    if(!showDealerCard && i != 0) {
      img.src = '../img/card_back.png';
    } else {
      img.src = '../img/' + opponentsHand[i] + '.jpg';
    };
    opponent.appendChild(img);
  };

  parao = document.createElement("p");
  if(showDealerCard) {
    result = document.createTextNode("ディーラーのカード:" + getHandValue(opponentsHand) + aiInfo);
    parao.appendChild(result);
    opponent.appendChild(parao);
  };

  for(i = 0; i < yourHand.length; i++) {
    img = new Image();
    img.src = '../img/' + yourHand[i] + '.jpg';
    you.appendChild(img);
  };

  para = document.createElement("P");
  if(getHandValue(yourHand) <= 21) {
    result = document.createTextNode("あなたの合計: " + getHandValue(yourHand));
    para.appendChild(result);
    you.appendChild(para);
  } else { 
    result = document.createTextNode("あなたの合計: アウト");
    para.appendChild(result);
    you.appendChild(para);
  };

};

function getHandValue(hand) {
  cards = [];

  for(i = 0; i < hand.length; i++) {
    cards[i] = faceValue.get(hand[i].substring(0, hand[i].length - 1));
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