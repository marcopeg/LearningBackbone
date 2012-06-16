/**
 * Learning Backbone
 * -> Hello World Model
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
		view:		'js/views',
		model:		'js/models',
		plugin:		'js/plugins'
		
	}
	
});



/**
 * This is the main module of our app.
 *
 * This logic code uses:
 * - a Backbone Model (UserModel)
 * - a Backbone View (HelloWorldView)
 * - a text template loaded via Ajax
 *
 * The flow is:
 * - ask user for it's name
 * - set this information into a UserModel instance
 * - compile the template with the model's data
 * - render the View
 *
 *
 * NOTE ABOUT CODING:
 * while your app grows up your AMD may depends on so much things and write them in a single row
 * became difficult to read!
 * In this file i use a vertical list of dependencies and internal objects to enhance core readability.
 *
 */

// Dependencies Requests
define([
	'model/user_model',
	'view/hello_world_view',
	'text!templates/hello_world.html'
	
// Dependencies Objects
],function(
	UserModel,
	HelloWorldView,
	Template

// Main Module Logic
){
	
	// Ask user for its name
	var username = prompt('Please insert your name:');
	
	// Setup the user instance with the username prompted by the user!
	var userModelInstance = new UserModel({
		
		name: username
		
	});
	
	// Compile the template with user's data.
	// This is an Underscore stuff. (http://underscorejs.org/#template)
	//
	// The second parameter passed is the DATA object.
	// Underscore fetch dynamic data from this store.
	//
	// We need to reference objects with the "name" used in our template!!
	var CompiledTemplate = _.template(Template,{
		
		user: userModelInstance
		
	});
	
	// Just render the view.
	HelloWorldView.render( CompiledTemplate );
	
});