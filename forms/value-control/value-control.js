var value_control = (function(){
	return{
		init: function(){
			this.event();
		},
		event: function(){
			this.minus_click();
			this.plus_click();
			this.keypress();
		},
		minus_click: function(){
			jQuery("body").on("click",".value-control__minus", function(){
				var value = jQuery(this).parent().find("input").val();

				var this_minus_element = jQuery(this);
				var this_plus_element = jQuery(this).parent().find(".value-control__plus");
				
				var new_value = value*1-1;
				if(new_value>1){
					jQuery(this).parent().find("input").val(new_value);

					this_minus_element.removeClass("value-control__minus--disabled");
				}
				else{
					this_minus_element.addClass("value-control__minus--disabled");

					jQuery(this).parent().find("input").val(1);
					
				}
				if(new_value<=100){

					this_plus_element.removeClass("value-control__plus--disabled");
				}
				else{
					this_plus_element.addClass("value-control__plus--disabled");
					
				}

				jQuery(window).trigger('vc-change');
				

			});
		},
		plus_click: function(){
			jQuery("body").on("click",".value-control__plus", function(){

				var value = jQuery(this).parent().find("input").val();
				var this_minus_element = jQuery(this).parent().find(".value-control__minus");
				var this_plus_element = jQuery(this);
				

				var new_value = value*1+1;

				if(new_value<=100){
					jQuery(this).parent().find("input").val(new_value);

					this_plus_element.removeClass("value-control__plus--disabled");
				}
				else{
					this_plus_element.addClass("value-control__plus--disabled");
					
				}
				if(new_value>=1){

					this_minus_element.removeClass("value-control__minus--disabled");
				}
				else{
					this_minus_element.addClass("value-control__minus--disabled");
					
				}

				jQuery(window).trigger('vc-change');
			});
		},
		keypress: function(){
			jQuery("body").on("keyup",".value-control>input", function(){

				var value = jQuery(this).val();

				var this_minus_element = jQuery(this).parent().find(".value-control__minus");
				var this_plus_element = jQuery(this).parent().find(".value-control__plus");
				
				if(Number.isInteger(value*1)==false || value>100 || value<1)
				{
					jQuery(this).parent().find("input").val(1);

					this_minus_element.addClass("value-control__minus--disabled");
					this_plus_element.removeClass("value-control__plus--disabled");
				}
				else{
					if(value>1){

						this_minus_element.removeClass("value-control__minus--disabled");
					}
					else{
						this_minus_element.addClass("value-control__minus--disabled");
						
					}
					if(value<=99){

						this_plus_element.removeClass("value-control__plus--disabled");
					}
					else{
						this_plus_element.addClass("value-control__plus--disabled");
						
					}				
				}


				jQuery(window).trigger('vc-change');

			});
		}
	}
})();

module.exports = value_control;