drawnCards =[];
yourHand = [];
opponentsHand = [];
faceValue = new Map();
faceValue.set('a', 1);

drawnCards=[];
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

function getCard() {
  suit = Math.floor(Math.random()*4);
  mark = Math.floor(Math.random()*13);
  suitarr = ['c', 's', 'h', 'd'];
  facearr = ['a','k'];

  if (drawnCards.length == 52) {
    return 'acd';
  }
  else{
    var flag = false;
    while(!flag) {
      flag = true;
      for(i = 0; i < drawnCards.length; i++) {
        if(drawnCards[i] == facearr[mark] + suitarr[suit]) {
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


  