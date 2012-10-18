
define([
	'backbone',
	'js/models/person',
	'js/views/viewport'
	
],function(
	Backbone,
	Person,
	Viewport
	
){
	
	var person = new Person();
	
	var viewport = new Viewport({
		
		model: person
		
	}).render();

	
});