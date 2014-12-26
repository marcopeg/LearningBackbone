
define([
	window.__backboneUiAmdBackbone, 
	window.__backboneUiAmdUnderscore, 
	window.__backboneUiAmdJQuery
	
],function( 
	Backbone,
	_, 
	$
	
){
	
	
	_.extend( Backbone.View.prototype, {
	
		renderTo: function() {
			
			arguments = _.values( arguments );
			
			var $target = $( arguments.shift() );
			
			if ( !$target.length ) return false;
			
			this.render.apply( this, arguments );
			
			$target.html( this.el );
			
			return this;
			
		},
		
		appendTo: function() {
			
			arguments = _.values( arguments );
			
			var $target = $( arguments.shift() );
			
			if ( !$target.length ) return false;
			
			this.render.apply( this, arguments );
			
			$target.append( this.el );
			
			return this;
			
		}
		
	});
	
});