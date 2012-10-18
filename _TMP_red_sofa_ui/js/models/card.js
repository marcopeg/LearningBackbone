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
			name: 		null,
			type: 		null,
			size: 		null,
			data: 		null,
			
			// link to related view item
			view: 		null
			
		}
		
		
	});
	
		
});