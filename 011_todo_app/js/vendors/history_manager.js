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
	
	
	var HistoryModel = Backbone.Model.extend({
		
		initialize: function( options ) {
			
			// Default values
			options = options || {};
			if ( !options.hash ) 		options.hash 		= window.location.hash;
			if ( !options.location ) 	options.location 	= window.location;
			
			_.extend( this.attributes, options );
			
		}
		
	});
	
	
	
	
	
	
	var HistoryCollection = Backbone.Collection.extend({
		
		model: HistoryModel
		
	});
	
	
	
	
	
	
	
	
	var HistoryManager = function( router ) {
		
		this.working = true;
		
		this.router = router;
		
		this.collection = new HistoryCollection();
		
		this.router.on( 'all', this.push, this );
		
	};
	
	_.extend( HistoryManager.prototype, Backbone.Events, {
		
		push: function( request ) {
			
			if ( !this.working ) {
				
				this.resume();
				
				return;
				
			}
			
			var m = new HistoryModel({
				request:		request
			});
			
			this.collection.add( m );
				
		},
		
		pause: function() {
			
			this.working = false;
			
		},
		
		resume: function() {
			
			this.working = true;
			
		},
		
		
		
		
		
		debug: function() {
				
			this.collection.each(function(m){
				
				console.log( ":::> " + m.get('hash') );
				
			});
			
			return this;
			
		},
			
		getLast: function() {
			
			var m = this.collection.pop();
			if ( _.isUndefined(m) ) m = new HistoryModel();
			
			return m;
			
		},
		
		getLastHash: function() {
			
			return this.getLast().get('hash');
			
		},
		
		back: function( opt ) {
			
			this.collection.pausePush = true;
			
			this.router.navigate( this.getLastHash(), opt );
			
		},
		
		reset: function() {
			
			this.collection.reset();
			
		}
		
	});
	
	return HistoryManager;
	
	
});