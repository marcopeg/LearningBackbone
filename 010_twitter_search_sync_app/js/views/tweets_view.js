/**
 * Learning Backbone
 * -> Collections App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * This object expose a very "stressed" version of the Observe Pattern.
 * Even internal methods are called triggering and listening events.
 *
 * This is not the more performan strategy for this app but it is intended to be a learning code!
 *
 */






define([
	'underscore',
	'backbone',
	
	// Sub Views
	'view/tweet_view'

],function(
	_,
	Backbone,
	
	// Sub Views
	TweetView

){
	
	return Backbone.View.extend({
		
		initialize: function() {
			
			// Observe Pattern - listen for Collection's events
			// Binds collection's events to internal rendering functions.
			this.collection.on( 'searchStart', 	this.searchStart, 	this );
			this.collection.on( 'reset', 		this.searchResults, this );
			this.collection.on( 'cancel', 		this.cancel, 		this );
			
			// Observe Pattern - listen for itself events
			// Yes, you can use the Observe Pattern for internal events dispatch too.
			// This way some else component can listen the same events and use them as hooks for extensions!
			this.on( 'emptySearch', this.emptySearch, 	this );
			this.on( 'addItem',		this.addItem,		this );
			
		},
		
		
		/**
		 * Just empty pre-existant search results and 
		 */
		searchStart: function( q ) {
			
			// set a waiting message.
			this.$el.fadeIn();
			this.$el.html('<li class="waiting label label-info" style="min-height:1em">Searching Twitter for "'+q+'"...</li>');
			
		},
		
		
		/**
		 * Handle search results and dispacth sub-events to populate the view if there is some data
		 * or trigger events if empty search happens.
		 */
		searchResults: function() {
			
			// remove waiting message if exists
			if ( this.$('.waiting').length ) this.$('.waiting').slideUp(function(){ $(this).remove() });
			
			// Handle an empty search event
			// Implements Observe Pattern
			if ( !this.collection.length ) return this.trigger( 'emptySearch' );
			
			// Populate the view with result models
			// Implements Observe Pattern
			this.collection.each(function( model ){
				
				this.trigger( 'addItem', model );
				
			}, this );
			
		},
		
		/**
		 * Add items to the tweets list.
		 * It uses a TweetModel's related sub-view to render a single tweet item.
		 *
		 * NOTE: each tweet sub-view is binded to it's model so can handle model's events
		 * and - may be - re-render according to data updates!
		 */
		addItem: function( tweetModel ) {
			
			// create an instance of the sub-view to render the single tweet item.
			var tweetItem = new TweetView({
				model: 		tweetModel
			}).render();
			
			// append sub-view DOM node to the view's node.
			this.$el.append( tweetItem.el );
			
		},
		
		
		/**
		 * Display a warning message for the empty search!
		 */
		emptySearch: function() {
			
			var $msg = $('<li class="waiting label label-warning" style="min-height:1em;display:none">No tweets found!</li>');
			this.$el.append($msg);
			$msg.slideDown();
			
		},
		
		
		/**
		 * Abort the search results panel
		 */
		cancel: function() {
			
			this.$el.slideUp(function(){
				
				$(this).html('');
				
				$(this).hide();
				
			});
			
		}
		
	});
	
});