/**
 * Learning Backbone
 * -> Validating Models
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 */



define(['backbone'],function(Backbone){
	
	return Backbone.Model.extend({
		
		defaults: {
			name: 		'Mario',
			surname: 	'Rossi'
		},
		
		initialize: function() {
			
			// Bind a custom event to an internal method (reset).
			// this way any object need to reset this model will trigger a "doReset" event to this model
			// and this instruction bind this event to che correct internal method.
			this.on( 'doReset', this.reset );
			
		},
		
		validate: function( attrs ) {
			
			var errors = [];
			
			if ( !attrs.name.length ) 		errors.push('name');
			if ( !attrs.surname.length ) 	errors.push('surname');
			
			if ( errors.length ) return errors;
			
		},
		
		reset: function() {
			
			// Clear and sets default valies without trigger validation and events!
			this.clear({ silent:true });
			this.set( this.defaults, { silent:true });
			
			// Trigger a custom event for the method itself.
			this.trigger( "reset" );
			
		}
		
	});
	
	
});