/**
 * Learning Backbone
 * -> RedSofa App
 *
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */






define([
	'underscore',
	'backbone',
	
	'vendor/history_manager'

],function(
	_,
	Backbone,
	
	HistoryManager

){
	
	return Backbone.Router.extend({
		
		routes: {
			'*actions' 	: 'defaultRoute'
		},
		
		history: null,
		
		initialize: function( cfg ) {
			
			// sets up the internal history manager
			this.history 		= new HistoryManager(this);
						
		},
		
		defaultRoute: function() {
			
			this.trigger( 'clearUI' );
			
		},
		
		
		
		
		
		
		
		
		
		/**
		 * Url handling utilities
		 */
		
		go: function ( to ) {
			
			this.navigate( to, { trigger:true } );
			
		},
		
		urlHome: function() {
			
			this.navigate( '#/' );
			
		},
		
		goHome: function() {
			
			this.go( '#/' );
			
		},
				
	});
	
});