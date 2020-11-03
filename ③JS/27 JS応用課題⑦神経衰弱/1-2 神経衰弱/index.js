
// カードを配列に入れる。
var cards = ['AC', 'AD', 'AH', 'AS',
'2C', '2D', '2H', '2S',
'3C', '3D', '3H', '3S',
'4C', '4D', '4H', '4S',
'5C', '5D', '5H', '5S',
'6C', '6D', '6H', '6S',
'7C', '7D', '7H', '7S',
'8C', '8D', '8H', '8S',
'9C', '9D', '9H', '9S',
'10C', '10D', '10H', '10S',
'JC', 'JD', 'JH', 'JS',
'QC', 'QD', 'QH', 'QS',
'KC', 'KD', 'KH', 'KS'
];

//カードの配置を混ぜる。
    for(var i = cards.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = cards[i];
        cards[i] = cards[r];
        cards[r] = tmp;
        
    }

// HTML要素からカードの要素を全て取得
var cardNodes = document.querySelectorAll('.card');


var pickedSingle;
// ①枚めを保管するための配列の箱
var pickedArray = [];

// ①枚目
var prevCard;
// ②枚目
var currentCard;



    cardNodes.forEach((card) => {

        card.addEventListener('click', () => {
            
            if(pickedArray.length === 2){
                //カードを裏返す。
                currentCard.firstChild.src = 'img/cards/blue_back.jpg';
                prevCard.firstChild.src = 'img/cards/blue_back.jpg';
            
                // 配列のカウントを０に戻す
                pickedArray.length = 0;
            }

            if(pickedArray.length < 2){
                currentCard = card;

                //flipping clicked card
                pickedSingle = cards[card.id.substr(1) - 1];
                card.firstChild.src = 'img/cards/' + pickedSingle + '.jpg';

                //put the picked card into array
                if(pickedArray[0] !== pickedSingle){
                    pickedArray.push(pickedSingle);
                }
            }

            //checking if the current player has clicked two cards
            if(pickedArray.length === 2){

                //カードが一致する場合
                if(pickedArray[0].substr(0, 1) === pickedArray[1].substr(0, 1)){
                    // 0.5秒後に実行する。
                    setTimeout(function(){    
                        // カードを取り除く
                        currentCard.removeChild(currentCard.firstElementChild);
                        prevCard.removeChild(prevCard.firstElementChild);
                        
                        //配列のカウントを0に戻す
                        pickedArray.length = 0;
                    },500);

                };
                
            } else if(pickedArray.length === 1){
            prevCard = currentCard;
            };
        });

        
    });








