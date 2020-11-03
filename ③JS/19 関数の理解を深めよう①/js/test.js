function change(){
  switch(countries[i]){
    case '日本':
      return "東京";
    break;

    case 'アメリカ':
      return "ワシントンD.C";
    break;
      
    case 'イギリス':
      return "ロンドン";
    break;
  }
}

var countries =['日本','アメリカ','イギリス'];

for (var i=0; i<countries.length; i++){
  console.log(change(countries));
}




