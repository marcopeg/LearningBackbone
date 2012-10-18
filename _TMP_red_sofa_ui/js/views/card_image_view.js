/**
 * Learning Backbone
 * -> ToDo App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */







define([
	'underscore',
	'backbone'

],function(
	_,
	Backbone

){
	
	return Backbone.View.extend({
		
		tagName: 'img',
		
		initialize: function() {
				
		},
		
		render: function(){
			
			this.$el.attr( 'src', this.model.get('data') );
			this.$el.attr( 'alt', this.model.get('name') );
			
			return this;
			
		}
			
	});
	
});