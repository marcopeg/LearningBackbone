/**
 * Learning Backbone
 * -> Underscore Templates
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */


define([
	'backbone'
],function(
	Backbone
){
	
	return Backbone.Model.extend({
		defaults: {
			name: 		'Marco',
			surname: 	'Pegoraro',
			age:		'31'
		}
	});
	
});