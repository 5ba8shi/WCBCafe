
// カードの配列形成
  // プレイヤーのカード
  let yourHand = [];
  // ディーラーのカード
  let opponentsHand = [];
  
  // プレイヤーとディーラーのカードを保管
  const drawnCards = [];

  // その他の変数宣言
  let gameOver;
  let dealerTurn;
  let gameWin;
  let gameLose;
  let push;
  let showDealerCard;
  let aiInfo;

  // トランプの値を設定
  const faceValue = new Map();
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


// ページを読み込んでゲーム開始
  const newGame = () => {
    // 始めるボタンを押したあとに非表示、その他のボタンを表示
    document.getElementById("start_button").classList.add("hide");
    document.getElementById("restart_button").classList.add("hide");
    document.getElementById("stay_button").classList.remove("hide");
    document.getElementById("drow_button").classList.remove("hide");

    
    // プレイヤーの手札を展開
    yourHand = [getCard(), getCard()];
    // 相手プレイヤーの手札を展開
    opponentsHand = [getCard(), getCard()];

    // ゲームのジャッジに使用する変数を全てfalseにする。
    gameOver = false;
    dealerTurn = false;
    gameWin = false;
    gameLose = false;
    push = false;
    showDealerCard = false;
    aiInfo = "";

    draw();
  };

  


// カードの処理
  const getCard = () => {
    const markarr = ['a','2','3','4','5','6','7','8','9','10','j','q','k'];
    const suitarr = ['c','s','h','d'];
    let mark = Math.floor(Math.random() * 13);
    let suit = Math.floor(Math.random() * 4);

    let flag = false;

    while(!flag) {
      flag = true;
      // drawnCardsの中に１枚のカード例markarr → a, suitarr → s,  Aスペード
      for(i = 0; i < drawnCards.length; i++) {
        // 引いたカードと新しく引いたカードが同じだった場合breakする。同じカードは2枚存在しないから。
        if(drawnCards[i] === markarr[mark] + suitarr[suit]) {
          flag = false;  //引き続きカードを引く処理を続けるためfalseを代入する
          break;
        };
      };
  
      if(!flag) {
        mark = Math.floor(Math.random() * 13);
        suit = Math.floor(Math.random() * 4);
      };
    };

    // drawnCardsの中に１枚のカード例markarr → a, suitarr → s, Aスペード  
    drawnCards.push(markarr[mark] + suitarr[suit]);
    return markarr[mark] + suitarr[suit];
  };

  
// カードを引くを選択した場合
  const oneDraw = () => {
    const yourTotalCard = getHandValue(yourHand);

    if(!gameOver && !dealerTurn) {
      yourHand.push(getCard());
      // 21より上の場合はゲーム終了
      if(yourTotalCard > 21) {
        gameOver = true;
        gameLose = true;
      }
    }
    draw();
  };
  

// カードを引かないを選択した場合はディーラーのターンに移る
  const stay = () => {
    // カードを引く、引かないボタンを非表示
    document.getElementById("stay_button").classList.add("hide");
    document.getElementById("drow_button").classList.add("hide");

    if(!gameOver && !dealerTurn) {
      // ディーラーのスイッチをオンにする
      dealerTurn = true;
      showDealerCard = true;
      setTimeout(dealerAI, 1000);
      draw();
    };
  };
  

