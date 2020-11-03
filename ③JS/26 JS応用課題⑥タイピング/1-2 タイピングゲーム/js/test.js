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
      var score;
      var miss;
      var timer;

      // HTML要素の取得
      var target = document.getElementById('target');
      var scoreLabel = document.getElementById('score');
      var missLabel = document.getElementById('miss');
      var timerLabel = document.getElementById('timer');
      var result = document.getElementById('result');
      var answer = document.getElementById('answer');
      var isStarted;
      var timerId;


  //１ ページを開いたときの最初の画面     全てを初期化
      function init() {
        currentWord = 'click to start';
        currentLocation = 0;
        score = 0;
        miss = 0;
        timer = 10;
        target.innerHTML = currentWord;
        scoreLabel.innerHTML = score;
        missLabel.innerHTML = miss;
        timerLabel.innerHTML = timer;
        isStarted = false;
      }

      init();



      //2-2 制限時間10秒のカウント
      function updateTimer() {
        timerId = setTimeout(function() {
          timer--;
          timerLabel.innerHTML = timer; // 上で timer = 10; と定義されている。
          
          // 下記はタイムアップした際に表示をする。
          if (timer <= 0) {
            // alert('game over');
            var accuracy = (score + miss) === 0 ? '0.00' : ((score / (score + miss)) * 100).toFixed(2);
            result.innerText = (score + ' 入力数, ' + miss + ' 個のミス! ' +'正確さは'+ accuracy + ' % ');
            clearTimeout(timerId);
            init();
            return;
          }
          updateTimer();
        }, 1000);
      }

      //2−1 上部にあるwordsをMathランダムを使用し、出題する。
      function setTarget() {
        answer.value = '';
        // answer_input.innerText = "";
        currentWord = words[Math.floor(Math.random() * words.length)];
        target.innerHTML = currentWord;
        currentLocation = 0;
      }


  //2 ページ上のどこかをクリックすればタイピングテスト開始。
      window.addEventListener('click', function() {
        if (!isStarted) {
          isStarted = true;
          setTarget();
          updateTimer();
        }
      });



  // 3 ページのどこかで入力されたら以下のファンクションが動く
  // ユーザーにより入力された文字を認識する。
      window.addEventListener('keyup', function(e) {
        if (!isStarted) {
          return;
        }


        // e.keyCode
        // console.log(String.fromCharCode(e.keyCode));
        if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
          currentLocation++;
          // console.log('score!');
          score++;
          scoreLabel.innerHTML = score;

          // 出題問題が一通り入力し終われば次の問題へ 2-1へ戻る。
          if (currentLocation === currentWord.length) {
            setTarget();
          }

        } else {
          // console.log('miss!');
          miss++;
          missLabel.innerHTML = miss;
        }
      })
    })();
});