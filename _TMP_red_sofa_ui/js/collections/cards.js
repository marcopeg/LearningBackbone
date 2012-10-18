/**
 * Learning Backbone
 * -> Images Collection
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 * 
 */



/**
 * 
 */

define([
	
	// Frameworks
	'backbone',
	
	'model/card'
	
],function(

	// Frameworks
	Backbone,
	
	CardModel
){
	
	
	return Backbone.Collection.extend({
		
		model: CardModel
		
	});
	
		
});