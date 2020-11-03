
  drawnCards = [];
  yourHand = [];
  opponentsHand = [];
  faceValue = new Map();
  faceValue.set('a',1);
  faceValue.set('2',2);
  faceValue.set('3',3);
  faceValue.set('4',4);
  faceValue.set('5',5);
  faceValue.set('6',6);
  faceValue.set('7',7);
  faceValue.set('8',8);
  faceValue.set('9',9);
  faceValue.set('10',10);
  faceValue.set('j',10);
  faceValue.set('q',10);
  faceValue.set('k',10);
  showDealerCard = false;
  gameOver = false;
  dealerTurn = false;
  gameWon = false;
  gameLost = false;
  push = false;
  bank = 0;
  bet = 0;
  aiInfo = "";

  function loader() {
    bank = getBank();
    bankdiv = document.getElementById("bank");
    bankdiv.innerHTML = bank;
  }
  

  function getBank() {
    x = document.cookie;
    arr = x.split("=");
    if(arr[1] != "") {
      return parseInt(arr[1],10);
    }
    else {
      return 500;
    }
  }
  function setBank() {
    document.cookie = 'bank='+bank;
  }
  function getCard() {
    suit = Math.floor(Math.random()*4);
    face = Math.floor(Math.random()*13);
    suitarr = ['c','s','h','d'];
    facearr = ['a','2','3','4','5','6','7','8','9','10','j','q','k'];
    if (drawnCards.length == 52) {
      return 'acd';
    }
    else {
      var flag = false;
      while(!flag) {
        flag = true;
        for(i = 0; i < drawnCards.length; i++) {
          if(drawnCards[i] == facearr[face] + suitarr[suit]) {
            flag = false;
            break;
          }
        }
        if(!flag) {
          suit = Math.floor(Math.random()*4);
          face = Math.floor(Math.random()*13);
        }
      }
    }
    drawnCards.push(facearr[face] + suitarr[suit]);
    return facearr[face]+suitarr[suit];
  }
  function newGame(i) {
    drawnCards = [];
    yourHand = [getCard(), getCard()];
    opponentsHand = [getCard(), getCard()];
    gameOver = false;
    dealerTurn = false;
    gameWon = false;
    gameLost = false;
    push = false;
    showDealerCard = false;
    aiInfo = "";
    bank = bank - i;
    setBank();
    bet = i;
    draw();
  }
  
  function hit() {
    if(!gameOver && !dealerTurn) {
      yourHand.push(getCard());
      if(getHandValue(yourHand) > 21) {
        gameOver = true;
        gameLost = true;
      }
    }
    draw();
  }
  
  function stay() {
    if(!gameOver && !dealerTurn) {
      dealerTurn = true;
      showDealerCard = true;
      setTimeout(dealerAI, 1000);
      draw();
    }
  }
  
  function dealerAI() {
    if(getHandValue(opponentsHand) > 21) {
      gameWon = true;
      bank = bank + (bet*2);
      setBank();
    }
    else if(getHandValue(opponentsHand)>=16) {
      aiInfo = " Dealer Stands";
      if(getHandValue(opponentsHand) > getHandValue(yourHand)) {
        gameLost = true;
      }
      if (getHandValue(opponentsHand) == getHandValue(yourHand)){
        push = true;
        bank = bank + bet;
        setBank();
      }
      if (getHandValue(opponentsHand) < getHandValue(yourHand)) {
        gameWon = true;
        bank = bank + (bet*2);
        setBank();
      }
    }
    if(getHandValue(opponentsHand) < 16) {
      opponentsHand.push(getCard());
      aiInfo = " Dealer hits";
      setTimeout(dealerAI, 1000);
    }
    draw();

  }
  
  function getHandValue(hand) {
    cards = [];
    for(i = 0; i < hand.length; i++) {
      cards[i] = faceValue.get(hand[i].substring(0,hand[i].length - 1));
    }
    aceCount = 0;
    total = 0;
    for(i = 0; i < cards.length; i++) {
      if(cards[i] == 1) {
        aceCount++;
      }
      else {
        total += cards[i];
      }
    }
    if(aceCount == 0) {
      return total;
    }
    else {
      if(total<=10) {
        return (total+11)+(aceCount-1);
      }
      else {
        return total+aceCount;
      }
    }
  }
  function draw() {
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
        img.src = '../images/'+opponentsHand[i]+'.png';
      }
      o.appendChild(img);
    }
    parao = document.createElement("P");
    if(showDealerCard) {
      t = document.createTextNode("ディーラーのカード: " + getHandValue(opponentsHand) + aiInfo);
      parao.appendChild(t);
      o.appendChild(parao);
    }
    for(i = 0; i < yourHand.length; i++) {
      img = new Image();
      img.src = '../images/'+yourHand[i]+'.png';
      y.appendChild(img);
    }
    para = document.createElement("P");
    if(getHandValue(yourHand) <=21) {
      t = document.createTextNode("Hand value: "+getHandValue(yourHand));
      para.appendChild(t);
      y.appendChild(para);
    }
    else {
      t = document.createTextNode("Hand value: BUSTED");
      para.appendChild(t);
      y.appendChild(para);
    }
    if(gameWon) {
      para2 = document.createElement("P");
      t = document.createTextNode("あなたの勝ち!");
      para2.appendChild(t);
      y.appendChild(para2);
    }
    if(gameLost) {
      para2 = document.createElement("P");
      t = document.createTextNode("You lose!");
      para2.appendChild(t);
      y.appendChild(para2);
    }
    if(push) {
      para2 = document.createElement("P");
      t = document.createTextNode("Push!");
      para2.appendChild(t);
      y.appendChild(para2);
    }
    betdiv = document.getElementById("bet");
    betdiv.innerHTML = bet;
    bankdiv = document.getElementById("bank");
    bankdiv.innerHTML = bank;
  }

