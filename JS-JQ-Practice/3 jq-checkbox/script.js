$(function(){
  $('form').on('submit', function(e){
    let output = '';
    let checkboxes = $(this).find('input[type = "checkbox"]');
    checkboxes.each(function(i, checkbox){
      checkbox = $(checkboxes[i]);
      if(checkbox.prop('checked')) {
        output += checkbox.attr('value') + '\n';
      }
    });    
    e.preventDefault();
    alert('あなたが選んだ果物は:\n' + output);
  });
});