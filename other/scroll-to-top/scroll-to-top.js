var scroll_to_top = function(){
	var id = "#scroll-to-top";
	var scroll_to = "header";
	return{
		init: function(){

			this.isVisible();

			jQuery(id).click(function(){
				jQuery.scrollTo(jQuery(scroll_to), 1000, {
					easing: 'easeInOutCubic',
				});       
			});

			jQuery( window ).scroll( function () {
				if ( jQuery( window ).scrollTop() < 10 ) {
					jQuery( id ).addClass('scroll-to-top--hide');
					jQuery(id).css('display',"block");
				} else {
					jQuery( id ).removeClass('scroll-to-top--hide');
					jQuery(id).css('display',"block");
				}
			});

			if(jQuery("header").isVisible()){
				jQuery( id ).addClass('scroll-to-top--hide');

			}
			else{
				jQuery(id).css('display',"block");
			}

		},
		isVisible: function(){
			jQuery.fn.isVisible = function() {
			    // Current distance from the top of the page
			    var windowScrollTopView = jQuery(window).scrollTop();
			    
			    // Current distance from the top of the page, plus the height of the window
			    var windowBottomView = windowScrollTopView + jQuery(window).height();
			 
			    // Element distance from top
			    var elemTop = jQuery(this).offset().top;
			    
			    // Element distance from top, plus the height of the element
			    var elemBottom = elemTop + jQuery(this).height();
			    
			    return ((elemBottom <= windowBottomView) && (elemTop >= windowScrollTopView));
			}

		}
	}
};

module.exports = scroll_to_top;

