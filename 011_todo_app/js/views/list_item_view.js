/**
 * Learning Backbone
 * -> ToDo App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */






define([
	'underscore',
	'backbone',
	'jquery',
	
	'text!templates/list_item_view.html'

],function(
	_,
	Backbone,
	$,
	
	Template

){
	
	return Backbone.View.extend({
		
		template: _.template( Template ),
		
		tagName: 	'li',
		className: 	'clearfix',
		
		initialize: function() {
			
			this.model.on( 'change', this.render, this );
			this.model.on( 'remove', this.onDelete, this );
						
		},
		
		render: function() {
			
			var active = this.$el.hasClass('active');
			
			this.$el.html( this.template(this.model.toJSON()) );
			
			this.$el.attr( 'id', 'todo-'+this.model.get('id') );
			
			if ( active ) this.$el.addClass('active');
			
			return this;
			
		},
		
		onDelete: function( m ) {
			
			this.$el.slideUp(function(){
				
				$(this).remove();
				
			});
			
		}
				
	});
	
});