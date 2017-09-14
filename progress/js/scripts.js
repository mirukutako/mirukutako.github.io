$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['first', 'video', 'catering', 'mobile-bar', 'show-kitchen', 'occasion', 'express', 'place', 'contacts' ],
		menu: '#main-menu',
		navigation: true,
	});

	var swiper_tab_photo = $('.tab-photo-slider');
	var tab_photo_swiper = undefined;

	swiper_tab_photo.each(function(){
		tab_photo_swiper = new Swiper(this,{
			spaceBetween: 30,
			nextButton: $(this).parent().find('.next-tab-photo'),
			prevButton: $(this).parent().find('.prev-tab-photo'),
			pagination: $(this).parent().find('.pagination-tab-photo'),
			paginationClickable: true,
			observer: true,
			observeParents: true,
			centeredSlides: true,
			slidesPerView: 4,
			simulateTouch: false,
			breakpoints: {
				991:{
					slidesPerView: 1,
					simulateTouch: true
				}
			}
		});
	});

	$('.scroll-to-body').click(function(e){
		e.preventDefault();
		var destination = $('#content-page-body').offset().top;
		$('html, body').animate({scrollTop: destination}, 1000);
        return false;
	});

var active_tab_menu = $('.page-tabs__link.active').text();
$('.btn-show-tab-menu').text(active_tab_menu);

 var win_w = $(window).width();
 if (win_w < 991){
 	$('.btn-show-tab-menu').click(function(){
 		$(this).toggleClass('tabs-menu-open');
 		$('.page-tabs__menu').slideToggle().toggleClass('visible__menu');
 	});
 }
	(function($) {
		$(function() {
			$('ul.page-tabs__menu').on('click', ':not(.active)', function() {
				$(this).addClass('active').siblings().removeClass('active');
				sychronize();
				if (win_w < 991){
					var active_tab_menu = $('.page-tabs__link.active').text();
 					$('.btn-show-tab-menu').text(active_tab_menu);
					$('.page-tabs__menu').slideToggle().toggleClass('visible__menu');
					$('.btn-show-tab-menu').removeClass('tabs-menu-open');
					console.log('chilchirik');
				}
				$(this).closest('div.page-tabs').find('div.page-tabs__item').fadeOut(300).delay(310).eq($(this).index()).fadeIn(300).addClass('active-tab').siblings().removeClass('active-tab');
			});
		});
	})(jQuery);


	var menuEls = $('.page-tabs__menu li');
	var indicator = $('.indicator');
	sychronize();
	/* synchrones */
	function sychronize() {
		var indicatorL = 0;
		var wrapPad = parseInt($('.page-tabs__menu').width());
		var linkP_w = 0;
		menuEls.each(function() {
			var linkP = $(this);
			var active = 0;
			if(!linkP.hasClass('active')){
				indicatorL=indicatorL+linkP.outerWidth();
				console.log(indicatorL);
			} else {
				linkP_w = linkP.outerWidth();
				active++;
			}
			if(active){
				return false;
			}
		});

		indicator.css({'left':indicatorL, 'width':linkP_w});
	}


});
$(document).ready(function() {
	$('.footer-language__item').click(function(e){
		e.preventDefault();
		var t = $(this);
		if(t.hasClass('selected')){

		} else {
			t.addClass('selected').siblings().removeClass('selected');
		}
	});
});
$(document).ready(function() {
	$('.btn-screen-menu').click(function() {
		$('.btn-screen-menu').toggleClass('hidden-screen');
		$('.screen-menu').slideToggle(300).toggleClass('show-screen-menu');
		if($('.screen-menu').hasClass('show-screen-menu')){
			if($('#fullpage').hasClass('fullpage-wrapper')){
				$.fn.fullpage.setAllowScrolling(false);
			}
		} else {
			if($('#fullpage').hasClass('fullpage-wrapper')){
				$.fn.fullpage.setAllowScrolling(true);
			}
		}
	});
});
$(document).ready(function() {
	var slider_block_outer = $('.place-swiper-container_outer');
	var slider_block_inner = $('.place-swiper-container_inner');
	var outer_swiper = undefined;
	var inner_swiper = undefined;

	$('.show-more-place').click(function(){
		$('.more-place-block').slideToggle(300).toggleClass('visible');
		if($('.more-place-block').hasClass('visible')){
			$.fn.fullpage.setAllowScrolling(false);
			setTimeout(function(){
				if(outer_swiper == undefined){
					slider_block_outer.each(function(){
						outer_swiper = new Swiper(this , {
							paginationClickable: true,
							spaceBetween: 30,
							simulateTouch: false,
							nextButton: $(this).parent().find('.next_outer'),
							prevButton: $(this).parent().find('.prev_outer')
					    });
					});
					outer_swiper = 1;
				}
				if(inner_swiper == undefined){
					slider_block_inner.each(function(){
						inner_swiper = new Swiper(this , {
							direction: 'vertical',
							simulateTouch: false,
							spaceBetween: 30,
							nextButton: $(this).parent().find('.next_inner'),
							prevButton: $(this).parent().find('.prev_inner'),
							pagination: $(this).parent().find('.swiper-pagination'),
							paginationClickable: true,
					    });
					});
					inner_swiper = 1;
				}
			}, 350);
		} else {
			$.fn.fullpage.setAllowScrolling(true);
			var outer_swiper = undefined;
			var inner_swiper = undefined;
		}
	});

	$('.more-place-close').click(function(){
		if($('.more-place-block').hasClass('visible')){
			$.fn.fullpage.setAllowScrolling(true);
			var outer_swiper = undefined;
			var inner_swiper = undefined;
			$('.more-place-block').slideToggle(300).toggleClass('visible');
		} else {

		}
	})

});
$(document).ready(function() {

	var win_w = $(window).width();

	if(win_w <= 991){
		var swiper_team = new Swiper('.about-us-team-slider',{
			direction: 'horizontal',
			spaceBetween: 30,
			nextButton: $('.next-team'),
			prevButton: $('.prev-team'),
			pagination: $('.pagination-team'),
			paginationClickable: true,
			slidesPerView: 1,
			centeredSlides: true,
			simulateTouch: false,
		});
	} else {
		var swiper_team = new Swiper('.about-us-team-slider',{
			direction: 'vertical',
			spaceBetween: 30,
			nextButton: $('.next-team'),
			prevButton: $('.prev-team'),
			pagination: $('.pagination-team'),
			paginationClickable: true,
			slidesPerView: 3,
			centeredSlides: true,
			simulateTouch: false,
		});
	}

	var swiper_cookware = new Swiper('.about-us-cookware-slider',{
		spaceBetween: 30,
		nextButton: $('.next-cookware'),
		prevButton: $('.prev-cookware'),
		pagination: $('.pagination-cookware'),
		paginationClickable: true,
	});

	var swiper_furniture = new Swiper('.about-us-furniture-slider',{
		spaceBetween: 30,
		nextButton: $('.next-furniture'),
		prevButton: $('.prev-furniture'),
		pagination: $('.pagination-furniture'),
		paginationClickable: true,
	});

	var swiper_uniform = new Swiper('.about-us-uniform-slider',{
		spaceBetween: 30,
		nextButton: $('.next-uniform'),
		prevButton: $('.prev-uniform'),
		pagination: $('.pagination-uniform'),
		paginationClickable: true,
		slidesPerView: 3,
		breakpoints: {
			991:{
				slidesPerView: 1
			}
		}
	});

});




