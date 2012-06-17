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
		text:		'../_libs/text',
		jquery: 	'../_libs/jquery',
		underscore:	'../_libs/underscore',
		backbone:	'../_libs/backbone',
		
		// Application Places
		view:		'js/views'
		
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