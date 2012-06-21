/**
 * Learning Backbone
 * -> Collections App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
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
			
			// Binds collection's events to internal rendering functions.
			this.collection.on( 'add', this.addItem, this );
			this.collection.on( 'reset', this.render, this );
			this.collection.on( 'emptySearch', this.emptySearch, this );
			this.collection.on( 'cancel', this.cancel, this );
			
		},
		
		
		/**
		 * the "render()" method simply sets up a welcome waiting message for the list.
		 * the real scope for this view is to display items but item comes binded with the collection!
		 */
		render: function() {
			
			// set a waiting message.
			this.$el.fadeIn();
			this.$el.html('<li class="waiting label label-info" style="min-height:1em">Waiting for tweets to display...</li>');
			
		},
		
		
		/**
		 * Abort the search results panel
		 */
		cancel: function() {
			
			this.$el.slideUp(function(){
				
				$(this).html('');
				
				$(this).hide();
				
			});
			
		},
		
		
		/**
		 * Remove any waiting message and append a warning message.
		 * how can I do this thing better=
		 */
		emptySearch: function() {
			
			// Fade out and remove.
			this.$('.waiting').fadeOut($.proxy(function(){
				this.$('.waiting').remove();
				
				// Append and display the new message.
				var $msg = $('<li class="waiting label label-warning" style="min-height:1em">No tweets found!</li>').hide();
				this.$el.append($msg);
				$msg.fadeIn();
				
			},this));
			
		},
		
		addItem: function( tweetModel ) {
			
			// remove waiting message if exists.
			if ( this.$('.waiting').length ) this.$('.waiting').slideUp(function(){ $(this).remove(); });
			
			// create an instance of the sub-view to render the single tweet item.
			var tweetItem = new TweetView({
				model: 		tweetModel
			});
			
			// append sub-view DOM node to the view's node.
			this.$el.append( tweetItem.el );
			
		}
		
	});
	
});