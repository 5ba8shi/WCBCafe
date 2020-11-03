
// カードの配列形成
  // 引いたカード
  drawnCards = [];
  // プレイヤーのカード
  yourHand = [];
  // ディーラーのカード
  opponentsHand = [];

  // トランプの値を設定
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
  // 10以降は全て値は10
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
    } else {
      var flag = false;
      while(!flag) {
        flag = true;
        for(i = 0; i < drawnCards.length; i++) {
          if(drawnCards[i] == markarr[mark] + suitarr[suit]) {
            flag = false;
            break;
          };
        };
        if(!flag) {
          suit = Math.floor(Math.random()*4);
          mark = Math.floor(Math.random()*13);
        };
      };
    };

    drawnCards.push(markarr[mark] + suitarr[suit]);
    return markarr[mark]+suitarr[suit];
  };

  
// カードを引くを選択した場合
  function oneDraw() {
    if(!gameOver && !dealerTurn) {
      yourHand.push(getCard());
      if(getHandValue(yourHand) > 21) {
        gameOver = true;
        gameLose = true;
      }
    }
    draw();
  };
  

// カードを引かないを選択した場合
  function stay() {
    if(!gameOver && !dealerTurn) {
      dealerTurn = true;
      showDealerCard = true;
      setTimeout(dealerAI, 1000);
      draw();
    };
  };
  

// プレーヤーの選択が完了後、ディーラーの動作起動
  function dealerAI() {
    if(getHandValue(opponentsHand) > 21) {
      gameWin = true;

    } else if(getHandValue(opponentsHand)>=16) {
      aiInfo = "";
      if(getHandValue(opponentsHand) > getHandValue(yourHand)) {
        gameLose = true;
      };
      if (getHandValue(opponentsHand) == getHandValue(yourHand)){
        push = true;
      };
      if (getHandValue(opponentsHand) < getHandValue(yourHand)) {
        gameWin = true;
      };
    };

    if(getHandValue(opponentsHand) < 16) {
      opponentsHand.push(getCard());
      aiInfo = " カードを引く";
      setTimeout(dealerAI, 1000);
    };

    draw();

  };
  

  // 新たなカードを加えたあとの計算処理
  function getHandValue(hand) {
    cards = [];

    for(i = 0; i < hand.length; i++) {
      cards[i] = faceValue.get(hand[i].substring(0,hand[i].length - 1));
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

    // Aカードの処理
    if(aceCount == 0) {
      // Aがなければ、返す
      return total;
    } else {
      // Aがあれば、1か10かの処理
      if(total <= 10) {
        return (total + 11) + (aceCount - 1);
      } else {
        return total + aceCount;
      };
    };

  };


// ここからdraw function---------------------------
  function draw() {
    opponent = document.getElementsByClassName("opponent")[0];
    you = document.getElementsByClassName("you")[0];
    opponent.innerHTML = "<p>ディーラーのカード</p>";
    you.innerHTML = "<p>あなたのカード</p>";

    for(i = 0; i < opponentsHand.length; i++) {

      img = new Image();
      if(!showDealerCard && i != 0) {
        img.src = '../images/card_back.png';
      } else {
        img.src = '../images/'+opponentsHand[i]+'.png';
      };
      opponent.appendChild(img);
    };

    // ディーラー側のカード
    parao = document.createElement("P");
    if(showDealerCard) {
      result = document.createTextNode("ディーラーのカード: " + getHandValue(opponentsHand) + aiInfo);
      parao.appendChild(result);
      opponent.appendChild(parao);
    };

    for(i = 0; i < yourHand.length; i++) {
      img = new Image();
      img.src = '../images/'+yourHand[i]+'.png';
      you.appendChild(img);
    };
    
    // プレイヤー側のカード
    para = document.createElement("P");
    if(getHandValue(yourHand) <=21) {
      result = document.createTextNode("あなたの合計: "+getHandValue(yourHand));
      para.appendChild(result);
      you.appendChild(para);
    } else {
      // 21を超えた場合、ゲーム終了
      result = document.createTextNode("あなたの合計: アウト‼ ");
      para.appendChild(result);
      you.appendChild(para);
    };


    // プレイヤーが勝利した場合
    if(gameWin) {
      // 操作ボタンを非表示、リスタートボタンを表示
      document.getElementById("stay_button").classList.add("hide");
      document.getElementById("drow_button").classList.add("hide");
      document.getElementById("restart_button").classList.remove("hide");
      
      // メッセージを表示 
      para2 = document.createElement("P");
      result = document.createTextNode("あなたの勝ち!");
      para2.appendChild(result);
      you.appendChild(para2);
    };
    

    // ディーラーが買った場合
    if(gameLose) {
      // 操作ボタンを非表示、リスタートボタンを表示
      document.getElementById("stay_button").classList.add("hide");
      document.getElementById("drow_button").classList.add("hide");
      document.getElementById("restart_button").classList.remove("hide");
      
      // メッセージを表示
      para2 = document.createElement("P");
      result = document.createTextNode("あなたの負け!");
      para2.appendChild(result);
      you.appendChild(para2);
    }
    

    // 引き分け
    if(push) {
      // 操作ボタンを非表示、リスタートボタンを表示
      document.getElementById("stay_button").classList.add("hide");
      document.getElementById("drow_button").classList.add("hide");
      document.getElementById("restart_button").classList.remove("hide");
      
      // メッセージを表示
      para2 = document.createElement("P");
      result = document.createTextNode("引き分け!");
      para2.appendChild(t);
      you.appendChild(para2);
    }

  };
// ---------------------------ここまでdraw function

