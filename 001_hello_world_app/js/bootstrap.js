/**
 * Learning Backbone
 * -> Hello World
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 */





/**
 * RequireJS often needs to be configured to set up where to look for certain modules.
 * In this examples package all examples shares some js libraries.
 *
 * In example's modules we need to use these libraries and want to refer them via simple name.
 * /libs/jquery.js -> "jquery"
 *
 * the "paths" key allow to teach RequireJs to where some named libraries lies.
 * when we will ask for a define block to depend on "jquery" RequireJs will use
 * the paths.jquery rule to load jquery code.
 *
 * the "baseUrl" key teach RequireJS to where starts to use internal paths logics.
 *
 */
require.config({
	
	baseUrl: './',
	
	paths: {
		
		// Libraries
		text:		'../libs/require/text',
		jquery: 	'../libs/jquery/jquery.172',
		underscore:	'../libs/underscore/underscore.133',
		backbone:	'../libs/backbone/backbone.092'
		
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
 * this piece of code is a "module" who depends on jquery.
 * 
 * the "define" wrapper ensures that jquery is loaded end executed before to
 * execute wrapped code.
 *
 * the "define" block is also known as "AMD - asyncronous module definition"
 * http://requirejs.org/docs/whyamd.html
 *
 */
define(['jquery'],function($){
	
	// Center text vertically.
	$('body').css('paddingTop', $(window).height()/2 - $('body').height() );
	
	// Apply some funny effetcs.
	$('body')
		.animate({ fontSize: '40pt' },1000)
		.animate({ fontSize: '10pt' },1000)
	;
	
});