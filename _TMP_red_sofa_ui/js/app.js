/**
 * Learning Backbone
 * -> Main Application Logic Container
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This object acts as a Controller in the MVC behavior of the application.
 * 
 */



/**
 * 
 */

define([
	
	// Frameworks
	'underscore',
	'backbone'
	
],function(

	// Frameworks
	_,
	Backbone	
){
	
	
	
	
/**
 * App Constructor
 * stores config objects and handle events
 */	
	var App = function( cfg ){
		
		this.viewport 	= cfg.viewport;
		this.cards		= cfg.cards;
		this.cardAreas 	= cfg.cardAreas;
		
		this.allowedTypes = [
			'image/jpeg',
			'image/png',
			'image/gif'
		];
		
		this.maxFileSize = 1000000;
		
		
		
		this.on( 'addFile', 	this.addFile, 		this );
		this.on( 'getCode', 	this.getCode, 		this );
		
		
		this.cards.on( 'add', this.viewport.cardsView.addCard, this.viewport.cardsView );
		
	};
	
	// add events capabilities to the app.
	_.extend( App.prototype, Backbone.Events );
	




/**
 * Add File Logic
 * check for file integrity (image) and add it to a collection.
 */	
	App.prototype.addFile = function( file ) {
		
		// Check for file type permission.
		if ( !_.include(this.allowedTypes,file.type) ) {
			
			this.trigger( 'fileNotAllowed', 	file );
			this.trigger( 'fileTypeException', 	file );
			
			return false;
			
		}
		
		// Check for file size permission.
		if ( file.size > this.maxFileSize ) {
			
			this.trigger( 'fileNotAllowed', 	file );
			this.trigger( 'fileSizeException', 	file );
			
			return false;
			
		}
		
		// Get file content and add data to the collection
		var fileReader 		= new FileReader();
		
		fileReader.onload 	= _.bind(function( e ) {
			
			this.cards.add([{
				name: 	file.name,
				type:	file.type,
				size:	file.size,
				data:	e.currentTarget.result
			}]);
			
		},this);
		
		fileReader.readAsDataURL( file );
		
	}
	
	
	
	

/**
 * Compile actual status into HTML + JS code
 */	
	App.prototype.getCode = function() {
		
		alert("GetCode");
		
	}
	
	
	return App;
	
		
});