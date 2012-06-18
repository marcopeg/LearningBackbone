/**
 * Learning Backbone
 * -> Syncing Models with Views
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * This view listen for the form to be submitted and updates the model
 * with form data. 
 *
 */


define([
	'backbone',
	'jquery'
	
],function(
	Backbone,
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