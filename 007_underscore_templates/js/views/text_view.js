/**
 * Learning Backbone
 * -> Underscore Templates
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */



define([
	'backbone',
	'underscore',
	'jquery',
	
	// Views
	'view/example_view',
	
	// Templates
	'text!templates/text_template.html'
	
],function(
	Backbone,
	_,
	$,
	
	// Views
	ExampleView,
	
	
	// Templates
	TextTemplate
	
){
	
	return ExampleView.extend({
		
		// TextTemplate contains the content of a template file who's loaded via ajax
		// by RequireJS define() utility plus "text" plugin.
		// we compile it and store it locally to the view's template property.
		template: _.template( TextTemplate ),
		
	});
	
});