var select_item_color = (function(){
	return{
		init: function(){
			this.item_click();
		},
		item_click: function(){
			jQuery("body").on("click",".js-select-item-color",function(){
				var color_name = jQuery(this).data("colorName");

				jQuery(this).parent().find(".select-item-color__item").removeClass("select-item-color__item--current");
				jQuery(this).addClass("select-item-color__item--current");

				jQuery(".select-item-color__text").text(color_name);
				/*var price = jQuery(this).data("price");
				console.log(price);*/
			});
		}
	}
})();

module.exports = select_item_color;