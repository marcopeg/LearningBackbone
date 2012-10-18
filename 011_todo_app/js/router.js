/**
 * Learning Backbone
 * -> Todo App
 *
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 */






define([
	'underscore',
	'backbone',
	
	'vendor/history_manager'

],function(
	_,
	Backbone,
	
	HistoryManager

){
	
	return Backbone.Router.extend({
		
		routes: {
			'add'		: 'add',
			'edit'		: 'edit',
			'edit/:id' 	: 'edit',
			'save'		: 'save',
			'*actions' 	: 'defaultRoute'
		},
		
		history: null,
		
		initialize: function( cfg ) {
			
			// sets up the internal history manager
			this.history 		= new HistoryManager(this);
			
			// import todos collection property
			// actions belong to the todos collection!
			this.todos = cfg.collection;
						
		},
		
		defaultRoute: function() {
			
			this.trigger( 'clearUI' );
			
		},
		
		
		
		/**
		 * Creates a new ToDo and append to the collection.
		 */
		add: function() {
			
			var m = new this.todos.model;
			
			this.todos.add( m );
			
			this.go( '#/edit/' + m.get('id') );
			
		},
		
		
		
		
		/**
		 * Fetch a model from the collection using it's id and sets it up to the editing mode.
		 * UI listen to the todo's triggered event to updates according!
		 */
		edit: function( id ) {
			
			// Fetch requested model and check integrity
			var m = this.todos.get(id);
			
			if ( !m ) {
				
				this.trigger( 'modelNotFound' );
				
				return false;
				
			}
			
			this.todos.setEditModel( m );
			
		},
		
		
		
		
		
		
		
		/**
		 * Url handling utilities
		 */
		
		go: function ( to ) {
			
			this.navigate( to, { trigger:true } );
			
		},
		
		urlHome: function() {
			
			this.navigate( '#/' );
			
		},
		
		goHome: function() {
			
			this.go( '#/' );
			
		},
				
	});
	
});