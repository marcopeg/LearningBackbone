/**
 * Learning Backbone
 * -> Syncing Models with Views
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * This view component display some data into somewere DOM element by compiling an Underscore template.
 * Data comes form a model.attributes object.
 * 
 * The model is given while instanciating this View object 
 * (dependency injection: http://it.wikipedia.org/wiki/Dependency_injection)
 *
 * This view belongs to model's events to change the content of the target DOM item according to the model's status.
 * If the model is empty it display an instruction message (the default content of the target)
 * If the model is full of data it display a simple table with model's data.
 *
 * The "instruction content" lyes into the document source because it is a very simple string.
 * View's initialization fetch this content from DOM and store it internally to be used when model resets!
 */



define([
	'backbone',
	'underscore',
	'jquery',
	
	// Template
	'text!templates/show_template.html'
	
],function(
	Backbone,
	_,
	$,
	
	Template
){
	
	return Backbone.View.extend({
		
		// Internal custom property.
		// It is filled by the "initialize()" method and will contain the initial text content of the view's target element.
		_initialHTML: '',
		
		
		
		initialize: function() {
			
			// Stores the initial contents of the target DOM element to be used by the model::reset event listener.
			this._initialHTML = $(this.el).html();
			
			// bindAll() works like to set a jQuery proxy()
			// it means all methods exposed as arguments of the "bindAll()" always receives
			// the first argument as context!
			_.bindAll( this, 'render', 'onModelReset' );
			
			// bind the model's change event to the view's render() method.
			// thanks to _.bindAll() before "this.render" receive the view itself as execution context
			this.model.on( "change", this.render );
			
			// bind the model's reset event to the view's custom behavior.
			this.model.on( "reset", this.onModelReset );
			
		},
		
		render: function() {
			
			// compile the text template with the model's updated attributes.
			var CompiledView = _.template( Template, this.model.attributes );
			
			$(this.el).html( CompiledView );
			
		},
		
		
		/**
		 * When the model resets the view restores it's initial contents stored by the "initialize()" method.
		 */
		onModelReset: function() {
			
			$(this.el).html( this._initialHTML );
			
		}
		
	});
	
});