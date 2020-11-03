
  // カードの配列形成
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

  // 初期値を設定
    showDealerCard = false;
    gameOver = false;
    dealerTurn = false;
    gameWin = false;
    gameLose = false;
    push = false;
    aiInfo = "";
  

  // ページを読み込んでゲーム開始
  function newGame() {
    // 始めるボタンを押したあとに非表示、その他のボタンを表示
    document.getElementById("start_button").classList.add("hide");
    document.getElementById("restart_button").classList.add("hide");
    document.getElementById("stay_button").classList.remove("hide");
    document.getElementById("drow_button").classList.remove("hide");

    drawnCards = [];
    // プレイヤーの手札を展開
    yourHand = [getCard(), getCard()];
    // 相手プレイヤーの手札を展開
    opponentsHand = [getCard(), getCard()];
    gameOver = false;
    dealerTurn = false;
    gameWin = false;
    gameLose = false;
    push = false;
    showDealerCard = false;
    aiInfo = "";

    draw();
  };



  // 両者それぞれのカードを展開
    function getCard() {
      suit = Math.floor(Math.random()*4);
      mark = Math.floor(Math.random()*13);
      suitarr = ['c','s','h','d'];
      markarr = ['a','2','3','4','5','6','7','8','9','10','j','q','k'];
      if (drawnCards.length == 52) {
        return 'acd';
      }
      else {
        var flag = false;
        while(!flag) {
          flag = true;
          for(i = 0; i < drawnCards.length; i++) {
            if(drawnCards[i] == markarr[mark] + suitarr[suit]) {
              flag = false;
              break;
            }
          }
          if(!flag) {
            suit = Math.floor(Math.random()*4);
            mark = Math.floor(Math.random()*13);
          }
        }
      }
      drawnCards.push(markarr[mark] + suitarr[suit]);
      return markarr[mark]+suitarr[suit];
    };

    

    function hit() {
      if(!gameOver && !dealerTurn) {
        yourHand.push(getCard());
        if(getHandValue(yourHand) > 21) {
          gameOver = true;
          gameLose = true;
        }
      }
      draw();
    };
    

    function stay() {
      if(!gameOver && !dealerTurn) {
        dealerTurn = true;
        showDealerCard = true;
        setTimeout(dealerAI, 1000);
        draw();
      }
    };
    

    function dealerAI() {
      if(getHandValue(opponentsHand) > 21) {
        gameWin = true;
      }
      else if(getHandValue(opponentsHand)>=16) {
        aiInfo = "";
        if(getHandValue(opponentsHand) > getHandValue(yourHand)) {
          gameLose = true;
        }
        if (getHandValue(opponentsHand) == getHandValue(yourHand)){
          push = true;
        }
        if (getHandValue(opponentsHand) < getHandValue(yourHand)) {
          gameWin = true;
        }
      }
      if(getHandValue(opponentsHand) < 16) {
        opponentsHand.push(getCard());
        aiInfo = " カードを引く";
        setTimeout(dealerAI, 1000);
      }
      draw();

    };
    

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
    };


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
        t = document.createTextNode("あなたの合計: "+getHandValue(yourHand));
        para.appendChild(t);
        y.appendChild(para);
      }
      else {
        t = document.createTextNode("あなたの合計: アウト‼ ");
        para.appendChild(t);
        y.appendChild(para);
      }

      if(gameWin) {
        document.getElementById("stay_button").classList.add("hide");
        document.getElementById("drow_button").classList.add("hide");
        document.getElementById("restart_button").classList.remove("hide");
        para2 = document.createElement("P");
        t = document.createTextNode("あなたの勝ち!");
        para2.appendChild(t);
        y.appendChild(para2);
      }

      if(gameLose) {
        document.getElementById("stay_button").classList.add("hide");
        document.getElementById("drow_button").classList.add("hide");
        document.getElementById("restart_button").classList.remove("hide");
        para2 = document.createElement("P");
        t = document.createTextNode("あなたの負け!");
        para2.appendChild(t);
        y.appendChild(para2);
      }

      if(push) {
        document.getElementById("stay_button").classList.add("hide");
        document.getElementById("drow_button").classList.add("hide");
        document.getElementById("restart_button").classList.remove("hide");
        para2 = document.createElement("P");
        t = document.createTextNode("引き分け!");
        para2.appendChild(t);
        y.appendChild(para2);
      }

    };

