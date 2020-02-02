let fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  let list = $("#list");

  function appendList(word) {
    let item = $('<li class="list').append(word);
    list.apped(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result; 
  }

  $("#submit").on("click", function(){
    let input = $("#keyword").val();
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    let reg = RegExp(newInputs.join("|"));

    $(".list").remove();

    $.each(fruits, function(i, fruit){
      if (fruit.match(reg)){
        appendList(fruit);
      }
    });
  })



})