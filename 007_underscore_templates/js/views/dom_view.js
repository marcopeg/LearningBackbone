/**
 * Learning Backbone
 * -> Underscore Templates
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */



define([
	'backbone',
	'underscore',
	'jquery',
	
	// Views
	'view/example_view'
	
],function(
	Backbone,
	_,
	$,
	
	// Views
	ExampleView
	
){
	
	return ExampleView.extend({
		
		
		/**
		 * Here we need to override the "initialize()" method because we need to 
		 * fetch the template source from a DOM item.
		 *
		 * We assume that the template is contained into the target element (this.$el)!
		 */
		initialize: function() {
			
			// fetch the target node content.
			// jQuery::html() will return a string with "<>" replaced by entities...
			var templateSource = this.$el.html();
			
			// ... so we need a trick to obtain a good template source!
			templateSource = $('<textarea/>').html( templateSource ).val();
			
			// here we use Underscore to compile the template.
			// this.template become a function who takes data as the only argument.
			// this.template is used in parent::render() method to render model's data.
			this.template = _.template( templateSource );
			
			// we do not care about empty the target element...
			// render() method will do this stuff!
			//this.$el.html('');
			
			
			
			// call parent class logics
			ExampleView.prototype.initialize.call( this );
			
		}
		
	});
	
});