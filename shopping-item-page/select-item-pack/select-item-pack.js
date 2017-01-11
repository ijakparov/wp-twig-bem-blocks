var select_item_pack = (function(){
	return{
		init: function(){
			this.item_click();
		},
		item_click: function(){
			jQuery("body").on("click",".select-item-pack__item",function(){
				var price = jQuery(this).data("price");
				console.log(price);
			});
		}
	}
})();

module.exports = select_item_pack;