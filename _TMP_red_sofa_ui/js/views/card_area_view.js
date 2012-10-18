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
		
		className: 'card_area',
		
		events: {
			'click'	: 'setActive'
		},
		
		initialize: function() {
			
			this.model.on( 'change', this.render, this );
			
		},
		
		render: function() {
			
			this.$el.css({
				top:		this.model.get('top'),
				left:		this.model.get('left'),
				width:		this.model.get('width'),
				height:		this.model.get('height')
			});
			
			// Update active/inactive status
			if ( this.model.get('active') ) {
				if ( !this.$el.hasClass('active') )	this.$el.addClass('active');
				
			} else {
				this.$el.removeClass('active');
				
			}
			
			return this;
			
		},
		
		
/**
 * When drawing ends area object become draggable.
 */		
		stopDraw: function() {
			
			this.$el.draggable({
				
				// Update model's position informations.
				stop: _.bind(function(e,ui){
					
					this.model.set({
						top: 	ui.position.top,
						left: 	ui.position.left
					});
					
				},this)
				
			});
			
		},
		
		
		setActive: function() {
			
			this.model.set( 'active', true );
			
		}
			
	});
	
});