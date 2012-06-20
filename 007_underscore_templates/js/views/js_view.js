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
	
	// Example View
	'view/example_view'
	
],function(
	Backbone,
	_,
	$,
	
	// Example View
	ExampleView
	
){
	
	return ExampleView.extend({
		
		// template is fetched from a script node. it is compiled and stored locally
		template: _.template( $('#js_template').html() ),
		
	});
	
});