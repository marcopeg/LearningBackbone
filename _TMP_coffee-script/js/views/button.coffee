###
This is a Button prototype
###

define [ 'jquery', 'backbone' ], ( $, Backbone ) ->
	
	Backbone.View.extend
		
		el: 'a'
		className: 'btn'
		
		render: () ->
			
			@$el.html('button')
			
			this
		
		
		renderTo: ( target, renderOptions ) ->
			
			$(renderOptions).html @render renderOptions
			
			this
			
		appendTo: ( target, renderOptions ) ->
			
			$(renderOptions).append @render renderOptions
			
			this