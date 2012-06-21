/**
 * Learning Backbone
 * -> Collections App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * This is the Collection for our example.
 *
 * The only important thing is to set what Model Object the collection will handle.
 *
 * NOTE: you can't set up this property when istanciating the collection:
 * new MyCollection([],{ model:MyModel });
 * this code does not works!!! 
 * (and caused me headache while trying to get out!!!)
 * 
 */




define([
	'backbone',
	
	// Models
	'model/tweet'

],function(
	Backbone,
	
	// Models
	TweetModel

){
	
	return Backbone.Collection.extend({
		
		model: TweetModel,
		
		initialize: function() {
			
			// Observer Pattern - listen for events triggered on object itself
			// these events are triggered from outside this object! (from FormViews)
			this.on( 'search', this.search );
			this.on( 'cancel', this.cancel );
			
		},
		
		search: function( q ) {
			
			this.reset();
			
			$.getJSON( 
				'http://search.twitter.com/search.json?q='+q+'&rpp=5&callback=?',
				$.proxy(function( search ) {
					
					// If there is no results we need to trigger a custom event to inform other objects.
					// This way other objects (views) can acts according to this event (display some kind of messages)
					if ( !search.results ) {
						
						this.trigger( 'emptySearch' );
						
						return;
						
					}
					
					// Fill the collection with search results.
					this.add( search.results );
					
				},this)
			);
			
		},
		
		cancel: function() {
			
			this.reset([],{ silent:true });
			
		}
		
	});
	
});