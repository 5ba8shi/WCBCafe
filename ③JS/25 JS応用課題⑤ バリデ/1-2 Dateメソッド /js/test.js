window.addEventListener('load', function () {

// 各要素取得
  // 年月日の入力値
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  // 何日後の入力値
  const count_day = document.getElementById("count_day").value;
  // 計算ボタン
  const calc = document.getElementById("calc");
  // 計算結果
  const result = document.getElementById("result");


  
  
  calc.addEventListener('click', function(){
    // 年月日をセットする
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;

    var date_set = new Date();
    date_set.setFullYear(year);
    date_set.setMonth(month - 1);
    date_set.setDate(day);

    const input1 = date_set.getTime();

    // 何日後の入力値
    const count_day = document.getElementById("count_day").value;
    const input2 = Math.floor(count_day * 24 * 60 * 60 * 1000);

    // 合計を計算し、出力
    const total = input1 + input2;
    const answer = new Date(total);
    // 月は０〜１１のためプラス１をする。 
    const tuki = answer.getMonth()+1;

      result.innerHTML = answer.getFullYear() + '年 ' + tuki + '月 ' + answer.getDate() + '日 です。'

  });

});