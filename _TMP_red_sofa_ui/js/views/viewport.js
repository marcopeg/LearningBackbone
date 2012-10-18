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
	
	// Sub Views
	'view/drop_view',
	'view/cards_view',
	'view/property_panel_view',

],function(
	_,
	Backbone,
	
	// Sub Views,
	DropView,
	CardsView,
	PropertyPanelView

){
	
	return Backbone.View.extend({
		
		initialize: function() {
			
			/**
			 * Create instances of sub-views
			 */
			
			this.dropView = new DropView({
				el: this.$el.find('.drop-image')
			});
			
			this.cardsView = new CardsView({
				el: this.$el.find('.cards-list')
				
			});
			
			this.propertyPanelView = new PropertyPanelView({
				el: this.$el.find('.property-panel')
				
			});
			
			this.render();
			
		},
		
		render: function() {
			
			// Sidbar fixed position on page scrolling
			this.$el.find('.sidebar').scrollSticky({
				stickyTop: 		'15px',
				stickyStart: 	'102',
				onSticky: function() {
					$(this).css('width', $(this).parent().width() );	
				}
			});
			
			return this;
			
		},
		
		events: {
			
			'click #get-code' : 'getCodeOnClick'
			
		},
		
		getCodeOnClick: function( e ) {
			
			e.preventDefault();
			
			App.trigger( 'getCode' );
			
		}
		
			
	});
	
});