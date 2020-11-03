window.addEventListener('load', function () {
    (function() {
      'use strict';

      
      // 出題問題
      var words = [
        'apple',
        'imagine',
        'supply',
        'fun',
        'happy',
        'air',
        'sky'
      ];

      var currentWord;
      var currentLocation;
      var miss;
      var timer;

      // HTML要素の取得
      var target = document.getElementById('target');
      var missLabel = document.getElementById('miss');
      var timerLabel = document.getElementById('timer');
      var result = document.getElementById('result');
      var answer = document.getElementById('answer');
      var okey = document.getElementById('okey');
      var isStarted;
      var timerId;


  //１ ページを開いたらゲームスタート
      function game_start() {
        currentLocation = 0;
        miss = 0;
        timer = 10;
        target.innerHTML = currentWord;
        missLabel.innerHTML = miss;
        timerLabel.innerHTML = timer;
        isStarted = false;

        if (!isStarted) {
          isStarted = true;
          setTarget();
          updateTimer();
        }
      }
    
  game_start();

      //1−1 上部にあるwordsをMathランダムを使用し、出題する。
      function setTarget() {
        answer.value = '';
        // answer_input.innerText = "";
        currentWord = words[Math.floor(Math.random() * words.length)];
        target.innerHTML = currentWord;
        currentLocation = 0;
      }

      //1-2 制限時間10秒のカウント
      function updateTimer() {
        timerId = setTimeout(function() {
          timer--;
          timerLabel.innerHTML = timer; // 上で timer = 10; と定義されている。
          
          // 下記はタイムアップした際に表示をする。
          if (timer <= 0) {
            if(miss >= 9){
              result.innerText = '頑張りましょう。';
            }else if(miss >= 4 && miss <= 8){
              result.innerText = 'まだまだです。';
            }else if(miss >= 1 && miss <= 3){
              result.innerText = 'おしい！';
            }else if(miss == 0){
              result.innerText = '完璧！';
            };
            
            clearTimeout(timerId);
            game_start();
            return;
          }
          updateTimer();
        }, 1000);
      }



  // 2 入力したら以下のファンクションが動く
  // ユーザーにより入力された文字を認識する。
      answer.addEventListener('keyup', function(e) {
        if (!isStarted) {
          return;
        }
        // e.keyCode
        // console.log(String.fromCharCode(e.keyCode));
        if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
          currentLocation++;
        } else {
          // console.log('miss!');
          miss++;
          missLabel.innerHTML = miss;
        }

        // 入力してOKボタンを押して、答えがあっていれば、次の問題へ
        okey.addEventListener('click', function(){          
          if (currentLocation === currentWord.length) {
            setTarget();
          }
        })
      });
    })();
});