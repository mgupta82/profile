$(document).ready(function(){

    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        nav.slideToggle(200);
    })

});


function myFunction(x) {
    x.classList.toggle("change");
  }