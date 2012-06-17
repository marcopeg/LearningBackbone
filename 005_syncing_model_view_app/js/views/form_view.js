define([
	'backbone',
	'underscore',
	'jquery'
	
],function(
	Backbone,
	_,
	$
	
){
	
	return Backbone.View.extend({
		
		events: {
			"submit" : "onSubmit"
		},
		
		onSubmit: function( e ) {
			
			e.preventDefault();
			
			this.model.set({
				name:		this.$('input[name=name]').val(),
				surname:	this.$('input[name=surname]').val()
			});
			
		}
		
	});
	
});