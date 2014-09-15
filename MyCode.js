$(document).ready(function() {
	$(".menu li").hover(function() {

		$(this).children('div').stop(false, true).fadeIn(300);

	}, function() {

		$(this).children('div').stop(false, true).fadeOut(300);

	});
$( ".city p" ).click(function() {
	if ($('#more_shops').is(":hidden")) 
	{
		$( "#more_shops" ).slideDown( 'middle');
		$(".city p").css({  position:"absolute", bottom:"0px" });
		$(".all_shops ").css({  height:"180px" });
		$('.city p').css({background:'url(img/arrow_sprite.png) 0px -6px no-repeat'});
	}
	else
	{

		$( "#more_shops").slideUp('fast');
		$(".all_shops ").animate({height: '40px'});
		$('.city p').css({background:'url(img/arrow_sprite.png) 0px 7px no-repeat'});
	}

  return false;
});
	/////////////////
$( ".new_products li a" ).click(function() {
      var isOpen = $(this).closest('.for_new_products').find('.open');
 if (isOpen && isOpen.is(":hidden")) 
 {
  isOpen.slideDown( 'slow');
 } else {
  isOpen.slideUp('slow');
 }

  return false;
});
/////////////////
	$( '.close1').click(function() {
      $(this).closest('li').css({display:'none'});

  return false;
});
////////////////
$(".close").click(function(){
		$(".password").css({display: 'none'});
	});
$("#log").hover(function(){
	$(".password").css({display:"inherit"})
});
$("#your_cart").hover(function(){
	$(".goods").css({display:"inherit"});
	});
	$(".goods").mouseleave(function(){
		$(".goods").css({display:"none"});
});
////////////////
 $("#flexiselDemo1").flexisel()({
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });
/////////////////
});