window.addEventListener('load', function () {


  // 各要素取得---------------------------------------------------
    // 年月日のinputbox
    var year_box = document.getElementById("year")
    var month_box = document.getElementById("month")
    var day_box = document.getElementById("day")

    // 計算ボタン
    var calc = document.getElementById("calc");
    // 計算結果
    var result = document.getElementById("result");

    // エラー要素
    var errorElement1 = document.getElementById('error1');
    var errorElement2 = document.getElementById('error2');
    var errorElement3 = document.getElementById('error3');
    var errorElement4 = document.getElementById('error4');
    var errorElement5 = document.getElementById('error5');

    // 正規表現
    var regexp = /^[0]+[0-9]/;
    var regexp1 = /[0-9]/;



    
  // 計算処理から値出力まで---------------------------------------------------
    calc.addEventListener('click', function(){
      // 年月日をセットする
      var year = document.getElementById("year").value;
      var month = document.getElementById("month").value;
      var day = document.getElementById("day").value;
      var count_day = document.getElementById("count_day").value;
      

      if(year !== '' && month !== '' && day !== '' && count_day !== ''){

        if(day == 30 && month == 2){
          errorElement5.innerText = "存在しない日付です。存在する月日を再度入力して計算を押してください";
        } else if(day == 31 && (month == 2 || month == 4 || month == 6 || month == 9 || month == 11)){
          errorElement5.innerText = "存在しない日付です。存在する月日を再度入力して計算を押してください";
        } else if(day == 29 && month == 2 && year % 4 !== 0 ){
          errorElement5.innerText = "閏年が存在しない年です。存在する月日を再度入力して計算ボタンを押してください";
        } else {
          errorElement5.innerText = "";
          var date_set = new Date();
          date_set.setFullYear(year);
          date_set.setMonth(month - 1);
          date_set.setDate(day);
          
          var input1 = date_set.getTime();
          
          // 何日後の入力値
          var input2 = Math.floor(count_day * 24 * 60 * 60 * 1000);
          
          // 合計を計算し、出力
          var total = input1 + input2;
          var answer = new Date(total);
          // 月は０〜１１のためプラス１をする。 
          var tuki = answer.getMonth()+1;
          
          result.innerHTML = answer.getFullYear() + '年 ' + tuki + '月 ' + answer.getDate() + '日 です。'
        };
          
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
      var year = document.getElementById("year").value;
      if(year !== ''){
        if(!year.match(regexp1) || year.match(regexp) || year.length > 4){
          errorElement1.innerText = "値が不正です。";
        }else if(year.match(regexp1) && !year.match(regexp)){
          errorElement1.innerText = "";
        };
      };
    });

    // 月
    month_box.addEventListener('blur', function(){
      var month = document.getElementById("month").value;
      if(month !== ''){
        if(!month.match(regexp1)){
          errorElement1.innerText = "値が不正です。";
        }else if(month.match(regexp)){
          errorElement1.innerText = "値が不正です。";
        }else if(12 < month || 0 == month){
          errorElement1.innerText = "値が不正です。";
        }else{
          errorElement1.innerText = "";
        };
      };
    });

    
    // 日
    day_box.addEventListener('blur', function(){
      var day = document.getElementById("day").value;
      if(day !== ''){
        if(!day.match(regexp1)){
          errorElement1.innerText = "値が不正です。";
        }else if(day.match(regexp)){
          errorElement1.innerText = "値が不正です。";
        }else if(31 < day || 0 == day){
          errorElement1.innerText = "値が不正です。";
        }else{
          errorElement1.innerText = "";
        };
      };
    });


    // 日後は？
    count_day.addEventListener('blur', function(){
      var count = document.getElementById("count_day").value;
      if(count !== ''){
        if(!count.match(regexp1) || count.match(regexp)  || count.length > 4){
          errorElement3.innerText = "値が不正です。";
        }else if(count.match(regexp1) && !count.match(regexp)){
          errorElement3.innerText = "";
        };
      };
    });


});