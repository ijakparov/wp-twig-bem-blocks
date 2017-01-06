var items_slider = function(){
	return{
		init:function(){
			jQuery('.items-slider').slick({
				infinite: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				slide: ".items-slider__wrapper",
				arrows:true,
				prevArrow:"<div class='slider-arrow slider-arrow--left'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
				nextArrow:"<div class='slider-arrow slider-arrow--right'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
				//variableWidth: true
			});

			jQuery('.items-slider').on('setPosition', function () {
				jQuery(this).find('.slick-slide').height('auto');
				var slickTrack = jQuery(this).find('.slick-track');
				var slickTrackHeight = jQuery(slickTrack).height();
				jQuery(this).find('.items-slider__slide').css('height', slickTrackHeight + 'px');
			});
		}
	}
};

module.exports = items_slider;