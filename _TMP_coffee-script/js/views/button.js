



define([
	'jquery',
	'backbone'

],function(
	$,
	Backbone

){
	
	return Backbone.View.extend({
		
		tagName: 		'a',
		className: 		'btn',
		
		render: function() {
			
			this.$el.html( 'button' );
			
			return this;
			
		},
		
		renderTo: function( target, renderOptions ) {
			
			$(target).html( this.render(renderOptions).el );
			
		},
		
		appendTo: function( target, renderOptions ) {
			
			$(target).append( this.render(renderOptions).el );
			
		},
		
				
	});
	
});