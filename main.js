if (typeof jQuery != 'undefined') {

	"use strict";

	(function($){

		// Add smooth scrolling on all links inside the navbar
		$(".bs-2absolute-top a").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {

			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});

			} // End if

		});

		var winThyme, scrollTopY,
			bs0abs, bs1abs, bs2abs,
			bs0absH, bs1absH, bs2absH,
			bsMaxAbsH,
			aNaviga, animaHas,
			dNaviga, dnimaHas, 
			logolite, logodark,
			lrgScreen, smlScreen,
			crslH, midNavUp, midNavUp1, midNavUp2, midNavUp3;

		winThyme = $(window);

		winThyme.on('load resize scroll', function() {
			scrollTopY = $(document).scrollTop();
			bs0abs = $('.bs-0absolute-top');
			bs1abs = $('.bs-1absolute-top');
			bs2abs = $('.bs-2absolute-top');
			bs0absH = bs0abs.height();
			bs1absH = bs1abs.height();
			bs2absH = bs2abs.height();
			bsMaxAbsH = bs0absH + bs1absH;
			aNaviga = 'animate-naviga';
			dNaviga = 'deanimate-naviga';
			animaHas = bs1abs.hasClass(aNaviga);
			dnimaHas = bs1abs.hasClass(dNaviga);
			logolite = $('.logo-swap__lite');
			logodark = $('.logo-swap__dark');
			lrgScreen = Modernizr.mq('(min-width: 768px)');
			smlScreen = Modernizr.mq('(max-width: 767px)');
			crslH = $('#myCarousel').height();
			midNavUp = bs0absH + crslH - (bs1absH*2);
			midNavUp1 = bs0absH + crslH - bs1absH;
			midNavUp2 = bs0absH + crslH + bs1absH;
			midNavUp3 = bs0absH + crslH;
			if (lrgScreen) {
				bs1abs.affix({
					offset: {
						top: function() { return bs0absH; }
					}
				});
				bs2abs.affix({
					offset: {
						top: function() { return midNavUp; }
					}
				});
				if ((scrollTopY>=midNavUp1)) {
					bs2abs.css({
						"top" : 0
					});
				}
				if ((scrollTopY>=midNavUp)&&(animaHas)) {
					if (bs1abs.css('top')!=-bs1absH) {
						bs1abs.stop().animate({
							top: -bs1absH
						}, 30, 'swing');
					}
				} else if (scrollTopY<midNavUp&&scrollTopY>bs0absH&&(animaHas)) {
					bs1abs.stop().animate({
						top: 0
					}, 0, 'swing');
				} else if ((scrollTopY<bs0absH)&&(bs1abs.css('top')==='0px')||(scrollTopY===0)) {
					bs1abs.css({
						"top" : ""
					});
				} else {
					bs1abs.css({
						"top" : ""
					});
				}

				if (scrollTopY>=bs0absH) {
					if (!animaHas) {
						bs1abs.removeClass(dNaviga);
						bs1abs.addClass(aNaviga);
						logolite.animate({
							opacity: 0
						}, 100, 'swing', function() {
							logolite.css({ "display" : "none" });
							logodark.css({ "display" : "block" });
							logodark.animate({
								opacity: 1
							}, 100, 'swing');
						});
					}
				} else {
					if (animaHas) {
						bs1abs.removeClass(aNaviga);
						bs1abs.addClass(dNaviga);
						logodark.animate({
							opacity: 0
						}, 100, 'swing', function() {
							logodark.css({ "display" : "none" });
							logolite.css({ "display" : "block" });
							logolite.animate({
								opacity: 1
							}, 100, 'swing');
						});
					}
				}
			}

			if (smlScreen) {
				bs1abs.affix({
					offset: {
						top: function() { return bs0absH; }
					}
				});
				bs2abs.affix({
					offset: {
						top: function() { return midNavUp2; }
					}
				});
				if (scrollTopY>=bs0absH) {
					bs1abs.addClass('affix').removeClass('affix-top');
					if (scrollTopY>=midNavUp2) {
						$('#myCarousel, .bs-2absolute-top').css({ "top" : "" });
					} else {
						$('#myCarousel, .bs-2absolute-top').css({ "top" : bs1absH });
					}

				} else {
					bs1abs.addClass('affix-top').removeClass('affix');
					$('#myCarousel, .bs-2absolute-top').css({ "top" : "" });
				}
				if (animaHas) {
					bs1abs.removeClass(aNaviga);
				}

				if ((scrollTopY>=midNavUp+bs1absH)) {
					if (bs1abs.css('top')!=-bs1absH) {
						bs1abs.stop().animate({
							top: -bs1absH
						}, 100, 'swing');
					}
				} else if (scrollTopY<midNavUp+bs1absH&&scrollTopY>bs0absH) {
						bs1abs.stop().animate({
							top: 0
						}, 100, 'swing');
				} else if ((scrollTopY<bs0absH)&&(bs1abs.css('top')==='0px')) {
					bs1abs.css({
						"top" : ""
					});
				} else {
					bs1abs.css({
						"top" : ""
					});
				}

			}

		});

		winThyme.on('resize', function() {
			var lrgScreenX = Modernizr.mq('(min-width: 768px)');
			var scrollTopXY = $(document).scrollTop();
			var bs0absHX = $('.bs-0absolute-top').height();
			var smlScreenX = Modernizr.mq('(max-width: 767px)');
			if (lrgScreenX) {
				if (scrollTopXY>=bs0absHX) {
					$('#myCarousel, .bs-2absolute-top').css({ "top" : "" });
					$('.logo-swap__lite').hide();
					$('.logo-swap__dark').show();
					$('.logo-swap__lite').css({ "opacity" : 0 });
					$('.logo-swap__dark').css({ "opacity" : 1 });
				}
			}
			if (smlScreenX) {
				$('.logo-swap__dark').hide();
				$('.logo-swap__lite').show();
				$('.logo-swap__dark').css({ "opacity" : 0 });
				$('.logo-swap__lite').css({ "opacity" : 1 });
			}

		});

	}(jQuery));
	
}