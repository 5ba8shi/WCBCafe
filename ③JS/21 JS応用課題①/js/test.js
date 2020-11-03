var list = [];

var a = 3;
var b = 2;
var c = 4;
var d = 100;
var e = 200;
var f = 9;
var g = 0.1;

list.push(a);
list.push(b);
list.push(c);
list.push(d);
list.push(e);
list.push(f);
list.push(g);

list.sort(function(list,b){
  if( list < b ) return -1;
  if( list > b ) return 1;
  return 0;
});

console.log("5番目の値は"+list[4]+"です。");

