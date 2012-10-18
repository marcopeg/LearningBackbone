/**
 * Learning Backbone
 * -> Image Models
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 * 
 */



/**
 * 
 */

define([
	
	// Frameworks
	'backbone'
	
],function(

	// Frameworks
	Backbone	
){
	
	
	return Backbone.Model.extend({
		
		defaults: {
			
			top: 		0,
			left:		0,
			width:		0,
			height:		0,
			
			// belongsTo relation to the CardModel
			card:		null,
			
			active:		false
			
		}
		
	});
	
		
});