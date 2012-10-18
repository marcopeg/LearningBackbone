/**
 * BackboneJS History Manager
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 *
 */






define([
	'underscore',
	'backbone'
],function(
	_,
	Backbone
){
	
	
	/**
	 * Class Constructor
	 * it calls an internal method to initialize this object.
	 */
	var Application = function( cfg ) {
		
		// Extends itself with given configuration object.
		cfg = cfg || {};
		_.extend( this, cfg );
		
		this.initialize.apply( this, arguments );
				
	};
	
	_.extend( Application.prototype, Backbone.Events, {
		
		
		/**
		 * Allow to apply descendant initialization logics.
		 */
		initialize: function() {}
		
		
	});
	
	return Application;
	
	
});