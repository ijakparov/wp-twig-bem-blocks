var item_photos = (function(){
	return{
		init: function(){
			jQuery('.item-photos__main-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				fade: true,
				asNavFor: '.item-photos__nav-slider',
				slide:".item-photos__main-slide-wrap",
				adaptiveHeight: true
			});
			jQuery('.item-photos__nav-slider').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.item-photos__main-slider',
				dots: false,
				arrows: false,
				/*centerMode: true,*/
				focusOnSelect: true,
				slide:".item-photos__nav-slide-wrap"
			});

		}
	}
})();

module.exports = item_photos;