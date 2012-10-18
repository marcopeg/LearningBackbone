/**
 * Learning Backbone
 * -> ToDo App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */







define([
	'underscore',
	'backbone'

],function(
	_,
	Backbone

){
	
	return Backbone.View.extend({
		
		initialize: function() {
			
			this.model = null;
			
			this.field = {
				target: 	this.$el.find('.target'),
				width: 		this.$el.find('.width'),
				height:		this.$el.find('.height'),
				top:		this.$el.find('.top'),
				left:		this.$el.find('.left')
			}
			
		},
		
		events: {
			
			'click a.close' : 'closePanel',
			'change input'	: 'updateForm',
			
		},
		
		render: function( model ) {
			
			this.model = model;
			//this.model.on( 'change', this.updateForm, this );
			
			if ( this.$el.is(':hidden') ) this.$el.slideDown();
			
			console.log("render");
			
			return this;
			
		},
		
		updateForm: function() {
			
			if ( !this.model ) return;
			
			this.field.width.val( 		this.model.get('width') );
			this.field.height.val( 		this.model.get('height') );
			this.field.top.val( 		this.model.get('top') );
			this.field.left.val( 		this.model.get('left') );
			
		},
		
		updateModel: function() {
			
			if ( !this.model ) return;
			
			this.model.set({
				width:		this.field.width.val(),
				height:		this.field.height.val(),
				top:		this.field.top.val(),
				left:		this.field.left.val()
			});
			
		},
		
		closePanel: function(e) {
			
			e.preventDefault();
			
			this.$el.slideUp();
			
			if ( this.model ) this.model.set( 'active', false );
			
		}
			
	});
	
});