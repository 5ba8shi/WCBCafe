// onBlur
function blurfunc(){
  console.log("ページやフォーム要素からフォーカスが外 れた時に発生");
}

// onFocus
function focusfunc(){
  console.log("ページやフォーム要素にフォーカスが当 たった時に発生");
}

// onChange
function changefunc() {
  console.log("フォーム要素の選択、入力内容が変更された時に発生");
}

// onSelect
function selectfunc(){
  console.log("テキストが選択された時に発生");
}

// onSubmit
function submitfunc(){
  event.preventDefault();
  console.log("フォームを送信しようとした時に発生");
}

// onReset
function resetfunc(){
  console.log("フォームがリセットされた時に発生");
}

// onLoad
function loadfunc() {
  console.log("ページや画像の読み込みが完了した時に発生");
}
window.onload = loadfunc;


// onClick
function clickfunc(){
  console.log("要素やリンクをクリックした時に発生");
}

// onDblClick
function dblclickfunc(){
  console.log("要素をダブルクリックした時に発生");
}

// onKeyUp
function keyupfunc(){
  console.log("押していたキーをあげた時に発生");
}

// onKeyDown
function keydownfunc(){
  console.log("キーを押した時に発生");
}

// onMouseOut
function mouseoutfunc(){
  console.log("マウスが離れた時に発生");
}

// onMouseOver
function mouseoverfunc(){
  console.log("マウス乗った時に発生");  
}

// onMouseUp
function mouseupfunc(){
  console.log("クリックしたマウスを上げた時に発生");
}

// onMouseDown
function mousedownfunc(){
  console.log("マウスでクリックした時に発生");
}

// onMouseMove
function mousemovefunc(){
  console.log("マウスを動かしている時に発生");
}