$(document).ready(function() {
	
	var swiper_express_block = $('.express-slider');
	var express_swiper = undefined;

	swiper_express_block.each(function(){
		place_swiper = new Swiper(this,{
			spaceBetween: 30,
			nextButton: $(this).parent().find('.next-express'),
			prevButton: $(this).parent().find('.prev-express'),
			pagination: $(this).parent().find('.pagination-express'),
			paginationClickable: true,
			slidesPerView: 2,
			slidesPerColumn: 3,
			observer: true,
			observeParents: true,
			breakpoints: {
				991:{
					slidesPerView: 1,
					slidesPerColumn: 1,
				}
			}
		});
	});

	//ввод в поле input только цифр
	$('input.count-field').keyup(function(){
		var nondigs = /[^\d]/g,
			count = $(this).val(),
			price = +$(this).attr('data-price');
		$(this).val(count.replace(nondigs,''));
		$(this).parents('.count-wrap').attr('data-total', +count * +price);
		totaly_price();
	});

	// проверка поля input на пустоту
	$('input.count-field').blur(function(){
		if($(this).val() == ''){
			$(this).val(0);
		}
	});

	//увелечение значния через  + -
	$('.count-btn').click(function(e){
		e.preventDefault();
		var t = $(this),
			input_field = t.parents('.count-wrap').find('.count-field'),
			count = +input_field.val(),
			price = +input_field.attr('data-price');

		if(t.hasClass('count-btn_minus')){
			if(count <= 0){
				//
			} else {
				input_field.val(--count);
				t.parents('.count-wrap').attr('data-total', count*price);
				totaly_price();
			}
		}
		else if(t.hasClass('count-btn_plus')){
			input_field.val(++count);
			t.parents('.count-wrap').attr('data-total', count*price);
			totaly_price();
		}
	});

	function totaly_price(){
		var p = 0;

		$('.count-wrap').each(function(){
			var totaly = +$(this).attr('data-total');
			return p += totaly;
		});
		$('.total-price span').text(p);
	}
	
	$('.scroll-to-order').click(function(e){
		e.preventDefault();
		var order_block = $('.ordering-block'),
			destination = order_block.offset().top;
		if(destination>100){
			$('html, body').animate({scrollTop: destination}, 1000);
			return false;
		} else {
			order_block.fadeIn();
			$('body').css('overflow', 'hidden');
		}
	});

// datetimepicker plugin
// https://xdsoft.net/jqplugins/datetimepicker/
	$('#datepicker').datetimepicker({
		lang:'ru',
		format:'d.m.Y',
		timepicker:false,
		theme:'dark'
	});

	$('#timepicker').datetimepicker({
		datepicker:false,
		format:'H:i',
		lang:'ru',
		theme:'dark',
	});

// input mask phone plugin
//http://digitalbush.com/projects/masked-input-plugin/
	jQuery(function($){
		$("#phonemask").mask("+375(99)999-99-99");
	});

	$('.order-close').click(function(e){
		e.preventDefault();
		$(this).parents('.ordering-block').fadeOut();
		$('body').attr('style', '');
	});
});

$(document).ready(function() {
	
	var swiper_place_page = $('.place-page-slider');
	var place_swiper = undefined;

	swiper_place_page.each(function(){
		place_swiper = new Swiper(this,{
			spaceBetween: 30,
			nextButton: $(this).parent().find('.next-place-page'),
			prevButton: $(this).parent().find('.prev-place-page'),
			pagination: $(this).parent().find('.pagination-place-page'),
			paginationClickable: true,
			observer: true,
			observeParents: true,
		});
	});

});








/*!** PLACE-BLOCK ***/
$(document).ready(function() {
	$('.grid').masonry({
		itemSelector: '.grid__item',
		columnWidth: '.grid__item-size'
	});
});
/*!** end PLACE-BLOCK ***/

