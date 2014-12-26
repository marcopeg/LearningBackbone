/**
 * Learning Backbone
 * -> Hello World Events
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 */





/**
 * This example extends the 001{HelloWorld} configuration adding a rule
 * for the new "models" folder.
 *
 * Models are the Backbone way to handle data structure leafs.
 *
 */
require.config({
	
	baseUrl: './',
	
	paths: {
		
		// Libraries
		text:		'../libs/require/text',
		jquery: 	'../libs/jquery/jquery.172',
		underscore:	'../libs/underscore/underscore.133',
		backbone:	'../libs/backbone/backbone.092',
		
		// Application Places
		view:		'js/views'
		
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
 * This is the main module of our app.
 * All interface logics are defined in a Custom View Component
 *
 */

// Dependencies Requests
define([
	'view/app_view'
	
// Dependencies Objects
],function(
	AppView

// Main Module Logic
){
	
	var app = new AppView;
		
});