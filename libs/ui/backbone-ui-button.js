
define([
	window.__backboneUiAmdBackbone,
	window.__backboneUiAmdUnderscore
	
],function(
	Backbone,
	_
	
){
	
	Backbone.ui.Button = Backbone.ui.Component.extend({
		
		className: 'btn'
		
	});
	
	Backbone.ui.addXtype( 'button', Backbone.ui.Button );

	
});