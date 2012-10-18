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
		text:		'../_libs/require/text',
		jquery: 	'../_libs/jquery/jquery.172',
		underscore:	'../_libs/underscore/underscore.133',
		backbone:	'../_libs/backbone/backbone.092',
		
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
	}).render();
	
});