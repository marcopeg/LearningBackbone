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
	
	'view/card_image_view',
	'view/card_area_view',
	
	'model/card_area'

],function(
	_,
	Backbone,
	
	CardImageView,
	CardAreaView,
	
	CardAreaModel

){
	
	return Backbone.View.extend({
		
		className: 'card',
		
		initialize: function() {
			
			// rendered image for the card
			this.cardImage = new CardImageView({
				model: this.model
			});
			
			// Creates UI actions handler | drag, remove
			this.removeHandler	= $('<div class="remove-handler">');
			this.sortHandler 	= $('<div class="sort-handler">');
				
		},
		
		events: {
			'click .remove-handler' : 'removeHandlerOnClick'
		},
		
		render: function(){
			
			// Append items
			this.$el.append( this.cardImage.render().el );
			this.$el.append( this.removeHandler );
			this.$el.append( this.sortHandler );
			
			// Configure area drawing events
			this.cardImage.$el.bind( 	'mousedown', 	_.bind( this.startDraw, this ) );
			this.$el.bind( 				'mouseup', 		_.bind( this.stopDraw, 	this ) );
			this.$el.bind( 				'mousemove', 	_.bind( this.drawing, 	this ) );
						
			return this;
			
		},
		
		
		
/**
 * Ask the user for confirm the remove action.
 * Works directly on the app's cards collection.
 */		
		removeHandlerOnClick: function() {
		
			var $dlg = $('<div class="tc">Do you really want to remove this card?</div>');
			
			$dlg.dialog({
				title:		'Please Confirm:',
				modal:		true,
				height:		160,
				resizable:	false,
				buttons: {
					
					// Remove Action
					"Yes, Remove it!": _.bind(function() {
						
						$dlg.dialog( 'destroy' );
						
						// !!! remove the model from the app cards collection !!!
						app.cards.remove( this.model );
						
						this.$el.slideUp(function(){ $(this).remove(); });
						
					},this),
					
					// Cancel Action
					"Cancel": function() { $dlg.dialog('destroy') }
				}
			});
			
		},
		
		
		
		
/**
 * Drawing Handlers
 */		
		startDraw: function( e ) {
			
			e.preventDefault();
			
			this.isDrawing = true;
			this.oX = e.clientX;
			this.oY = e.clientY;
			
			// Setup a CardAreaModel to store area dimensions during drawing process.
			this.drawingModel 	= new CardAreaModel({
				card:	this.model,
				top: 	e.clientY + $(document).scrollTop() - this.$el.offset().top,
				left:	e.clientX - this.$el.offset().left
			});
			
			// Setup a CardAreaView to render the CardAreaModel informations during drawing process.
			this.drawingView	= new CardAreaView({
				model:	this.drawingModel
			});
			
			// Append area view to the card's DOM
			this.$el.append( this.drawingView.render().el );
			
		},
		
		// Update area dimensions into the area model
		drawing: function( e ) {
			
			e.preventDefault();
			
			if ( this.isDrawing !== true ) return;
			
			this.drawingModel.set({
				width:		e.clientX-this.oX,
				height:		e.clientY - this.oY
				
			});
			
		},
		
		stopDraw: function( e ) {
			
			e.preventDefault();
			
			this.isDrawing = false;
			
			// Bind areaModel with related AreaView
			this.drawingModel.set( 'view', this.drawingView );
			
			// Push the area model into card's areas collection
			App.cardAreas.add( this.drawingModel );
			
			// notify CardAreaView that drawing process ended
			this.drawingView.stopDraw();
			
			// Activate the new area
			this.drawingModel.set( 'active', true );
			
		},
		
		
		
		
			
	t:3});
	
});