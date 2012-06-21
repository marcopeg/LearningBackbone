/**
 * Learning Backbone
 * -> Collections App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * 
 * This collection is able to fetch data from a remote server using "url" property.
 * The collection exposes two logic methods:
 *
 * - search( query ): fetch data from the remote server according to the search query.
 * - cancel: remove all models from the collection.
 *
 * These methods are also exposed as listened events because we implements Observe Pattern in this class.
 * parse() and cancel() are never used directly.
 *
 * Other application components who needs to call these methods have to trigger events:
 * collectionInstance.trigger( 'search', 'movableapp' );
 * collectionInstance.trigger( 'cancel' );
 *
 * This way when FormView request to cancel the search by triggering "cancel" on this collection object
 * the TweetsView can bind the same event and empty the search results panel too! It's magic!
 * 
 */




define([
	'jquery',
	'backbone',
	
	// Models
	'model/tweet'

],function(
	$,
	Backbone,
	
	// Models
	TweetModel

){
	
	return Backbone.Collection.extend({
		
		model: TweetModel,
		
		// Setup the url to be used in AJAX calls.
		// More options ( es. search query ) may be passed when fetching data.
		url: 'http://search.twitter.com/search.json?rpp=5&callback=?',
		
		initialize: function() {
			
			// Observer Pattern - listen for events triggered on object itself
			// these events are triggered from outside this object! (from FormViews)
			this.on( 'performSearch', 	this.search );
			this.on( 'resetSearch', 	this.cancel );
			
		},
		
		
		/**
		 * Transform server response into a ready to use Model's Jsoned array of data.
		 */
		parse: function( response ) {
			
			return response.results;
			
		},
		
		search: function( q ) {
			
			this.trigger( 'searchStart', q );
			
			this.fetch({
				data: 		$.param({ q:q })
			});
			
			
		},
		
		cancel: function() {
			
			this.reset([],{ silent:true });
			
			this.trigger( 'cancel' );
			
		}
		
	});
	
});