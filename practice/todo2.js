let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word){
    let item = $('<li class="list">').append(word);
    list.append(item);
  };

  function editElement(element){
    let result = "^" + element;
    return result;
  };

  $('#submit').on("click", function(){
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInput = inputs.map(editElement);
    let reg = RegExp(newInput.join("|"));

    $.each(fruits, function(i, fruit){
      if (fruit.match(reg)){
        appendList(fruit);
      }
    });

    if ($(".list").length === 0){
      appendList("一致する果物はありませんでした。");
    };

  });
});



for(var i = cards.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = cards[i];
  cards[i] = cards[r];
  cards[r] = tmp;
}

for(var i = cards.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = cards[i];
  cards[i] = cards[r];
  cards[r] = tmp;
}

function shuffle() {
  var last = cardGroup.childNodes.length - 1;

  for(var i = last; i>0; i--){
    console.log(i);

    var card1 = cardGroup.childNodes[i];

    var r = getRandom(0, i);

    var card2 = cardGroup.childNodes[r];

    swap(card1, card2);
  }
}

const array = [0, 1, 2, 3, 4];
let r;
let temp;
for(let i = array.length - 1; i >= 0; i--){
  r = Math.floor(Math.random()*(i + 1));
  temp = array[i];
  array[i] = array[r];
  array[r] = temp;
};

console.log(array);


const randIntGEZeroLT = n =>
  Math.floor( Math.random() * n )

const shuffle = xs =>{
  const array = [...xs]
  for(let i = array.length - 1; i>=0; i--){
    const r = randIntGEZeroLT(i + 1);
    [ array[i], array[r]] = [ array[r], array[i] ]
  };
  return array
};

const randIntGEZeroLT = n =>
  Math.floor( Math.random() * n )

const shuffle = xs =>{
  const array = [...xs]
  for(let i of [...array.keys()].reverse()){
    const r = randIntGEZeroLT(i + 1);
    [ array[i], array[r]] = [array[r], array[i]]
  }
  return array
}

const randIntGEZeroLT = n =>
  Math.floor( Math.random() * n)

const init = xs => [...xs]
const update = (acc, _, i) =>{
  const r = randIntGEZeroLT(i + 1);
  [ acc[i], acc[r] ] = [ acc[r], acc[i] ]
  return acc
}

const shuffle = xs =>
  xs.