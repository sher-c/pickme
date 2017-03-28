$(document).ready(function () {

// hide stuff
  $('#summary').hide();
  $('.me').hide();
  $('#history').hide();
  $('#skills').hide();
  $('#contact').hide();
  $('.namecard2').hide();
  $('.skillschart').hide();
  $('.background').hide();
  $('.contactme').hide();

// dim variables
  var namecard = $('.namecard');
  var summary = $('#summary');
  var others = $('.others');
  var namecard2 = $('.namecard2');
  var me = $('.me');
  var skills = $('#skills');
  var skillschart =$('.skillschart');
  var history =$('#history');
  var background =$('.background')
  var contact =$('#contact')
  var contactme =$('.contactme')

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
      $('.me').show();
       $('.skillschart').hide();
       $('.background').hide();
       $('.contactme').hide();

       me.toggleClass('moveme');
    } );

//skills on click chart animate
    skills.click(function  () {
    $('.skillschart').show();
    $('.me').hide();
    $('.background').hide();
    $('.contactme').hide();

    skillschart.toggleClass('moveskillschart');

    $('.skillbar').each(function(){
    	$(this).find('.skillbar-bar').animate({
    		width:$(this).attr('data-percent')
    		},6000);
    	});
    	});

// history on click function
    history.click(function  () {
      $('.background').show();
      $('.me').hide();
      $('.skillschart').hide();
      $('.contactme').hide();
      background.toggleClass('movebackground');
      } );

// contactme on click function
      contact.click(function  () {
      $('.contactme').show();
      $('.me').hide();
      $('.skillschart').hide();
      $('.background').hide();
      contactme.toggleClass('movecontactme');
      } );



} )
