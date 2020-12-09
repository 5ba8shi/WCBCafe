async function callApi(){
  const res = await fetch("https://jsondata.okiba.me/v1/json/0hxL6200611030517");

  const jobs = await res.json();

  const Filter1 = jobs.filter(job1 => {
    return job1.grpId === 2;
  });


  Filter1.sort(function(a, b){
    a = a.jobName.toString().toLowerCase();
    b = b.jobName.toString().toLowerCase();
    if(a < b){
      return -1;
    } else if(a > b) {
      return 1;
    }
    return 0;
  });

  const Filter2 = jobs.filter(job => {
    return job.grpId === 1;
  });

  Filter2.sort(function(a, b){
    a = a.jobName.toString().toLowerCase();
    b = b.jobName.toString().toLowerCase();
    if(a < b){
      return -1;
    }else if(a > b){
      return 1;
    }
    return 0;
  });

  const result = Filter1.concat(Filter2);

  console.log(result);
};

callApi();

for(var i = cards.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));

  var tmp = cards[i];

  cards[i] = cards[r];

  cards[r] = tmp;
}

for(let i = 1; i <= 4; i++){
  let div = document.createElement("div");
  div.id = 'row' + i;
  document.getElementById('allCards').appendChild(div);

  let a = 1;

  let b = 1;

  for(let i = 1; i <= 52; i++){
    let div = document.createElement("div");
    div.id = i;
    div.className = "cards";

    let img = document.createElement('img');
    img.src = '../img/card_back.png';

    div.appendChild(img);

    document.getElementById('row' + a).appendChild(div);

    if(b === 13){
      a++;
      let b = 0;
    };

    b++;
  }
}

let cardNodes = document.querySelectorAll('.card');

let pickedSingle;

let pickedArray = [];

let currentCard;

let prevCard;


cardNodes.forEach((card) => {
  
  card.addEventListener('click', () => {
    if(pickedArray.length === 2){
      currentCard.firstChild.src = '../img/card_back.png';
      prevCard.firstChild.src = '../img/card_back.png';

      pickedArray.length = 0;
    }

    if(pickedArray.length < 2){
      currentCard = card;

      pickedSingle = cards[card.id.substr(0) - 1];

      card.firstChild.src = '../img/' + pickedSingle + '.jpg';

      if(pickedArray[0] !== pickedSingle){
        pickedArray.push(pickedSingle);
      };
  })
})
