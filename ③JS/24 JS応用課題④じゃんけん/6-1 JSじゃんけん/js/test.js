window.addEventListener('load', function () {
    // 各要素の取得
    let result = document.getElementById('result');
    let rock = document.getElementById('rock');
    let scissors = document.getElementById('scissor');
    let paper = document.getElementById('paper');
    let robotHandField = document.getElementById('robot_hand');

    // じゃんけんの処理
    function janken(hand) {
        // 相手のじゃんけんの手
        let hands = ['rock', 'scissor', 'paper'];
        robothand = Math.floor(Math.random() * hands.length);
        robotHandField.innerHTML = '相手の手は' + robothand + 'です'

        // じゃんけんの結果発表 
        result.innerHTML = judge(hand, robothand) + 'です'
    }
    

    // じゃんけんの結果発表の処理
    function judge(myHand, robothand) {
        if (myHand === robothand) {
            return 'あいこ';
        } else if (
            (myHand === 'rock' && robothand === 'scissor') ||
            (myHand === 'scissor' && robothand === 'paper') ||
            (myHand === 'paper' && robothand === 'rock') ) {
            return 'あなたの勝ち' }
        else{
            return 'あなたの負け'
        }
    }

    
    // HTML上の入力ボタン
    rock.addEventListener('click', function(){
        janken('rock');
    });


    scissors.addEventListener('click', function(){
        janken('scissors');
    });


    paper.addEventListener('click', function(){
        janken('paper');
    });
});