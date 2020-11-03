var result = document.getElementById("result");

// 0と00を除く1〜9ボタンの機能
function edit(elem) {
  result.value = result.value + elem.value;
}

// 0のボタンの機能
function editfunc1(elem) {
  if(result.value !== ""){
    result.value = result.value + elem.value;
  }
}

// 00のボタンの機能
function editfunc2(elem) {
  var regexp2 = /[0-9]+[\\+\\-\\*\\/]/;
  if(result.value !== ""){
    if(!result.value.match(regexp2)){
      result.value = result.value + elem.value;
    }
  }
}

// 正規表現と一致したら弾く
// 四則演算ボタン
function edit_calc(elem) {
  var regexp1 = /[\\+\\-\\*\\/]/;
  if(result.value !== ''){
    if(!result.value.match(regexp1)){
      result.value = result.value + elem.value;
    }
  }
}

// 計算結果を出力する機能
function calc() {
  if(result.value !== ""){
  result.value = new Function("return " + result.value)();
  }
}

// 計算結果を消す機能
function clearfunc() {
  if(result.value !== ""){
    document.getElementById("result").value = '';
  }
}