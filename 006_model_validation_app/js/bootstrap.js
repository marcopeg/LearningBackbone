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
		text:		'../_libs/text',
		jquery: 	'../_libs/jquery',
		underscore:	'../_libs/underscore',
		backbone:	'../_libs/backbone',
		
		// Application Places
		view:		'js/views',
		model:		'js/models'
		
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