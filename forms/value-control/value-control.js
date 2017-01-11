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
				
				var new_value = value*1-1;
				if(new_value>1){
					jQuery(this).parent().find("input").val(new_value);

					jQuery(".value-control__minus").removeClass("value-control__minus--disabled");
				}
				else{
					jQuery(".value-control__minus").addClass("value-control__minus--disabled");

					jQuery(this).parent().find("input").val(1);
					
				}
				if(new_value<=100){

					jQuery(".value-control__plus").removeClass("value-control__plus--disabled");
				}
				else{
					jQuery(".value-control__plus").addClass("value-control__plus--disabled");
					
				}
				

			});
		},
		plus_click: function(){
			jQuery("body").on("click",".value-control__plus", function(){

				var value = jQuery(this).parent().find("input").val();

				var new_value = value*1+1;

				if(new_value<=100){
					jQuery(this).parent().find("input").val(new_value);

					jQuery(".value-control__plus").removeClass("value-control__plus--disabled");
				}
				else{
					jQuery(".value-control__plus").addClass("value-control__plus--disabled");
					
				}
				if(new_value>=1){

					jQuery(".value-control__minus").removeClass("value-control__minus--disabled");
				}
				else{
					jQuery(".value-control__minus").addClass("value-control__minus--disabled");
					
				}
			});
		},
		keypress: function(){
			jQuery("body").on("keyup",".value-control>input", function(){

				var value = jQuery(this).parent().find("input").val();
				
				if(Number.isInteger(value*1)==false || value>100 || value<1)
				{
					jQuery(this).parent().find("input").val(1);

					jQuery(".value-control__minus").addClass("value-control__minus--disabled");
					jQuery(".value-control__plus").removeClass("value-control__plus--disabled");
				}
				else{
					if(value>1){

						jQuery(".value-control__minus").removeClass("value-control__minus--disabled");
					}
					else{
						jQuery(".value-control__minus").addClass("value-control__minus--disabled");
						
					}
					if(value<=99){

						jQuery(".value-control__plus").removeClass("value-control__plus--disabled");
					}
					else{
						jQuery(".value-control__plus").addClass("value-control__plus--disabled");
						
					}				
				}


				

			});
		}
	}
})();

module.exports = value_control;