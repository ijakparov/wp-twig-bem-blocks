var tb_input = function(){
	return{
		init: function(){
			this.cross_show();
			this.clear();
		},
		cross_show: function(){
			jQuery("body").on("keyup",".input-wrap>input",function(){
				if(jQuery(this).val()!=""){
					jQuery(this).parent().find(".input-wrap__cross").show();

				}
				else{
					jQuery(this).parent().find(".input-wrap__cross").hide();
				}
			});
		},
		clear: function(){
			jQuery(".input-wrap__cross").click(function(){
				jQuery(this).parent().find("input").val("");
				jQuery(this).hide();
			});
		}
	}
};

module.exports = tb_input;