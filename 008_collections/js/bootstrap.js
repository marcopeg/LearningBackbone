/**
 * Learning Backbone
 * -> Collections App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * Here I wrote a simple app to display some tweets from the Twitter JsonP API.
 * 
 */



var App = {};


require.config({
	
	baseUrl: './',
	
	paths: {
		
		// Libraries
		text:		'../libs/require/text',
		jquery: 	'../libs/jquery/jquery.172',
		underscore:	'../libs/underscore/underscore.133',
		backbone:	'../libs/backbone/backbone.092',
		
		// Application Places
		view:		'js/views',
		model:		'js/models',
		collection:	'js/collections'
		
	},
	
	shim: {
		underscore: {
			exports: 	'_'
		},
		backbone: {
			deps: 		[ 'underscore', 'jquery' ],
			exports: 	'Backbone'
		}
	}
	
});





/**
 * 
 */

define([
	
	// Frameworks
	'backbone',
	'jquery',
	
	// Collections
	'collection/tweets_collection',
	
	// Views
	'view/tweets_view'

],function(

	// Frameworks
	Backbone,
	$,
	
	// Collections
	TweetsCollection,
	
	// Views
	TweetsView
	
){
	
	
	
	/**
	 * Utility function
	 * it uses Twitter JSON API to load some tweets.
	 *
	 * it take two argument:
	 * q - is the query to search for
	 * c - is the Backbone Collection object to fill with results.
	 */
	App.loadTwitterFeeds = function( q, c ) {
		
		// Reset the collection items before to throw the jsonP request.
		c.reset();
		
		$.getJSON( 
			'http://search.twitter.com/search.json?q='+q+'&rpp=5&callback=?',
			function( search ) {
				
				// Fill the collection with search results.
				c.add( search.results );
				
			}
		);
		
	}
	
	
	
	
	/**
	 * Setup the tweets collection object into the App global namespace.
	 * (collections/tweets_collection.js)
	 */
	App.tweets = new TweetsCollection();
	
	
	/**
	 * Setup the view where search results will be rendered.
	 * We pass tweets collection to the view to make possible for the view to listen for collection's events!
	 */
	App.tweetsView = new TweetsView({
		el: 		'#tweets',
		collection: App.tweets
	});
	
	
	
	/**
	 * Just load tweets as DOM is ready.
	 */
	$(document).ready(function () {
		
		App.loadTwitterFeeds( 'BackboneJS', App.tweets );
				
	});



});