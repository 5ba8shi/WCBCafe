let yourHand = [];

let opponentsHand = [];

const drawnCards = [];


const drawnCards = [];


let gameOver;
let dealerTurn;
let gameWin;
let gameLose;
let push;
let showDealerCard;
let aiInfo;

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


const newGame = () => {    
  // 始めるボタンを押したあとに非表示、その他のボタンを表示
  document.getElementById("start_button").classList.add("hide");
  document.getElementById("restart_button").classList.add("hide");
  document.getElementById("stay_button").classList.remove("hide");
  document.getElementById("drow_button").classList.remove("hide");

  yourHand = [getCard(), getCard()];
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


const getCard = () => {
  const markarr = ['a','2','3','4','5','6','7','8','9','10','j','q','k'];
  const suitarr = ['c','s','h','d'];
  let mark = Math.floor(Math.random() * 13);
  let suit = Math.floor(Math.random() * 4);

  let flag = false;

  while(!flag) {
    flag = true;

    for(i = 0; i < drawnCards.length; i++) {
      if(drawnCards[i] === markarr[mark] + suitarr[suit]) {
        flag = false;
        break;
      };
    };

    if(!flag) {
      mark = Math.floor(Math.random() * 1)
    };
  };

  drawnCards.push(markarr[mark] + suitarr[suit]);
  return markarr[mark] + suitarr[suit];

};


const oneDraw = () => {
  const yourTotalCard = getHandValue(yourHand);

  if(!gameOver && !dealerTurn) {
    yourHand.push(getCard());
    
    if(yourTotalCard > 21) {
      gameOver = true;
      gameLose = true;
    }
  }
  draw();
}

const stay = () => {
  document.getElementById("stay_button").classList.add("hide");
  document.getElementById("drow_button").classList.add("hide");

  if(!gameOver && !dealerTurn) {
    dealerTurn = true;
    showDealerCard = true;
    setTimeout(dealerAI, 1000);
    draw();
  }
}

const draw = () => {
  const opponent = document.getElementById("opponent");
    opponent.innerHTML = "<p>ディーラーのカード</p>";

  const you = document.getElementById("you");
    you.innerHTML = "<p>あなたのカード</p>";

  const opponentsTotalCard = getHandValue(opponentsHand);
  const yourTotalCard = getHandValue(yourHand);


  let result;
  let img;
  let parao;
  let para;
  let para2;


  for(i = 0; i < opponentsHand.length; i++) {

    img = new Image();

    if(!showDealer Card $$ i != 0) {
      img.src = '../img/card_bach.png';
    } else {
      img.src = '../img/' + opponentsHand[i] + '.jpg';
    };
    opponents.appendChild(img);
  };

  
}