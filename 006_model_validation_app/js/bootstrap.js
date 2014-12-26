/**
 * Learning Backbone
 * -> Validating Models
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
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
		view:		'js/views',
		model:		'js/models'
		
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
	'jquery',
	
	// Models,
	'model/person',
	
	// Views
	'view/form_view',
	'view/show_view'

],function(

	// Frameworks
	$,
	
	// Models
	PersonModel,
	
	// Views
	FormView,
	ShowView
	
){
	
	// The PersonModel istance will contain some data and trigger events when
	// this data changes.
	var person = new PersonModel;
	
	// The FormView handle form submission.
	// fetch data form form's field and updates the model.
	var form = new FormView({
		el: 	$("form"),
		model: 	person
	});
	
	// Show(x) views display some UI to the app.
	// show(x) belong to the PersonModel instance to display correct data.
	 var show = new ShowView({
		el:			$('#show'),
		model: 		person
	});
	
});