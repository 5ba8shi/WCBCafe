window.addEventListener('load', function () {

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


  year_box.addEventListener('blur', function() {
    const year = document.getElementById("year").value;

    if(year !== '') {
      
      if(!year.match(regexp1) || year.match(regexp) || year.length > 4){
        errorElement1.innerText = "値が不正です";

      }else if(year.match(regexp1) && !year.match(regexp)) {
        errorElement1.innerText = "";
      };
    } else if(errorElement1.innerText !== "" && year === ""){
      errorElement1.innerText = "";
      
    }
  });


});


function edit(elem) {
  result.value = result.value + elem.value;
}

function editfunc1(elem) {
  if(result.value !== "") {
    result.value = result.value + elem.value;
  }
}

function editfunc2(elem) {
  var regexp2 = /[0-9]+[\\+\\-\\*\\/]/;
  if(result.value !== "") {
    if(!result.value.match(regexp2)) {
      result.value = result.value + elem.value;
    }
  }
}