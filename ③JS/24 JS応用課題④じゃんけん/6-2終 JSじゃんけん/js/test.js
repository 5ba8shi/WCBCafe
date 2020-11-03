window.addEventListener('load', function () {

    // 各要素の取得
    // 相手の手
    let robot_hand_choice = document.getElementById('robot_hand');
    // 自分の手
    let rock = document.getElementById('rock');
    let scissor = document.getElementById('scissor');
    let paper = document.getElementById('paper');
    // じゃんけん結果
    let result = document.getElementById('result');

    
    // じゃんけんの処理
    function janken(hand) {
        // 相手のじゃんけんの手
        let hands = ['rock', 'scissor', 'paper'];
        robothand = Math.floor(Math.random() * hands.length);

        // 相手のじゃんけんの画像を変更
        // 0はグー、１はチョキ、2はパー
        switch(robothand){
            case 0:
                robot_hand_choice.src ="../img/gu-.png";
                break;
            
            case 1:
                robot_hand_choice.src ="../img/choki.png";
                break;
            
            case 2:
                robot_hand_choice.src ="../img/pa-.png";
                break;
        }

        // じゃんけんの結果発表 
        result.innerHTML = judge(hand, robothand) + 'です'
    }
    

    // じゃんけんの結果発表の処理
    // 0はグー、１はチョキ、2はパー
    function judge(myHand, robothand) {
        if (myHand === robothand) {
            return 'あいこ';
        } else if (
            (myHand === 0 && robothand === 1) ||
            (myHand === 1 && robothand === 2) ||
            (myHand === 2 && robothand === 0) ) {
            return '勝利' 
        } else {
            return '敗北'
        }
    }

    
    // HTML上の入力ボタン
    // 0はグー、１はチョキ、2はパー
    rock.addEventListener('click', function(){
        janken(0);
    });


    scissor.addEventListener('click', function(){
        janken(1);
    });


    paper.addEventListener('click', function(){
        janken(2);
    });
});