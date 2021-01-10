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
    const errorElement5 = document.getElementById('error5');

    // 正規表現
    const regexp = /^[0]+[0-9]/;
    const regexp1 = /[0-9]/;



    
  // 計算処理から値出力まで---------------------------------------------------
    calc.addEventListener('click', function(){
      // 入力された年月日をセットする
      const year = document.getElementById("year").value;
      const month = document.getElementById("month").value;
      const day = document.getElementById("day").value;
      const count_day = document.getElementById("count_day").value;
      

      // 空欄がなければ以下の処理を進める
      if(year !== '' && month !== '' && day !== '' && count_day !== ''){

        // 存在しない2月30日を弾く
        if(day == 30 && month == 2){
          errorElement5.innerText = "存在しない日付です。存在する月日を再度入力して計算を押してください";

          // 存在しない2月,4月,6月,9月,11月の31日を弾く
        } else if(day == 31 && (month == 2 || month == 4 || month == 6 || month == 9 || month == 11)){
          errorElement5.innerText = "存在しない日付です。存在する月日を再度入力して計算を押してください";

          // 閏年ではない2月29日を弾く
        } else if(day == 29 && month == 2 && year % 4 !== 0 ){
          errorElement5.innerText = "閏年が存在しない年です。存在する月日を再度入力して計算ボタンを押してください";


        //問題なければ以下の処理を行う 
        } else {
          // エラー文があれば空にする
          errorElement5.innerText = "";

          // newDate() 指定した時刻を表す日付オブジェクトを生成する。
          // 何も指定されなかった場合は現在の（デバイスに）設定されている時刻を取得する。
          const date_set = new Date();
          date_set.setFullYear(year); // 年を設定する
          date_set.setMonth(month - 1); // 月を設定 0始まりのため−1をする
          date_set.setDate(day); //日を設定
          
          const input1 = date_set.getTime(); //1970年からの経過ミリ秒数を取得
          
          // 何日後の入力値
          const input2 = Math.floor(count_day * 24 * 60 * 60 * 1000);
          
          // 合計を計算し、出力
          const total = input1 + input2;
          const answer = new Date(total); // newDate() 指定した時刻を表す日付オブジェクトを生成する。
          const tuki = answer.getMonth()+1; // 月は０〜１１のためプラス１をする。 
          
          result.innerHTML = answer.getFullYear() + '年 ' + tuki + '月 ' + answer.getDate() + '日 です。';

          //その他get setの詳細 http://www.htmq.com/js/date_setFullYear.shtml
        };
          
      
      // 空欄が一つでもあれば弾く
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

      //空欄の場合のバリデーション
      if(year !== ''){ 

        // 数字以外の数値が入力されていたら弾く
        if(!year.match(regexp1) || year.match(regexp) || year.length > 4){
          errorElement1.innerText = "値が不正です。";

        // 入力値が正しい場合はエラー表記を消す。 
        }else if(year.match(regexp1) && !year.match(regexp)){
          errorElement1.innerText = "";
        };
      } else if(errorElement1.innerText !== "" && year === ""){
        errorElement1.innerText = "";

      }
    });


    // 月
    month_box.addEventListener('blur', function(){
      const month = document.getElementById("month").value;

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
      const day = document.getElementById("day").value;

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
      const count = document.getElementById("count_day").value;

      if(count !== ""){
        if(!count.match(regexp1) || count.match(regexp)  || count.length > 4){
          errorElement3.innerText = "値が不正です。半角で1 〜 9999までの値を入れてください";

        } else if(count.match(regexp1) && !count.match(regexp)){
          errorElement3.innerText = "";

        };
      
      //不正な値を取り除いてエラー文が出ていたらエラー文を取り除く
      } else if(errorElement3.innerText !== "" && count === ""){
        errorElement3.innerText = "";

      };
    });



});