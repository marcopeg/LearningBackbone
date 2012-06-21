/**
 * Learning Backbone
 * -> TwitterSearch App
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
		
		initialize: function() {
			
			// Observe Pattern - listen for Collection's events
			this.collection.on( 'cancel', this.clearInput, this );
			
		},
		
		events: {
			
			'click button' 	: 'doSearch',
			'submit'		: 'doSearch',
			'keyup'			: 'keyUp',
			'dblclick input': 'clearInput'
			
		},
		
		render: function() {
			
			// store DOM reference locally to the view so we can use in different methods.
			this.$input 	= this.$('input');
			this.$button 	= this.$('button');
			
			// Adapt input's width to the viewport size!
			this.$input.css( 'width', ( this.$input.parents('.controls').width() - this.$button.outerWidth() - 10 ) );
			
			return this;
			
		},
		
		doSearch: function( e ) {
			
			e.preventDefault();
			
			// Observer Pattern - trigget events to dependency objects!
			// Trigger a "search" event with arguments to the handled collection.
			// we don't know if the collection will handle this event so this is the safest way to
			// dialog between different objects.
			this.collection.trigger( 'search', this.$input.val() );
			
			// clear the search field and focus on it
			this.clearInput;
			
		},
		
		clearInput: function() {
			
			this.$input.val('').focus();
			
		},
		
		keyUp: function( e ) {
			
			e.preventDefault();
			
			// Observer Pattern - trigget events to dependency objects!
			if ( e.keyCode == 27 ) this.collection.trigger( 'cancel' );
			
		}
				
	});
	
});