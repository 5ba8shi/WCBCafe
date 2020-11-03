var point = 60;

if(point % 3 === 0 && point % 5 === 0){
  console.log("3と5の倍数");
} else if(point % 3 === 0){
  console.log("3の倍数");
} else if(point % 5 === 0){
  console.log("5の倍数");
}　else {
  console.log(point);
}