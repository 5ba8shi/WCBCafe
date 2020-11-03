// プレイヤの手の画像をクリックした時に呼ばれる関数
function onClickPlayerIcon(self){
  // すでにselectのクラス値が与えられているHTMLエレメントのselectedを消去する。
  var selects = document.getElementsByClassName("selected");
  selects = Array.from(selects);
  selects.forEach(function(){
    document.getElementsByClassName(this).classList.toggle("selected");
  });
  var selfs = document.getElementsByClassName(self);
  selfs = Array.from(selfs);
  selfs.classList.toggle("selected");
  // クリックされたHTMLエレメントにselectedのクラス値を与える

  // 乱数で、0,1,2のどれかを作成する。
  var evalue = Math.floor(Math.random()*3.0);
  // 相手の手の１つ前の画像を削除する。
  document.getElementById("enemy").removeChild();
  // 相手の手を表示する。
  document.getElementById("enemyPanel").appendChild("<img id='enemy' src='../images/janken"+evalue+".png' />");

  // 自分の手として選択されている画像のファイル名を取得する。
  var pfilename = document.getElementsByClassName("selected").attr("src");

  // 画像のファイル名から正規表現を用いて、数字の部分だけを抽出する。
  var pvalue = pfilename.match(/\d/)[0];

  // 数字の引き算によって勝敗を判別する。以下の計算式によって、引き分けは０、勝ちは１，負けは２の数字がresult変数に入る。
  var result = (pvalue+3-evalue)%3;

  // HTMLのresultという名前のIDのをもつHTMLエレメントに、文字を表示する。
  // 文字は配列になっていて、result変数の中の数字に該当する文字が表示される。例えば、result-1の場合、2番目の文字である"勝ち"が表示される。
  document.getElementById("result").textContent(["引き分け","勝ち","負け"][result]);
}