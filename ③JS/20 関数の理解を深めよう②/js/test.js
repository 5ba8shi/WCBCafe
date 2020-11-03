function A(){
  var min = 1;
  var max = 12;
  var number = Math.floor(Math.random() * (max + 1 - min)) + min;
  return number;
}

function B(){
  var animal = A();
  switch(animal){
    case 1:
      console.log("ネズミ");
    break;
    
    case 2:
      console.log("ウシ");
    break;
      
    case 3:
      console.log("トラ");
    break;

    case 4:
      console.log("ウサギ");
    break;
    
    case 5:
      console.log("タツ");
    break;
      
    case 6:
      console.log("ヘビ");
    break;

    case 7:
      console.log("ウマ");
    break;
    
    case 8:
      console.log("ヒツジ");
    break;
      
    case 9:
      console.log("サル");
    break;

    case 10:
      console.log("トリ");
    break;
    
    case 11:
      console.log("イヌ");
    break;
      
    case 12:
      console.log("イノシシ");
    break;
  }
}

B();