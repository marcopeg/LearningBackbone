/**
 * Learning Backbone
 * -> Hello World Model
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This module define a custom model.
 * A model is the Backbone way to handle data. 
 * 
 */



define(['backbone'],function(Backbone){
	
	var UserModel = Backbone.Model.extend({
		
		defaults: {
			
			name: 'Unknown User'
			
		}
		
	});
	
	return UserModel;
	
});