/**
 * Learning Backbone
 * -> Collections App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This is the TweetModel.
 * Instances of this object will handle tweets data.
 *
 * NOTE: core method "toJSON()" is overridden to encapsulate model's property into a
 * "tweet" namespace to make easy to use undefined properties into the template! 
 * 
 */



define([
	'backbone'

],function(
	Backbone

){
	
	return Backbone.Model.extend({
		
		toJSON: function() {
			
			return {
				
				tweet: Backbone.Model.prototype.toJSON.call( this )
				
			};
			
		}
		
	});
	
});