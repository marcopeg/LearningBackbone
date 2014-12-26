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
	'collection/todos_collection',
	
	// Views
	'view/viewport',
	
	'js/router'

],function(

	// Frameworks
	Backbone,
	$,
	
	// Collections
	TodosCollection,
	
	// Views
	Viewport,
	
	Router
	
){
	
	
	
	/**
	 * Creates application components instances
	 */
	var todos = new TodosCollection;
	
	var router = new Router({
		collection:		todos		
	});
	
	var viewport = new Viewport({
		el:				'#todo',
		collection:		todos
	}).render();
	
	
	
	
	
	
	
	
	/**
	 * Drive application events to logic actions
	 */
	
	router.on(			'clearUI',			viewport.clearUI,			viewport );
	
	todos.on( 			'add', 				viewport.addItem, 			viewport );
	
	todos.on( 			'remove', 			viewport.removeItem, 		viewport );
	
	todos.on( 			'edit', 			viewport.editItem, 			viewport );
	
	viewport.on( 		'saveForm', 		todos.saveEditModel,		todos );
	
	viewport.on(		'deleteItem',		todos.deleteEditModel,		todos );
	
	
	
	
	/**
	 * Starts up Backbone's history object to handle url parsing and routing
	 */
	todos.exampleData();
	Backbone.history.start();
	
	
	
	
	/** 
	 * Exports application's components to the global namespace for console debugging.
	 */
	App = {
		todos: 		todos,
		viewport: 	viewport,
		router: 	router	
	};
	
	
	
	
	
		
});