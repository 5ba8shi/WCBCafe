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

function 