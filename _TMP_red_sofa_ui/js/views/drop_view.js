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
		
		initialize: function() {
			
			//this.el.addEventListener( "drop", this.onDrop, false );
				
		},
		
		events: {
			
			'dragenter' : 'onDrag',
			'dragexit'	: 'onDrag',
			'dragover'	: 'onDrag',
			'drop'		: 'onDrop'
			
		},
		
		
		onDrag: function( e ) {
			
			e.stopPropagation();
			
			e.preventDefault();
				
		},
		
		onDrop: function( e ) {
			
			e.preventDefault();
			
			var files = e.originalEvent.dataTransfer.files;
			
			for ( var i=0; i<files.length; i++ ) {
				
				App.trigger( 'addFile', files[i] );
				
			}
			
		}
		
			
	});
	
});