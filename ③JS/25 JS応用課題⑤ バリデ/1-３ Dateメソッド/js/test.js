window.addEventListener('load', function () {

// 各要素取得---------------------------------------------------
  // 年月日のinputbox
  const year_box = document.getElementById("year")
  const month_box = document.getElementById("month")
  const day_box = document.getElementById("day")

  // 計算ボタン
  const calc = document.getElementById("calc");
  // 計算結果
  const result = document.getElementById("result");

  // エラー要素
  const errorElement1 = document.getElementById('error1');
  const errorElement2 = document.getElementById('error2');
  const errorElement3 = document.getElementById('error3');
  const errorElement4 = document.getElementById('error4');

  // 正規表現
  const regexp = /^[0]+[0-9]/;
  const regexp1 = /[0-9]/;
  const regexp2_1 = /[1-9]{1}/;
  const regexp2_2 = /1[0-2]{2}/;
  const regexp3 = /[1-31]/;



  
// 計算処理から値出力まで---------------------------------------------------
  calc.addEventListener('click', function(){
    // 年月日をセットする
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const count_day = document.getElementById("count_day").value;
    

    if(year !== '' && month !== '' && day !== '' && count_day !== ''){
      // 入力値が空でなければ以下の処理を実行
      var date_set = new Date();
      date_set.setFullYear(year);
      date_set.setMonth(month - 1);
      date_set.setDate(day);
      
      const input1 = date_set.getTime();
      
      // 何日後の入力値
      const input2 = Math.floor(count_day * 24 * 60 * 60 * 1000);
      
      // 合計を計算し、出力
      const total = input1 + input2;
      const answer = new Date(total);
      // 月は０〜１１のためプラス１をする。 
      const tuki = answer.getMonth()+1;
      
      result.innerHTML = answer.getFullYear() + '年 ' + tuki + '月 ' + answer.getDate() + '日 です。'

    } else if((year === '' || month === '' || day === '') && (count_day !== '')){
               // 年月日が空
               errorElement2.innerText = '値を入力してください';
    } else if((count_day === '') && (year !== '' || month !== '' || day !== '')){
               // 日後が空
               errorElement4.innerText = '値を入力してください';
    } else{
              // 全て空
              errorElement2.innerText = '値を入力してください';
              errorElement4.innerText = '値を入力してください';
    };
      
  });




// 不正入力時のバリデーション---------------------------------------------------
  // 年
  year_box.addEventListener('blur', function(){
    const year = document.getElementById("year").value;
    if(year !== ''){
      if(!year.match(regexp1) || year.match(regexp)){
        errorElement1.innerText = "値が不正です。";
      }else if(year.match(regexp1) && !year.match(regexp)){
        errorElement1.innerText = "";
      };
    };
  });

  // 月
  month_box.addEventListener('blur', function(){
    const month = document.getElementById("month").value;
    if(month !== ''){
      if(!month.match(regexp2_1)){
          if(!month.match(regexp2_2)){
            errorElement1.innerText = "値が不正です。";
          } 
      };
      
      if(month.match(regexp2_1) || month.match(regexp2_2)){
          errorElement1.innerText = "";
      };
    };
  });

  day_box.addEventListener('blur', function(){
    const day = document.getElementById("day").value;
    if(day !== ''){
      errorElement1.innerText = "値が不正です。";
    };
  });


  // 日後は？
  count_day.addEventListener('blur', function(){
    const count = document.getElementById("count_day").value;
    if(count !== ''){
      if(!count.match(regexp1) || count.match(regexp)){
        errorElement3.innerText = "値が不正です。";
      }else if(count.match(regexp1) && !count.match(regexp)){
        errorElement3.innerText = "";
      };
    };
  });

});