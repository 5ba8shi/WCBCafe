window.addEventListener('load', function () {
      
  // 出題問題の定義
    var words = [
      'りんごを食べる',
      'ゴリラ',
      'ラッパを吹く',
      'パセリは美味い',
      '理科',
      'かえる',
      'ルビー'
    ];

  // 変数宣言
    var currentWord;
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
    // 指示
    var order = document.getElementById("order");
    // 解答欄のボックス
    var answer = document.getElementById('answer');
    // 送信ボタン
    var okey = document.getElementById('okey');
  
  // 出題問題が全て違うものが出るようにチェックするための配列
    var generated = new Array();




  //１ ページを開いたらゲームスタート
    // それぞれの変数に代入
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

        // 違うものが出るまでMath.randomを繰り返す。
        while(true){
          currentWord = words[Math.floor(Math.random() * words.length)];
          // もし配列のgeneratedにないものが出たら通過
          if(!generated.includes(currentWord)){
            // 新しく出たものを配列へ入れる。
            generated.push(currentWord);
            target.innerHTML = currentWord;
            break;
          };
        };
    };



    //1-2 制限時間の設定
    function updateTimer() {
        
      timerId = setTimeout(function() {
        // 10秒ごとに問題を変更
        timer--;
        timerLabel.innerHTML = timer; // 上で timer = 10; と定義されている。

        if(timer == 0){
          // 出題された単語数を会得して、ミスに加算
          error = currentWord.length;
          miss += error;
          missLabel.innerHTML = miss;
          counter++;        

          // 5カウント溜まった際にゲーム終了
          if (counter == 5) {
            endfunc();
            clearTimeout(timerId);
            // 非表示にする
            answer.classList.add("wipe");
            okey.classList.add("wipe");
            order.classList.add("wipe");
            // 終了サイン
            target.innerText = 'STOP!!';
            return;
          };
          setTarget();
        };
        updateTimer();
      }, 1000);

    };



  // 2 入力したら以下のファンクションが動く
    // 入力してOKボタンを押して、答えがあっていれば、次の問題へ
      okey.addEventListener('click', function(){ 
        if (!isStarted) {
          return;
        }

        counter++;     
        if (currentWord === answer.value) {
          setTarget();
        }else if(currentWord !== answer.value) {
          var input_answer = answer.value;
          
          // 値を一つ一つに分けて配列を形成
          var currentWordArr = currentWord.split('');
          var input_answerArr = input_answer.split('');
          
          // 配列を比較
          check = currentWordArr.filter(i => input_answerArr.indexOf(i) == -1);

          // 不一致の数を追加
          error = check.length;
          miss += error;
          missLabel.innerHTML = miss;
          setTarget();
        };

        if (counter == 5) {
          endfunc();
          clearTimeout(timerId);
            // 非表示にする
            answer.classList.add("wipe");
            okey.classList.add("wipe");
            order.classList.add("wipe");
            // 終了サイン
            target.innerText = 'STOP!!';
          return;
        };
      });
    

  //3 ゲーム終了時の結果
  function endfunc(){
    if(miss >= 9){
      result.innerText = '頑張りましょう。';
    }else if(miss >= 4 && miss <= 8){
      result.innerText = 'まだまだです。';
    }else if(miss >= 1 && miss <= 3){
      result.innerText = 'おしい！';
    }else if(miss == 0){
      result.innerText = '完璧！';
    };      
  };


});