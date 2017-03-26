$(document).ready(function () {

// hide stuff
  $('#summary').hide();
  $('#aboutme').hide();
  $('#history').hide();
  $('#skills').hide();
  $('#contact').hide();
  $('.namecard2').hide();
  $('.skillschart').hide();

// dim variables
  var namecard = $('.namecard');
  var summary = $('#summary');
  var others = $('.others');
  var namecard2 = $('.namecard2');
  var aboutme = $('#aboutme');
  var skills = $('#skills');

// namecard on click function
  namecard.click(function  () {
     $('.namecard').hide();
     $('.namecard2').show();
  } );

// click here on click function
  namecard2.click(function  () {
     namecard2.toggleClass('flyawaynamecard2');
     $('#summary').show();
     $('#history').show();
     $('#skills').show();
     $('#contact').show();
     others.toggleClass('moveothers');
  } );

// Summary on click function
    summary.click(function  () {
       $('#aboutme').show();
       aboutme.toggleClass('moveaboutme');
    } );

//skills chart animate
    skills.click(function  () {
    $('.skillschart').show();
    $('.skillbar').each(function(){
    	$(this).find('.skillbar-bar').animate({
    		width:$(this).attr('data-percent')
    		},6000);
    	});
    	});

} )
