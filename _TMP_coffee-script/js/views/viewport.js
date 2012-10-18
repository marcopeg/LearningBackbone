




define([
	'jquery',
	'backbone',
	'js/views/button'

],function(
	$,
	Backbone,
	Button

){
	
	return Backbone.View.extend({
		
		el: '#app',
		
		render: function() {
			
			// Setup some text into the app
			this.$el.html( $('<p>').html('This is normal JS!') );
			
			// A simple loop to add some contents to the app.
			for ( var i=0; i<=2; i++ ) {
				this.$el.append( $('<p>').html(i) );	
			}
			
			// Append a button
			var button = new Button().appendTo( this.el );
			
			return this;
			
		}
		
				
	});
	
});