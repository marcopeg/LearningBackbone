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
	
	// Sub Views
	'view/list_item_view'

],function(
	_,
	Backbone,
	$,
	
	// Sub Views
	ListItemView

){
	
	return Backbone.View.extend({
		
		tagName: 'ul',
		
		/**
		 * Drive events to actions
		 */
		initialize: function() {
			
			this.on( 'addItem', 	this.addItem, 		this );
			this.on( 'editItem',	this.setEdit, 		this );
			this.on( 'changeData',	this.changeData,	this );
			this.on( 'saveForm',	this.saveForm,		this );
			this.on( 'clearForm',	this.unsetEdit,		this );
			
		},
		
		events: {
			
			'click a' : 'onClick'
			
		},
		
		render: function() {
			
			this.$el.html('');
			this.collection.each( this.addItem );
			
			return this;
			
		},
		
		onClick: function(e) {
			
			this.trigger( 'stopExitForm', e );
			
		},
		
		setEdit: function( m ) {
			
			this.unsetEdit();
			
			this.$('#todo-'+m.id).addClass('active');
			
		},
		
		unsetEdit: function() {
			
			this.$('.active.changed').removeClass('changed');
			this.$('.active').removeClass('active');
			
		},
		
		addItem: function( m ) {
			
			var newItem = new ListItemView({
				model: 		m,
				collection: this.collection
			}).render();
			
			this.$el.append( newItem.el );
			
		},
		
		
		/**
		 * If some data was not saved we update the UI to display this
		 * status.
		 */
		changeData: function( changedM, originalM ) {
			
			if ( changedM.isChanged ) {
				
				this.$('#todo-'+changedM.id).addClass('changed');
				
			} else {
				
				this.$('#todo-'+changedM.id).removeClass('changed');
				
			}
			
		},
		
		
		/**
		 * when a save action happens we resets all "changed" status to the UI
		 */
		saveForm: function() {
			
			this.$('.changed').removeClass('changed');
			
		}
				
	});
	
});