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
		text:		'../_libs/text',
		jquery: 	'../_libs/jquery',
		underscore:	'../_libs/underscore',
		backbone:	'../_libs/backbone',
		
		// Application Places
		view:		'js/views',
		model:		'js/models',
		collection:	'js/collections'
		
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
	'view/viewport'

],function(

	// Frameworks
	Backbone,
	$,
	
	// Collections
	TweetsCollection,
	
	// Views
	Viewport
	
){
	
	App.tweets = new TweetsCollection;
		
	App.viewport = new Viewport({
		el: 		'#twitterSearch',
		collection: App.tweets
	});
	
});