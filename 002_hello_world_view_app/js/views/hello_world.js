/**
 * Learning Backbone
 * -> Hello World View
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This module define a custom view obtained by extending Backbone's core View object.
 * 
 */


define(['jquery','backbone','plugin/jquery.centerBounce'],function($,Backbone){
	
	var HelloWorldView = Backbone.View.extend({
		
		// Sets up DOM element handled by this view
		el: $('#app'),
		
		render: function( template ) {
			
			// Add the template text to the DOM
			$(this.el).html(template);
			
			// Apply a funny jQuery plugin!
			$('body').centerBounce();
			
		}
		
	});
	
	return new HelloWorldView;
	
});