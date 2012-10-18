/**
 * Learning Backbone
 * -> ToDo App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */







define([
	'underscore',
	'backbone',
	
	'view/card_view'

],function(
	_,
	Backbone,
	
	CardView

){
	
	return Backbone.View.extend({
		
		initialize: function() {
			
			this.render();
			
		},
		
		render: function() {
			
			this.$el.sortable({
				handle: '.sort-handler'
			});
			
		},
		
		addCard: function( model ) {
			
			var card = new CardView({
				model: model
			});
			
			// bind the cardModel with it's related view
			model.set( 'view', card );
			
			this.$el.append( card.render().el );
			
		}
		
			
	});
	
});