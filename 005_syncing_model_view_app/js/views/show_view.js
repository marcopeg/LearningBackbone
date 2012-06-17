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