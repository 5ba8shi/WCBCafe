// カードを配列に入れる。
  // トランプのjpg画像の各名称
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

//カードの配置を混ぜる。Fisher–Yates Shuffleーーーーーーーーーーーーーーーーーーーーーーーーー
  // 要素は52個あるが、一番最後に残った1つの配置換えをしても無意味なので−1をする。
  for(var i = cards.length - 1; i > 0; i--){
    // 初回の処理
    // 次に上で−1をしたが、実際は52個の要素が存在するため、＋１をして元に戻す。
    // 1から52の数字をMathrandomで選び出す。

    // ※2回目以降の処理
    // iが0になるまで以下を残り50回繰り返す。
    // 前回のtmp内容をを含んだ rの中に新たに1から51の数字をMathrandomで選び出す。
    var r = Math.floor(Math.random() * (i + 1));
    
    // i の残り処理回数を記録するため変数tmpを用意して保管する
    var tmp = cards[i];
    
    // i の残りからrandomに選ばれた r を i の中に処理済みとして記録する。
    cards[i] = cards[r];
    
    // r に今回の処理内容を含んだtmpデータを共有のため代入。
    cards[r] = tmp;
  };
//ーーーーーーーーーーーーーーーーーーーーーーーーーカードの配置を混ぜる。Fisher–Yates Shuffle




// HTML上のトランプの形成 ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// トランプの列の形成  
var row_id = 1;

// row1
  for (var i = 1; i <= 52; i++) {
    // div要素を生成
      var div = document.createElement("div");
      div.id = row_id;
      div.className ="card";    
    // img要素を生成
      var img = document.createElement('img');
      img.src = '../img/card_back.png';
    // img要素をdiv要素へ入れる
      div.appendChild(img);
    if(i <= 13){
      // 親要素のrowに子要素として追加
        document.getElementById('row1').appendChild(div);
      // idの連番を生成
        row_id++;
    } else if(14 <= i && i <= 26){
      // 親要素のrowに子要素として追加
        document.getElementById('row2').appendChild(div);
      // idの連番を生成
        row_id++;
    } else if(27 <= i && i <= 39){
      // 親要素のrowに子要素として追加
        document.getElementById('row3').appendChild(div);
      // idの連番を生成
        row_id++;
    } else if(40 <= i && i <= 52){
      // 親要素のrowに子要素として追加
        document.getElementById('row4').appendChild(div);
      // idの連番を生成
        row_id++;
    };
  };
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーートランプの列の形成


// HTML要素からカードの要素を全て取得
  var cardNodes = document.querySelectorAll('.card');

// 変数宣言
  // 1枚目の引いたカードを内容を保管する変数
  var pickedSingle;
  // 1枚目を保管するための配列
  var pickedArray = [];

  // 引いたカードの変数
  var currentCard;
  // 1枚目に引いたカードを保管する変数
  var prevCard;


// HTML上から取得したカード要素を展開
  cardNodes.forEach((card) => {


    // HTML上のカードをクリック
    card.addEventListener('click', () => {
      
      // ２枚カードを引き当てたあとの処理
      if(pickedArray.length === 2){
        //カードを裏返す。
        currentCard.firstChild.src = '../img/card_back.png';
        prevCard.firstChild.src = '../img/card_back.png';
    
        // 配列のカウントを０に戻す
        pickedArray.length = 0;
      }

      // １枚目のカードを開く際の処理
      if(pickedArray.length < 2){
        currentCard = card;

        //カードを開いた
        // 何個目のカードをクリックしたか
        pickedSingle = cards[card.id.substr(0) - 1];
        // 該当した画像名を要素を追加するために入れる。
        card.firstChild.src = '../img/' + pickedSingle + '.jpg';

        //１枚目の開いたカードを配列に入れる
        if(pickedArray[0] !== pickedSingle){
          pickedArray.push(pickedSingle);
        };
      };

      //引いたカードが2枚目の場合の処理
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

      // 引いたカードが１枚目の場合の処理
      } else if(pickedArray.length === 1){
        prevCard = currentCard;
      };
    });


  });