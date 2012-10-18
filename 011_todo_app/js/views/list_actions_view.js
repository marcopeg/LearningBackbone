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
	'jquery'

],function(
	_,
	Backbone,
	$

){
	
	return Backbone.View.extend({
		
		initialize: function() {
			
			this.$add = this.$('[data-action=add]');
			this.$del = this.$('[data-action=del]');
			
			// drive events to internal actions
			this.on( 'editItem', 		this.render, 	this );
			this.on( 'removeItem', 		this.render, 	this );
			this.on( 'clearForm', 		this.render, 	this );
			
		},
		
		events: {
			
			'click [data-action=add]' : 'addItem',
			'click [data-action=del]' : 'deleteItem'
			
		},
		
		render: function( model ) {
			
			if ( model ) {
				
				this.$del.attr('href', '#/del/' + model.id );
				
				this.$del.removeClass('disabled');
				
			} else {
				
				this.$del.attr('href', '#' );
				
				this.$del.addClass('disabled');
				
			}
			
			return this;
			
		},
		
		addItem: function( e ) {
			
			this.trigger( 'stopExitForm', e );
			
		},
		
		deleteItem: function(e) {
			
			e.preventDefault();
			
			if ( !this.$del.hasClass('disabled') ) this.trigger( 'deleteItem' );
			
		}
				
	});
	
});