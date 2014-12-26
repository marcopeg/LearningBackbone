
define([
	window.__backboneUiAmdBackbone
	
],function(
	Backbone
	
){
	
	_.extend( Backbone.ui, {
		
		xtypes: {},
		
		addXtype: function( name, obj ) {
			
			Backbone.ui.xtypes[name] = obj;
			
		}
	
		
	});
	
});