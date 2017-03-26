$(document).ready(function () {

// hide stuff
  $('.main').hide();
  $('#moreinfo').hide();
  $('#aboutme').hide();
  $('#history').hide();
  $('#skills').hide();

// dim variables
  var namecard = $('.namecard');
  var main = $('.main');
  var moreinfo = $('#moreinfo');
  var others = $('.others');

// Namecard on click function
  namecard.click(function  () {
     namecard.toggleClass('movenamecard');

     $('.main').show();
     main.toggleClass('movemain');

     $('#moreinfo').show();
     moreinfo.toggleClass('movemoreinfo');
  } );

// More on click function
  moreinfo.click(function  () {
     moreinfo.toggleClass('flyawaymoreinfo');
     $('#aboutme').show();
     $('#history').show();
     $('#skills').show();
     others.toggleClass('moveothers');
  } );

} )