// プレーヤーの選択が完了後、ディーラーの動作起動
  const dealerAI = () => {

    // ディーラー、プレーヤーそれぞれの合計値を変数に格納
    const opponentsTotalCard = getHandValue(opponentsHand);
    const yourTotalCard = getHandValue(yourHand);

    if(opponentsTotalCard > 21) {
      // ディーラーが21より上であればプレーヤーの勝ち
      gameWin = true;

    } else if(opponentsTotalCard >= 16) {
      aiInfo = "";

      if(opponentsTotalCard > yourTotalCard) {
        // ディーラーが勝ちの場合,gameLoseにtrueを代入
        gameLose = true;      
      } else if(opponentsTotalCard === yourTotalCard){
        // 引き分けの場合,pushにtrueを代入
        push = true;
      } else if (opponentsTotalCard < yourTotalCard) {
        // プレーヤーが勝ちの場合,gameWinにtrueを代入
        gameWin = true;
      };
    };

    // ディーラーの合計値が17に届いていない場合はカードを引く
    if(opponentsTotalCard <= 16) {
      opponentsHand.push(getCard());
      aiInfo = " カードを引く";
      setTimeout(dealerAI, 1000);
    };

    draw();

  };
  

  // 持ち札の計算処理
  const getHandValue = (hand) => {
    // 新しい配列宣言
    const cards = [];

    for(i = 0; i < hand.length; i++) {
      // hand[i]には画像のデータ名 例)JCや
      // faceValueには1〜13要素数 プログラミングでは0〜12要素

      // カード詳細
      // 1桁の場合は 3c → slice(0, 2桁 - 1(末尾のアルファベット))   → 3
      // 2桁の場合は 10c → slice(0, 3桁 - 1(末尾のアルファベット))   → 10
      cards[i] = faceValue.get(hand[i].slice(0, hand[i].length - 1));
    };

    let aceCount = 0;
    let total = 0;

    for(i = 0; i < cards.length; i++) {
      if(cards[i] === 1) {
        aceCount++;
      } else {
        total += cards[i];
      };
    };

    // Aカードの処理
    if(aceCount === 0) {
      // Aがなければ、返す
      return total;
    } else {
      // Aがあれば、1か11かの処理
      if(total <= 10) {
        return (total + 11) + (aceCount - 1);
      } else {
        return total + aceCount;
      };
    };

  };


// ここからdraw ---------------------------
  const draw = () => {
    const opponent = document.getElementById("opponent");
      opponent.innerHTML = "<p>ディーラーのカード</p>";

    const you = document.getElementById("you");
      you.innerHTML = "<p>あなたのカード</p>";

    // ディーラー、プレーヤーそれぞれの合計値を変数に格納
    const opponentsTotalCard = getHandValue(opponentsHand);
    const yourTotalCard = getHandValue(yourHand);

    // 変数宣言
    let result;
    let img;
    let parao;
    let para;
    let para2;


    for(i = 0; i < opponentsHand.length; i++) {

      img = new Image();
      // ディーラーの2枚めのカードを裏側に変える。 2回目 i = 1
      if(!showDealerCard && i != 0) {
        img.src = '../img/card_back.png';
      // ディーラーの1枚目のカードにトランプの画像を追加 1回目 i = 0
      } else {
        img.src = '../img/' + opponentsHand[i] +'.jpg';
      };
      opponent.appendChild(img);
    };


    // ディーラー側がカードを引いたら処理が動く
    parao = document.createElement("P");
    // showDealerCardの中にtrueが入っていれば処理が動く → stay()が起動したときのみ動く。
    if(showDealerCard) {
      // ディーラーの合計値
      result = document.createTextNode("ディーラーのカード: " + opponentsTotalCard + aiInfo);
      parao.appendChild(result);
      opponent.appendChild(parao);
    };

    // プレーヤー側のカード(2枚)
    for(i = 0; i < yourHand.length; i++) {
      img = new Image();
      img.src = '../img/' + yourHand[i] + '.jpg';
      you.appendChild(img);
    };
    
    // プレイヤー側のカード
    para = document.createElement("P");
    if(yourTotalCard <=21) {
      result = document.createTextNode("あなたの合計: " + yourTotalCard);
      para.appendChild(result);
      you.appendChild(para);
    } else {
      // 21を超えた場合、ゲーム終了
        result = document.createTextNode("アウト‼ 21を超えました‼ ");
        para.appendChild(result);
        you.appendChild(para);

      // 操作ボタンを非表示、リスタートボタンを表示
        document.getElementById("stay_button").classList.add("hide");
        document.getElementById("drow_button").classList.add("hide");
        document.getElementById("restart_button").classList.remove("hide");
    };


    // ゲーム終了時のジャッジ
    if(gameWin || gameLose || push) {
      // リスタートボタンを表示
      document.getElementById("restart_button").classList.remove("hide");
      
      // メッセージを表示 
      para2 = document.createElement("P");
      // プレイヤーが勝利した場合 下記のうちいずれかにtrueが入っているものが作動
      if(gameWin) {
        result = document.createTextNode("あなたの勝ち!");
      }else if(gameLose) {
        result = document.createTextNode("あなたの負け!");
      }else if(push) {
        result = document.createTextNode("引き分け!");
      };
      para2.appendChild(result);
      you.appendChild(para2);
    };

  };
// ---------------------------ここまでdraw

