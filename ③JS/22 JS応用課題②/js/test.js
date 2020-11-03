var sales = ['10','3','4','12','13','15','18','18'];

for (var i=0; i<sales.length - 1; i++){
  var score = sales[i + 1] - sales[i]
  if(score > 0){
    console.log("+"+score);
  } else{
    console.log(score);
  }
}

