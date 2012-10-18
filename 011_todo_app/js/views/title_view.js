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
	
	'text!templates/title_view.html'

],function(
	_,
	Backbone,
	$,
	
	Template

){
	
	return Backbone.View.extend({
		
		template: _.template( Template ),
		
		initialize: function() {
			
			this.on( 'editItem',		this.render,		this );
			this.on( 'removeItem',		this.render,		this );
			this.on( 'clearForm',		this.render,		this );
			
		},
		
		
		render: function( m ) {
			
			if ( m ) {
				
				m.on( 'change', this.render, this );
				
				this.$el.html( this.template( m.toJSON() ) );
			
			} else {
				
				this.$el.html( '' );
				
			}
			
			return this;
			
		}
				
	});
	
});