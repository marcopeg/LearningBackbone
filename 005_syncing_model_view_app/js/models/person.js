/**
 * Learning Backbone
 * -> Syncing Models with Views
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * PersonModel
 * This model rapresents a single person information structure handling name, surname and even more data.
 * 
 * In this example model does not do much stuff... We will enhance our example in next example with validation!
 */



define(['backbone'],function(Backbone){
	
	return Backbone.Model.extend({
		
		defaults: {
			name: 		'Mario',
			surname: 	'Rossi'
		}
		
	});
	
	
});