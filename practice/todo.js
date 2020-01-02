$(function() {
  $('.js-form').on('submit', function(e){
    e.preventDefault();
    let todo = $('.js-form__text-field').val();
    console.log(todo);
  });
});