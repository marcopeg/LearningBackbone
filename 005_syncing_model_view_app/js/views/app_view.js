/**
 * Learning Backbone
 * -> Syncing Models with Views
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 */



define([
	
	// Frameworks
	'jquery',
	'backbone',
	'underscore',
	
	// Models,
	'model/person',
	
	// Views
	'view/form_view',
	'view/show_view',
	
	// Templates
	'text!templates/show1_template.html',
	'text!templates/show2_template.html'

],function(

	// Frameworks
	$,
	Backbone,
	_,
	
	// Models
	Person,
	
	// Views
	FormView,
	ShowView,
	
	// Templates
	Show1Template,
	Show2Template
	
){
	
	return Backbone.View.extend({
		
		
		/**
		 * View Internal Properties
		 */
		
		person:		null,
		form:		null,
		show1:		null,
		show2:		null,
		
		
		/**
		 * View's overridings
		 */
		
		el: $('#app'),
		
		initialize: function() {
			
			this.person = new Person;
			
			this.form = new FormView({
				el: 	this.$("form"),
				model: 	this.person
			});
			
			this.show1 = new ShowView({
				el:			this.$('#show1'),
				model: 		this.person,
				template:	Show1Template
			});
			
			this.show2 = new ShowView({
				el:			this.$('#show2'),
				model: 		this.person,
				template:	Show2Template
			});
			
		}
		
		
	});
	
	
});