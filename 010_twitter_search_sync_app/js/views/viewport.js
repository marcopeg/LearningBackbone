/**
 * Learning Backbone
 * -> TwitterSearch App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */






define([
	'underscore',
	'backbone',
	
	// Sub Views
	'view/title_view',
	'view/form_view',
	'view/tweets_view'

],function(
	_,
	Backbone,
	
	// Sub Views
	TitleView,
	FormView,
	TweetsView

){
	
	return Backbone.View.extend({
		
		initialize: function() {
			
			this.titleView = new TitleView({
				el: 		this.$('h3'),
				collection: this.collection
			});
			
			this.formView = new FormView({
				el: 		this.$('form'),
				collection: this.collection
			});
			
			this.tweetsView = new TweetsView({
				el: 		this.$('.tweets'),
				collection: this.collection
			});
			
		},
		
		render: function() {
			
			this.titleView.render();
			
			this.formView.render();
			
			this.tweetsView.render();
			
			return this;
			
		}
				
	});
	
});