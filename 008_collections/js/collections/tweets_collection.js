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
		
		model: TweetModel
		
	});
	
});