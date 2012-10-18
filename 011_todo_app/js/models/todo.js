/**
 * Learning Backbone
 * -> ToDo App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This is the TodoModel.
 * Instances of this object will handle tweets data.
 *
 * NOTE: core method "toJSON()" is overridden to encapsulate model's property into a
 * "todo" namespace to make easy to use undefined properties into the template! 
 * 
 */



define([
	'backbone'

],function(
	Backbone

){
	
	return Backbone.Model.extend({
		
		defaults: {
			title: 		'new todo',
			content: 	'',
			status: 	'p', // [ p=pending, d=done ]
		},
		
		initialize: function() {
			
			// define an auto-generated ID for the new instance.
			if ( !this.id ) {
				this.id = new Date().getTime();
				this.attributes.id = this.id;
			}
			
			
		},
		
		toJSON: function() {
			
			return {
				
				todo: Backbone.Model.prototype.toJSON.call( this )
				
			};
			
		}
		
	});
	
});