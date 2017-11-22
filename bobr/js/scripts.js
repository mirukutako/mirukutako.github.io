$(document).ready(function() {
	$(function() {
		$('img').lazy();
	});

	var last_comment = new Masonry('.last-comment',{
		// options
		itemSelector: '.last-comment__item',
		columnWidth: '.last-comment__item',
		percentPosition: true,
		gutter: '.last-comment__gutter',
		containerStyle: null
	});

	var last_catalog = new Masonry('.last-change-catalog',{
		// options
		itemSelector: '.last-change-catalog__item',
		columnWidth: '.last-change-catalog__item',
		percentPosition: true,
		gutter: '.last-change-catalog__gutter',
		containerStyle: null
	});

	$('.advertising-block__title').click(function(){
		$(this).toggleClass('advertising-block__title_close').parents('.advertising-block__wrap').next('.advertising-item-wrap').slideToggle();
	});

	$('.our-resources__title').click(function(){
		$(this).toggleClass('our-resources__title_close').next('.our-resources__wrap').slideToggle();
	});

	$('.reclame-btn').click(function(e){
		e.preventDefault();
		$(this).toggleClass('reclame-btn_close').next('.reclame-wrap').slideToggle();
	});

	$('.videogallery__item').click(function(e){
		e.preventDefault();
		var id_video = $(this).attr('data-video');
		$('.videogallery-popup').fadeIn().find('iframe').attr('src', '//www.youtube.com/embed/' + id_video + '?rel=0&autoplay=1');
		$('body').addClass('overflow');
	});

	$('.videogallery-popup__close').click(function(e){
		e.preventDefault();
		$('.videogallery-popup').fadeOut().find('iframe').attr('src', 'not.found/404');
		$('body').removeClass('overflow');
	});

	var news_swiper = new Swiper('.news-slider', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		slidesPerGroup: 3,
		spaceBetween: 30,
		nextButton: '.news-slider-next',
		prevButton: '.news-slider-prev',
		breakpoints: {
			950: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerGroup: 2,
			},
			769: {
				slidesPerView: 1,
				slidesPerColumn: 2,
				slidesPerGroup: 1,
			},
			650:{
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerGroup: 1,
			}
		}
	});

	var affiche_swiper = new Swiper('.affiche-slider', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		slidesPerGroup: 3,
		spaceBetween: 30,
		nextButton: '.affiche-slider-next',
		prevButton: '.affiche-slider-prev',
		breakpoints: {
			950: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerGroup: 2,
			},
			769: {
				slidesPerView: 1,
				slidesPerColumn: 2,
				slidesPerGroup: 1,
			},
			650:{
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerGroup: 1,
			}
		}
	});

	var photogallery_swiper = new Swiper('.photogallery-slider', {
		slidesPerView: 3,
		slidesPerColumn: 1,
		spaceBetween: 30,
		slidesPerGroup: 3,
		loop: true,
		nextButton: '.photogallery-slider-next',
		prevButton: '.photogallery-slider-prev',
		breakpoints: {
			950: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			650:{
				slidesPerView: 1,
				slidesPerGroup: 1,
			}
		}
	});

	var videogallery = new Swiper('.videogallery-slider', {
		slidesPerView: 3,
		slidesPerColumn: 1,
		spaceBetween: 30,
		slidesPerGroup: 3,
		loop: true,
		nextButton: '.videogallery-slider-next',
		prevButton: '.videogallery-slider-prev',
		breakpoints: {
			950: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			650:{
				slidesPerView: 1,
				slidesPerGroup: 1,
			}
		}
	});

	var navigator = new Swiper('.navigator-slider', {
		slidesPerView: 17,
		slidesPerColumn: 1,
		spaceBetween: 10,
		nextButton: '.navigator-slider-next',
		prevButton: '.navigator-slider-prev',
		breakpoints: {
			1200: {
				slidesPerView: 10,
				spaceBetween: 40,
			},
			950:{
				slidesPerView: 8,
				spaceBetween: 20,
			},
			650:{
				slidesPerView: 6,
				spaceBetween: 20,
			},
			450:{
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});

	$('.voting__answer').click(function(e){
		e.preventDefault();
		$('.voting__answer').addClass('voting__answer_no-click');
		$('.voting__percent').fadeIn();
	});

	
	var	window_width = $(window).width();

	var main_menu_height, main_menu_offset;

	function refreshVar(){
		main_menu_offset = $('.main-menu').offset().top;
		main_menu_height = $('.main-menu').outerHeight(true);
	}
	refreshVar();
	$('<div class="clone-nav"></div>').insertBefore('.main-menu').css('height', main_menu_height).hide();

	$(function(){
		$(window).scroll(function() {
			if ($(this).scrollTop() >= main_menu_offset) {
				$('.main-menu').addClass('main-menu_fixed');
				$('.clone-nav').show();
			} else {
				$('.main-menu').removeClass('main-menu_fixed');
				$('.clone-nav').hide();
			}

			if($(this).scrollTop() >= 350){
				$('.button-up').fadeIn(300);
			} else {
				$('.button-up').fadeOut(300);
			}

		});
	});

	$('.show-user-menu').click(function(e){
		e.preventDefault();
		$('body').addClass('visible-user-popup');
		$('.menu-bg-wrapper').fadeIn();
	});

	$('.show-mobile-menu').click(function(e){
		e.preventDefault();
		$('body').addClass('visible-mobile-menu');
		$('.menu-bg-wrapper').fadeIn();
	});

	$('.show-section').click(function(e){
		e.preventDefault();
		$(this).closest('.section-menu__header').next('.section-menu__wrap').slideToggle();
	});
	
	$('.next-menu-layer').click(function(e){
		e.preventDefault();
		var layer_class = $(this).data('layer'),
			parent_lvl = +$(this).closest('.mobile-menu__nav').data('level');
		if(parent_lvl == 1){
			$(this).closest('.mobile-menu__nav[data-level="'+ parent_lvl +'"]').slideUp(300);
			$(layer_class).delay(350).slideDown(300);
		} else {
			var prev_parent_lvl = parent_lvl-1;
			$(this).closest('.mobile-menu__nav[data-level="'+ parent_lvl +'"]').slideUp(300);
			$('.mobile-menu__nav[data-level="'+ prev_parent_lvl +'"]').delay(350).slideDown(300);
		}
	});

	$('.close-popup').click(function(){
		$('body').attr('class', '');
		$('.menu-bg-wrapper').fadeOut();
	});

	$('.button-up').click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000);
		return false;
	});

	(function($) {
		$(function() {
			$('ul.page-tabs__menu').on('click', ':not(.active)', function() {
				$(this).addClass('active').siblings().removeClass('active');
				$(this).closest('div.page-tabs').find('div.page-tabs__item').slideUp(500).delay(510).eq($(this).index()).slideDown(500).addClass('active-tab').siblings().removeClass('active-tab');
			});
		});
	})(jQuery);

});