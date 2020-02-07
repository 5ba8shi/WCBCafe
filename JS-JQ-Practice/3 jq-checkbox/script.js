$(function(e){
  $("form").on(function(e){
    let output = '';
    let checkboxes = $(this).find
    
    e.preventDefault();
    alert('あなたが選んだ果物は:\n' + output);
  });

});