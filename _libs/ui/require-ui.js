




/**
 * !!! GLOBAL NAMESPACE POLLUTION !!!
 * these globals are used to configure AMD modules BackboneUI depends.
 */
if ( !window.__backboneUiAmdBackbone ) 		window.__backboneUiAmdBackbone 		= 'backbone';
if ( !window.__backboneUiAmdUnderscore ) 	window.__backboneUiAmdUnderscore 	= 'underscore';
if ( !window.__backboneUiAmdJQuery ) 		window.__backboneUiAmdJQuery 		= 'jquery';


require.config({
	
	// Change this to configure your UI folder location
	baseUrl: '../_libs/ui/',
	
	paths: {
		
	},
	
	shim: {
		
		'backbone-ui' : {
			deps: [ 'underscore', window.__backboneUiAmdBackbone, 'jquery' ]
		},
		
		'backbone-ui-xtype': {
			deps: [ 'backbone-ui' ]
		},
		
		'backbone-ui-view': {
			deps: [ 'backbone-ui' ]	
		},
		
		'backbone-ui-component': {
			deps: [ 'backbone-ui-view', 'backbone-ui-xtype' ]
		},
		
		'backbone-ui-button': {
			deps: [ 'backbone-ui-component' ]
		}
		
	}
	
});

define([
	
	'backbone',
	
	// UI Extensions (also loaded as dependencies for classes)
	'backbone-ui',
	'backbone-ui-view',
	'backbone-ui-xtype',
	
	// UI Objects
	'backbone-ui-component',
	'backbone-ui-button'

],function( Backbone ){ return Backbone; });