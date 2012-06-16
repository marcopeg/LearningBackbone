/**
 * Learning Backbone
 * -> Hello World View
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 */





/**
 * This example extends the 001{HelloWorld} configuration adding 2 new pats.
 * - view
 * - plugin
 *
 * These rules are my way to organize my code.
 * My apps may have some "views", "models", "templates"... these are folders
 * to contains lot of files.
 *
 * But when i need a single "view" I won't refers to with a plural name so I
 * create these custom paths.
 *
 * ['view/file_name'] -> {baseUrl}/js/views/{file_name}
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
		view:		'js/views',
		plugin:		'js/plugins'
		
	}
	
});



/**
 * This is the main module of our app.
 * It depends boot on libraries (jquery) and app's related sub-modules (view and template)
 *
 * "view/hello_world"
 * this dependecy is solved usind the config::paths "view" key to load "js/views/hello_world.js" file
 * 
 * View's source return an instanciated view object.
 * "View Object" is a Backbone extension. (look at the view's source file).
 * We use it's render() method with the text template loaded.
 *
 * Text template is a simple string (html source) loaded via AJAX.
 * Here i use the "text" plugin of requireJS.
 *
 * NOTE: "templates/hello_worls.html" path refers to the config::baseUrl.
 *
 */
define(['jquery','view/hello_world','text!templates/hello_world.html'],function($,View,Template){
	
	View.render( Template );
	
});