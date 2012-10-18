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
		
		// Plugins
		ui:				'../_libs/jquery/jquery-ui-1.8.21.min',
		scrollsticky:	'js/plugins/jquery.scrollsticky',
		
		// Application Places
		view:		'js/views',
		model:		'js/models',
		collection:	'js/collections',
		vendor:		'js/vendors'
		
	},
	
	shim: {
		underscore: {
			exports: 	'_'
		},
		backbone: {
			deps: 		[ 'underscore', 'jquery' ],
			exports: 	'Backbone'
		},
		ui: {
			deps:		[ 'jquery' ]
		},
		scrollsticky: {
			deps:		[ 'jquery' ]
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
	'js/app',
	
	// Collections
	'collection/cards',
	'collection/card_areas',
	
	// Views
	'view/viewport',
	
	'js/router',
	
	
	// Other libraries
	'ui',
	'scrollsticky',
	'js/example_data'

],function(

	// Frameworks
	Backbone,
	$,
	AppObject,
	
	// Collections
	CardsCollection,
	CardAreasCollection,
	
	// Views
	Viewport,
	
	Router
	
){
	
	
	
	/**
	 * Creates application components instances
	 */
	
	var cards 		= new CardsCollection();
	
	var cardAreas 	= new CardAreasCollection();
	
	var viewport 	= new Viewport({
		el:				'#redsofa',
	}).render();
	
	
	
	
	
	
	
	/** 
	 * Exports application's components to the global namespace for console debugging.
	 */
	App = new AppObject({
		viewport: 	viewport,
		cards:		cards,
		cardAreas:	cardAreas
	});
	
	// Main app object handles events!
	// sub components trigger events to the main app.
	
	
	
	
	
	
	
	/**
	 * Drive application events to logic actions
	 */
	
	
	
	
	
	
	/**
	 * Starts up Backbone's history object to handle url parsing and routing
	 */
	
	//Backbone.history.start();
	
	
	
	
	
	
	
	//exampleData();
	
	
		
});