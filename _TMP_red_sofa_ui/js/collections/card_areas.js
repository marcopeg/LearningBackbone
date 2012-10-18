/**
 * Learning Backbone
 * -> Images Collection
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 * 
 */



/**
 * 
 */

define([
	
	// Frameworks
	'backbone',
	
	'model/card_area'
	
],function(

	// Frameworks
	Backbone,
	
	CardAreaModel
){
	
	
	return Backbone.Collection.extend({
		
		model: CardAreaModel,
		
		initialize: function() {
			
			this.on( 'change:active', this.setActiveModel, this );
			
		},
		
		
		setActiveModel: function( model, value ) {
			
			if ( !value ) return;
			
			this.each(function(book){
				
				if ( book != model ) book.set( 'active', false );
				
			});
			
			// Sets up the property panel with the model to update
			App.viewport.propertyPanelView.render( model );
			
		}
		
	});
	
		
});