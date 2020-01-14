$(document).on('turbolinks:load', function(){
  $('.hamburger').on('click', function(){
    $('#wrapper').toggleClass('show');
  });
});