/**
 * Learning Backbone
 * -> Syncing Models with Views
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * This view component display some data into somewere DOM element by compiling a template with some data.
 * Data comes form a model.attributes object.
 * 
 * Both model and template are sets when instanciating the View Object.
 * 
 * The "model" propery is particular and it is referenced automagically as "this.model" property.
 * The "template" property is unknown to the Backbone's View object so it is left into the "this.options" object.
 * http://backbonejs.org/#View-constructor
 * 
 * The important thing in this code is the BINDING from model's "change" event to the view's "render" method.
 * Each time model is changed the render() method is triggered causing the UI to be always up to date.
 *
 */



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
		
		initialize: function() {
			
			// bindAll() works like to set a jQuery proxy()
			// it means all methods exposed as arguments of the "bindAll()" always receives
			// the first argument as context!
			_.bindAll( this, 'render' );
			
			// bind the model's change event to the view's render() method.
			// thanks to _.bindAll() before "this.render" receive the view itself as execution context
			this.model.bind( "change", this.render );
			
			this.render();
			
		},
		
		render: function() {
			
			// compile the text template with the model's updated attributes.
			var CompiledView = _.template( this.options.template, this.model.attributes );
			
			$(this.el).html( CompiledView );
			
		}
		
	});
	
});