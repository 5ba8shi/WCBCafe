
function draw(){
  o = document.getElementsByClassName("opponent")[0];
  y = document.getElementsByClassName("you")[0];
  o.innerHTML = "<p>ディーラーのカード</p>";
  y.innerHTML = "<p>あなたのカード</p>";

  for(i = 0; i < opponentsHand.length; i++) {
    img = new Image();
    if(!showDealerCard && i != 0) {
      img.src = '../images/back.png';
    }
    else {
      img.src = '../images/'+ opponentsHand[i]+'.png';
    }
    opponent.appendChild(img);
  }
  parao = document.createElement("P");

  if(showDealerCard) {
    t = documengt.createTextNode("ディーラーのカード: " + getHandValue(opponentsHand) + aiInfo);
    parao.appendChild(t);
    opponent.appendChild(parao);
  }
};

for(i = 0; i < yourHand.length; i++) {
  img = new Image();
  img.src = '../images/' + yourHand[i]+'.png';
  you.appendChild(img);
}

