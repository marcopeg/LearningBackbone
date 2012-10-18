/**
 * Learning Backbone
 * -> ToDo App
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 * 
 */




define([
	'jquery',
	'backbone',
	
	// Models
	'model/todo'

],function(
	$,
	Backbone,
	
	// Models
	TodoModel

){
	
	return Backbone.Collection.extend({
		
		model: 			TodoModel,
		editModel:		null,
		
		
		
		
		
		
		
		setEditModel: function( m ) {
			
			this.editModel = m.clone();
			
			this.trigger( 'edit', this.editModel, this );
			
		},
		
		getEditModel: function() {
				
			return this.editModel;
				
		},
		
		saveEditModel: function() {
			
			this.get( this.editModel.id ).set( this.editModel.attributes );
			
			this.editModel.isChanged = false;
			
		},
		
		deleteEditModel: function() {
			
			this.remove( this.get( this.editModel.id ) );
			
			this.editModel = null;
			
		},
		
		
		
		
		
		exampleData: function() {
			
			// Add some example items directly to the collection
			// this is not a router UI action
			this.add({ id:1, title:'todo 1'});
			this.add({ id:2, title:'todo 2'});
			this.add({ id:3, title:'todo 3'});
			
		}
			
	});
	
});