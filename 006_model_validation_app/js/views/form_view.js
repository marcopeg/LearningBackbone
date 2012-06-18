/**
 * Learning Backbone
 * -> Validating Models
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * The FormView is very similar to the 005 example.
 * Here I create more methods to distribute logic into small chunks of code.
 *
 * The form listen for many events and perform actions according to these events.
 * 
 * The form belong to a model. This model is set as dependecy at initialization time.
 * (http://it.wikipedia.org/wiki/Dependency_injection)
 *
 * FormView listen to model's "error" event to display UI errors facilities.
 * then there is mechanism to reset field's status when focusing.
 */


define([
	'backbone',
	'underscore',
	'jquery'
	
],function(
	Backbone,
	_,
	$
	
){
	
	return Backbone.View.extend({
		
		
		
		
		
		initialize: function() {
			
			// Set view's "onError" method to always be executed with "this" context!
			// this is very important because in next line we bind "view::onError()" with "model::error" event.
			// Without this Underscore instruction our "onError" event receive the model's object as its "this" property!
			_.bindAll( this, 'onError' );
			
			// Delegate model's error event to be handled by the view.
			// this is the focus of this example!
			this.model.bind( 'error', this.onError );
			
			
		},
		
		// Delegate view's events
		events: {
			"submit" 					: "onSubmit",
			"focus input" 				: "onInputGetFocus",
			"click button[type=reset]"	: "onReset"
		},
		
		
		
		
		
		/**
		 * Events Handling
		 * these methods are triggered by view related objects events
		 */
		
		onSubmit: function( e ) {
			
			e.preventDefault();
			
			this.model.set({
				name:		this.$('input[name=name]').val(),
				surname:	this.$('input[name=surname]').val()
			});
			
		},
		
		onInputGetFocus: function( e ) { 
			
			this.resetFieldError( $(e.target).attr('name') ); 
			
		},
		
		onReset: function( e ) {
			
			// don't call model::reset() but trigger a custom event.
			// this way is more error proof because we can not be sure that "this.model" expose a "reset()" method.
			// it depends on what object is injected as dependency.
			//
			// triggering events is a standard Backbone interface and it is model's responsability to connect
			// the "doReset" event to the correct internal logic!
			this.model.trigger( 'doReset' );
			
			// Reset fields status!
			_.each( this.$('input'), function( field ){
				
				this.resetFieldError( $(field).attr('name') );
				
			}, this);
			
		},
		
		/**
		 * Model's related events listeners.
		 * these methods are 
		 */
		
		onError: function( model, error ) {
			
			_.each( error, function( fieldName ) {
				
				this.setFieldError( fieldName );
				
			}, this );
			
		},
		
		
		
		
		
		
		
		
		
		
		
		
		/**
		 * UI utilities
		 * set and unset "error" status on a field's control-group .
		 *
		 * It uses internal DOM utilities methods to fetch the DOM nodes from the field name (string)
		 */
		
		setFieldError: function ( fieldName ) {
			
			var $controlGroup = this.getFieldControlGroup( this.getField(fieldName) );
			
			$controlGroup.addClass('error');
			
		},
		
		resetFieldError: function( fieldName ) {
			
			var $controlGroup = this.getFieldControlGroup( this.getField(fieldName) );
			
			$controlGroup.removeClass('error');
			
		},
		
		
		
		
		
		
		
		
		
		
		/**
		 * DOM Utility
		 * supplied the field DOM node by ginving the field's name
		 */
		getField: function( fieldName ) {
			
			return $('input[name='+fieldName+']');
			
		},
		
		/**
		 * DOM Utility
		 * supplies the control-group DOM node that wraps the given field.
		 */
		getFieldControlGroup: function( $field ) {
			
			return $field.parents('.control-group');
			
		}
		
		
		
	});
	
});