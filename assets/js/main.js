(function ($) {
	"use strict";

	/* 1. sticky And Scroll UP */
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$(".header-sticky").removeClass("sticky-bar");
			$("#back-top").fadeOut(500);
		} else {
			$(".header-sticky").addClass("sticky-bar");
			$("#back-top").fadeIn(500);
		}
	});

	//2. Scroll Up
	$("#back-top a").on("click", function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			800
		);
		return false;
	});

	/* 3. slick Nav */
	// mobile_menu
	$(document).ready(function () {
		$(".close-nav").click(function () {
			$(".slicknav_nav").css("display", "none");
		});
	});

	var menu = $("ul#navigation");
	if (menu.length) {
		menu.slicknav({
			prependTo: ".mobile_menu",
			closedSymbol: "+",
			openedSymbol: "-",
		});
	}
	// home slider
	$(".home-slider").owlCarousel({
		loop: true,
		autoplay: 1000,
		margin: 0,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		nav: true,
		autoplayHoverPause: true,
		items: 1,
		navText: [
			"<div class='circle-nav'><span class='ion-chevron-left'></span></div>",
			"<div class='circle-nav'><span class='ion-chevron-right'></span></div>",
		],
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					adaptiveHeight: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".nonloop-block-11").owlCarousel({
		center: false,
		items: 1,
		loop: false,
		stagePadding: 10,
		margin: 20,
		nav: true,
		navText: [
			'<span class="ion-chevron-left">',
			'<span class="ion-chevron-right">',
		],
		responsive: {
			600: {
				stagePadding: 10,
				items: 2,
			},
			800: {
				// stagePadding: 10,
				items: 3,
			},
			1000: {
				// stagePadding: 200,
				items: 3,
			},
		},
	});
	// owl carousel
	var majorCarousel = $(".js-carousel-1");
	majorCarousel.owlCarousel({
		loop: true,
		autoplay: 1000,
		stagePadding: 7,
		margin: 20,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		nav: true,
		autoplayHoverPause: true,
		items: 3,
		navText: [
			"<span class='ion-chevron-left'></span>",
			"<span class='ion-chevron-right'></span>",
		],
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					adaptiveHeight: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	// owl carousel
	var major2Carousel = $(".js-carousel-2");
	major2Carousel.owlCarousel({
		loop: true,
		autoplay: 1000,
		stagePadding: 7,
		margin: 20,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		nav: true,
		autoplayHoverPause: true,
		items: 4,
		navText: [
			"<span class='ion-chevron-left'></span>",
			"<span class='ion-chevron-right'></span>",
		],
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					adaptiveHeight: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($("#loader").length > 0) {
				$("#loader").removeClass("show");
			}
		}, 1);
	};
	loader();
	// category

	$(".filter-controls li").on("click", function () {
		$(".filter-controls li").removeClass("active");
		$(this).addClass("active");
	});
	if ($(".gallery__warp").length > 0) {
		var containerEl = document.querySelector(".gallery__warp");
		var mixer = mixitup(containerEl);
	}
	/* 4. MainSlider-1 */
	// h1-hero-active
	function mainSlider() {
		var BasicSlider = $(".slider-active");
		BasicSlider.on("init", function (e, slick) {
			var $firstAnimatingElements = $(".single-slider:first-child").find(
				"[data-animation]"
			);
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on(
			"beforeChange",
			function (e, slick, currentSlide, nextSlide) {
				var $animatingElements = $(
					'.single-slider[data-slick-index="' + nextSlide + '"]'
				).find("[data-animation]");
				doAnimations($animatingElements);
			}
		);
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 4000,
			dots: false,
			fade: true,
			arrows: false,
			prevArrow:
				'<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
			nextArrow:
				'<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
			],
		});

		function doAnimations(elements) {
			var animationEndEvents =
				"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data("delay");
				var $animationType = "animated " + $this.data("animation");
				$this.css({
					"animation-delay": $animationDelay,
					"-webkit-animation-delay": $animationDelay,
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	// product slider
	var $st = $(".pagination");
	var $slickEl = $(".center");

	$slickEl.on(
		"init reInit afterChange",
		function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$st.text(i + " of " + slick.slideCount);
		}
	);

	$slickEl.slick({
		centerMode: true,
		slidesToShow: 3,
		focusOnSelect: true,
		dots: false,
		infinite: false,
		nextArrow: $(".next"),
		prevArrow: $(".prev"),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	});

	/* 4. Testimonial Active*/
	var testimonial = $(".h1-testimonial-active");
	if (testimonial.length) {
		testimonial.slick({
			dots: true,
			infinite: true,
			speed: 1000,
			autoplay: true,
			loop: true,
			arrows: false,
			prevArrow:
				'<button type="button" class="slick-prev"><i class="ti-arrow-top-left"></i></button>',
			nextArrow:
				'<button type="button" class="slick-next"><i class="ti-arrow-top-right"></i></button>',
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						arrow: false,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
			],
		});
	}

	/* 6. Nice Selectorp  */
	var nice_Select = $("select");
	if (nice_Select.length) {
		nice_Select.niceSelect();
	}

	//7. home Blog
	$(".blog-active").slick({
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 400,
		arrows: true,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="ti-arrow-top-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="ti-arrow-top-right"></i></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});

	/* 5. Gallery Active */
	var client_list = $(".location-active");
	if (client_list.length) {
		client_list.owlCarousel({
			slidesToShow: 3,
			slidesToScroll: 1,
			loop: true,
			autoplay: true,
			speed: 3000,
			smartSpeed: 2000,
			nav: true,
			navText: [
				'<i class="ti-angle-left"></i>',
				'<i class="ti-angle-right"></i>',
			],
			dots: false,
			margin: 0,

			autoplayHoverPause: true,
			responsive: {
				0: {
					nav: false,
					items: 1,
				},
				576: {
					nav: false,
					items: 2,
				},
				768: {
					nav: true,
					items: 2,
				},
				992: {
					nav: true,
					items: 3,
				},
			},
		});
	}

	/* 8. data-background */
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

	/* 9. WOW active */
	new WOW().init();

	// 10. ---- Mailchimp js --------//
	function mailChimp() {
		$("#mc_embed_signup").find("form").ajaxChimp();
	}
	mailChimp();

	// 11 Pop Up Img
	var popUp = $(".single_gallery_part, .img-pop-up");
	if (popUp.length) {
		popUp.magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});
	}
	// 12 Pop Up Video
	var popUp = $(".popup-video");
	if (popUp.length) {
		popUp.magnificPopup({
			type: "iframe",
		});
	}

	/* 13. counterUp*/
	$(".counter").counterUp({
		delay: 10,
		time: 3000,
	});
})(jQuery);
