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
		
		// compile the template directly into the view's template property.
		template: _.template('<strong>name:</strong> <%= data.name %> <%= data.surname %>! <% if ( data.age ) { %><br><small><strong>Age:</strong> <%= data.age %></small><% } %>'),
		
	});
	
});