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
	
	// Sub Views
	'view/form_view',
	'view/list_view',
	'view/list_actions_view',
	'view/title_view'

],function(
	_,
	Backbone,
	
	// Sub Views,
	FormView,
	ListView,
	ListActionsView,
	TitleView

){
	
	return Backbone.View.extend({
		
		initialize: function() {
			
			/**
			 * Create instances of sub-views
			 */
			 
			this.titleView = new TitleView();
			
			this.listView = new ListView({
				collection: this.collection
			});
			
			this.listActionsView = new ListActionsView({
				el:			this.$('.list-actions')
			});
			
			
			this.formView = new FormView({
				el: 		this.$('form'),
				collection: this.collection
			});
			
			
			/**
			 * Drive sub-view's events to internal methods
			 */
			
			this.listActionsView.on( 	'deleteItem', 		this.deleteItem, 	this );
			
			//this.formView.on( 			'clearForm', 		this.clearForm, 	this );
			this.formView.on( 			'formClosed', 		this.formCleared, 	this );
			this.formView.on( 			'saveForm',			this.saveForm, 		this );
			this.formView.on(			'changeData',		this.changeData,	this );
			
			this.listView.on(			'stopExitForm',		this.stopExitForm,	this );
			this.listActionsView.on( 	'stopExitForm', 	this.stopExitForm, 	this );
			this.formView.on(			'stopExitForm',		this.stopExitForm,	this );
			
		},
		
		
		/**
		 * Viewport's render() sets up sub-views of the app.
		 * Sub-views are rendered and their DOM is appended to the app DOM.
		 */
		render: function() {
			
			this.$('[data-view=title]').html( this.titleView.render().el );
			
			this.$('.list').html( this.listView.render().el );
			
			this.listActionsView.render();
			
			return this;
			
		},
		
		
		
		
		
		/**
		 * Logic Generated Events
		 * these methods are triggered form outside the viewport accordling to some data actions.
		 * 
		 * these methods simply propagates to each sub view item.
		 * it is sub-view responsibility to act accordling to the event.
		 */
		
		clearUI: function() {
			
			this.formView.render();
			
		},
		
		addItem: function( model, collection ) {
			
			this.titleView.trigger( 		'addItem', model, collection );
			
			this.listView.trigger( 			'addItem', model, collection );
			
			this.listActionsView.trigger( 	'addItem', model, collection );
			
			this.formView.trigger( 			'addItem', model, collection );
			
		},
		
		editItem: function( model, collection ) {
			
			this.titleView.trigger( 		'editItem', model, collection );
			
			this.listView.trigger( 			'editItem', model, collection );
			
			this.listActionsView.trigger( 	'editItem', model, collection );
			
			this.formView.trigger( 			'editItem', model, collection );
			
		},
		
		removeItem: function( model, collection) {
			
			this.titleView.trigger( 		'removeItem' );
			
			this.listView.trigger( 			'removeItem' );
			
			this.listActionsView.trigger( 	'removeItem' );
			
			this.formView.trigger( 			'removeItem' );
			
		},
		
		
		
		
		/**
		 * sub-views generated events.
		 * these methods are driven in this class initialize() methods and responds
		 * to the user actions.
		 */
		
		deleteItem: function() {
			
			if ( confirm('Do you really want to delete this item?',1) ) {
				
				this.trigger( 'deleteItem' );	
				
			}
			
		},
		
		formCleared: function() {
			
			this.titleView.trigger( 		'clearForm' );
			
			this.listView.trigger(			'clearForm' );
			
			this.listActionsView.trigger( 	'clearForm' );
			
			// bubble event to the top
			this.trigger( 'formCleared' );
			
		},
		
		saveForm: function( m ) {
			
			this.listView.trigger( 'saveForm', m );
			
			// bubble event to the top
			this.trigger( 'saveForm', m );
			
		},
		
		changeData: function( changedM ) {
			
			// Fetch the orginal model from the todos collection
			var originalM = this.collection.get( changedM.id );
			
			// Check if there is some unsaved changes
			changedM.isChanged = ( ! _.isEqual(originalM.attributes,changedM.attributes) );
			
			// propagate the event to sub-views to update the UI according to the changed status.
			this.listView.trigger( 			'changeData', changedM, originalM );
			this.listActionsView.trigger( 	'changeData', changedM, originalM );
			
		},
		
		stopExitForm: function( e ) {
			
			var m = this.collection.getEditModel();
			
			if ( !m || !m.isChanged ) return;
			
			if ( !confirm('Confirm you discard changes?',1) ) e.preventDefault();
			
		}
		
		
				
	});
	
});