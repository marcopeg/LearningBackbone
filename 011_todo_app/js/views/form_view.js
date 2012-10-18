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
			
			// store links to DOM items
			this.$title 	= this.$('[name=title]');
			this.$content	= this.$('[name=content]');
			this.$el.hide();
			
			// drive events to internal actions
			this.on( 'editItem',		this.render,		this );
			this.on( 'removeItem',		this.render,		this );
			this.on( 'clearForm',		this.render,		this );
			
			// force events binding context
			_.bindAll( this, 'onSubmit' );
			
		},
		
		events: {
			'submit' 						: 'onSubmit',
			'click [data-action=reset]'		: 'onExitForm',
			'dblclick input'				: 'clearInput',
			'keyup input'					: 'onKeyUp',
			'keyup textarea'				: 'onKeyUp',
		},
		
		
		/**
		 * Fill form fields with given model data
		 */
		render: function( m ) {
			
			if ( m ) {
				
				this.model = m;
				this.$title.val( this.model.get('title') );
				this.$content.val( this.model.get('content') + '' );
				
				// Smooth display of the form
				this.$el.stop().fadeIn($.proxy(function(){
					
					this.trigger( 'formShown', this.model );
					
				},this));
				
			
			} else {
				
				// Smooth hide of the form
				this.$el.stop().fadeOut($.proxy(function(){
					
					this.$title.val('');
					this.$content.html('');	
					
					this.trigger( 'formClosed' );
					
				},this));
				
			}
			
			return this;
			
		},
		
		
		
		
		
		onSubmit: function(e) {
			
			e.preventDefault();
			
			this.trigger( 'saveForm', this.model );
			
		},
		
		onExitForm: function(e) {
			
			this.trigger( 'stopExitForm', e );
			
		},
		
		clearInput: function(e) {
			
			$(e.target).val('');
			
		},
		
		onKeyUp: function(e) {
			
			// Delay the update event to grant performances to the app
			
			if ( !this.onKeyUpTimeout ) this.onKeyUpTimeout = null;
			clearTimeout(this.onKeyUpTimeout);
			
			this.onKeyUpTimeout = setTimeout($.proxy(function(){
				
				// update the edit model
				this.model.set({
					title:		this.$title.val(),	
					content:	this.$content.val()
				});
				
				// Trigger a "changeData" event to be handled by the viewport to update UI
				this.trigger( 'changeData', this.model );
				
			},this),150);
			
		}
				
	});
	
});