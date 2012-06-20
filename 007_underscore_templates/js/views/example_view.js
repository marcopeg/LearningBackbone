/**
 * Learning Backbone
 * -> Underscore Templates
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This is the main view of this example.
 * Other views (DomView, InternalView, JsView, TextView) inherit from this class.
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
		
		
		
		/**
		 * Setup a bind to the model.
		 * when model changes the view's render() method is called.
		 *
		 * third param to the "on()" methods teach to use view itself as context for the callback.
		 */
		initialize: function() {
			
			this.model.on( 'change', this.render, this );
			
		},
		
		
		/**
		 * Render use the compiled template to change the source of the target DOM node.
		 * children classes will define what "this.template" will be!
		 *
		 * safeData() fetch data from model and send it to the template in a safe way. read on!
		 */
		render: function() {
			
			this.$el.html( this.template( this.safeData() ) );
			
			return this;
			
		},
		
		
		/**
		 * this method come from these article:
		 * http://backbonefu.com/2011/11/handling-variable-is-not-defined-with-underscore-template-engine/
		 *
		 * there is an Underscore::template() limit so you can't use undefined variables in a template directly
		 * but you can use undefined properties.
		 *
		 * this method wraps model's JSONed data into a namespace called "data".
		 * to refer to the person's name in templates we will use "data.name".
		 */
		safeData: function() {
			
			return {
				
				data: this.model.toJSON()	
				
			};
			
		}
		
		
	});
	
});