/**
 * Learning Backbone
 * -> Collections App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */


define([
	// Frameworks
	'underscore',
	'backbone',
	
	// Templates
	'text!templates/tweet_template.html'

],function(
	// Frameworks
	_,
	Backbone,
	
	// Templates
	TweetTemplate

){
	
	return Backbone.View.extend({
		
		// sets up the container (this.$el) type
		tagName: 'li',
		
		// compile the template loaded from an external text file by RequestJS
		template: _.template( TweetTemplate ),
		
		
		
		initialize: function() {
			
			// bind model's canges to the render() method to mantain interface up to date.
			this.model.on( 'change', this.render, this );
			
		},
		
		render: function() {
			
			this.$el.html(this.template( this.model.toJSON() ));
			
			return this;
			
		}
		
	});
	
});