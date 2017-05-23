$(document).ready(function(){

	$('.btn-try').click(function(e){
		e.preventDefault();
		var destination = $('.part-number-6').offset().top;
		$('html, body').animate({scrollTop: destination}, 1000);
        return false;
	});

	var win_h = $(window).height(),
		vis_img_r = $('.part-number-1').offset().top + $('.part-number-1').height() - win_h,
		vis_img_l = $('.part-number-3').offset().top + $('.part-number-1').height() - win_h;

	window.onscroll = function() {
  		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  		console.log(scrolled);
  		if(scrolled >= vis_img_r){
  			$('.visual-image-r').animate({'opacity': '.8'}, 1000);
  		}
  		if(scrolled >= vis_img_l){
  			$('.visual-image-l').animate({'opacity': '.8'}, 1000);
  		}
	}

});