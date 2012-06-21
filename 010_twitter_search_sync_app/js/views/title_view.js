/**
 * Learning Backbone
 * -> TwitterSearch App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */






define([
	'underscore',
	'backbone',
	
	'text!templates/title_template.html'

],function(
	_,
	Backbone,
	
	TitleTemplate

){
	
	return Backbone.View.extend({
		
		template: _.template(TitleTemplate),
		
		initialize: function() {
			
			// Observe Pattern - listen for Collection's events
			this.collection.on( 'searchStart', 	this.render, this );
			this.collection.on( 'cancel', 		this.render, this );
			
			this.render();
			
		},
		
		render: function( q ) {
			
			this.$el.html( this.template({q:q}) );
			
			return this;
			
		}
						
	});
	
});