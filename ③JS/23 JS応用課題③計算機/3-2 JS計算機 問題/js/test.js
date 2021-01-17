const result = document.getElementById("result");

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
  const regexp2 = /[0-9]+[\\+\\-\\*\\/]/;
  if(result.value !== ""){
    if(!result.value.match(regexp2)){
      result.value = result.value + elem.value;
    }
  }
}

// 正規表現と一致したら弾く
// 四則演算ボタン
function edit_calc(elem) {
  const regexp1 = /[\\+\\-\\*\\/]/;
  if(result.value !== ''){
    if(!result.value.match(regexp1)){
      result.value = result.value + elem.value;
    }
  }
}

// 計算結果を出力する機能
function calc() {
  if(result.value !== ""){
  // new Function は、一般的な関数を作るようなイメージで考えると分かりやすいです。
  // 記述方法としては、【new Function( 処理の内容 )】のように引数へ実行したい処理を文字列で記述します。
  result.value = new Function("return " + result.value)();

  // ("return " + result.value)(); の記述の謎は解けない、、
  }
}

// 計算結果を消す機能
function clearfunc() {
  if(result.value !== ""){
    document.getElementById("result").value = '';
  }
}