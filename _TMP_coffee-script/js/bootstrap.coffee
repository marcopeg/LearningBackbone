###
App Bootstrap
###


define [	'backbone',		'js/models/person',		'cs!js/views/viewport'
],( 		Backbone, 		Person,					Viewport 
)->
	
	person = new Person
	
	viewport = new Viewport().render()
	
