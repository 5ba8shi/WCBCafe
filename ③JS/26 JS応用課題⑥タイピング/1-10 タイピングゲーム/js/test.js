window.addEventListener('load', function () {
      
    // 出題問題の定義
    var words = [
      'apple',
      'imagine',
      'supply',
      'fun',
      'happy',
      'air',
      'sky'
    ];

    // 変数宣言
    var currentWord;
    var currentLocation;
    var miss;
    var timer;
    var counter;
    var error;
    var isStarted;
    var timerId;

    // HTML要素の取得
    var target = document.getElementById('target');
    var missLabel = document.getElementById('miss');
    var timerLabel = document.getElementById('timer');
    // 結果表示
    var result = document.getElementById('result');
    // 解答欄のボックス
    var answer = document.getElementById('answer');
    // 送信ボタン
    var okey = document.getElementById('okey');




  //１ ページを開いたらゲームスタート
    // それぞれの変数に代入
      currentLocation = 0;
      miss = 0;
      timer = 10;
      counter = 0;
      target.innerHTML = currentWord;
      missLabel.innerHTML = miss;
      timerLabel.innerHTML = timer;
      isStarted = false;
    // スタート
      if (!isStarted) {
        isStarted = true;
        setTarget();
        updateTimer();
      };


    //1−1 上部にあるwordsをMathランダムを使用し、出題する。
    function setTarget() {
      if(counter !== 0){
        timer = 11;
      };
      answer.value = '';
      currentWord = words[Math.floor(Math.random() * words.length)];
      target.innerHTML = currentWord;
      currentLocation = 0;
    }

    //1-2 制限時間50秒のカウント
    function updateTimer() {
      
      timerId = setTimeout(function() {
        // 10秒ごとに問題を変更
        timer--;
        timerLabel.innerHTML = timer; // 上で timer = 50; と定義されている。

        if(timer == 0){
          // 出題された単語数を会得して、ミスに加算
          error = currentWord.length;
          miss += error;
          missLabel.innerHTML = miss;

          
          counter++;
          // 1問あたりの制限時間10秒を0にリセット

          
        // 5カウント溜まった際にゲーム終了
        if (counter == 5) {
          console.log(counter);
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
          return;

        };
          setTarget();
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
        counter++;
        if (counter == 5) {
          console.log(counter);
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
          return;

        };
        setTarget();
      };
    });
  });
});