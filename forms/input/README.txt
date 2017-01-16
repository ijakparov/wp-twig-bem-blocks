usage: 

	{% include 'twig-blocks/forms/input/tb-input.twig' with 
		{
			warp_class:"input-wrap--normal",
			inputicon:"",
			inputname:"price_search_end",
			has_btn:"0",
			js_btn_id:"",
			btn_class:"",
			btn_text:"",
			placeholder:" ",
			text_before:"до",
			maxlength:"5"
		}
	%}

	mini:
	{% include 'twig-blocks/forms/input/tb-input.twig' with {warp_class:"input-wrap--normal",inputicon:"",inputname:"price_search_end",has_btn:"0",js_btn_id:"",btn_class:"",btn_text:"",placeholder:" ",text_before:"до",maxlength:"5"} %}


dependencies:
	jQuery
