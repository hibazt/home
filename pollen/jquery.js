$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) { // Adjust the scroll threshold as needed
        $('body').addClass('dark-bg');
      } else {
        $('body').removeClass('dark-bg');
      }
    });
  });
  