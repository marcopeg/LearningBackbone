/**
 * Learning Backbone
 * -> CoffeeScript App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This script configure RequireJS then loads a CoffeeScript version of the bootstrap.
 * 
 */


require({
	
	baseUrl: './',
	
	paths: {
		
		// RequireJS Plugins
		text:				'../_libs/require/text',
		cs:					'../_libs/require/cs',
		
		// Libraries
		jquery: 			'../_libs/jquery/jquery.172',
		underscore:			'../_libs/underscore/underscore.133',
		backbone:			'../_libs/backbone/backbone.092',
		backboneUI:			'../_libs/ui/require-ui',
		'coffee-script':	'../_libs/coffee-script/coffee-script'
		
	},
	
	// Setup Dependencies
	shim: {
		underscore: {
			exports: 	'_'
		},
		backbone: {
			deps: 		[ 'underscore', 'jquery' ],
			exports: 	'Backbone'
		},
		backboneUI: {
			deps:		[ 'backbone' ],
			exports:	'Backbone'
		}
	}

// require the CS bootstrap file!	
},[ 'js/bootstrap' ]);
