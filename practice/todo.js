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

