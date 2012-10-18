


###
AMD - Dependencies
###

define [ 	'jquery', 	'backbone',		'js/views/button' 		], 
( 			$, 			Backbone,		Button 		) ->


	###
	AMD - The Body
	###
	
	Backbone.View.extend
		
		el: '#app'
		
		render: () ->
			
			# Setup some text into the app
			@$el.html 	$('<p>').html 	"This is Coffee Script!"
			
			# A simple loop to add some contents to the app.
			@$el.append $('<p>').html i for i in [0..2]
			
			# Append a button
			button = new Button().appendTo @el
			
			this
			
			