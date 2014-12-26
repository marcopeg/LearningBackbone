/**
 * Learning Backbone
 * -> Syncing Models with Views
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
 * This is the main module of our app.
 * This example is so simple that does not require an AppView to be correctly handled.
 *
 * This code block acts as an MVC controller to load and configure sub-module block.
 * These sub-modules are models and views.
 *
 */

define([
	
	// Frameworks
	'jquery',
	
	// Models,
	'model/person',
	
	// Views
	'view/form_view',
	'view/show_view',
	
	// Templates
	'text!templates/show1_template.html',
	'text!templates/show2_template.html'

],function(

	// Frameworks
	$,
	
	// Models
	PersonModel,
	
	// Views
	FormView,
	ShowView,
	
	// Templates
	Show1Template,
	Show2Template
	
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
	 var show1 = new ShowView({
		el:			$('#show1'),
		model: 		person,
		template:	Show1Template
	});
	
	var show2 = new ShowView({
		el:			$('#show2'),
		model: 		person,
		template:	Show2Template
	});
	
	
});