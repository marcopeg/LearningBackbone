
define([
	window.__backboneUiAmdBackbone,
	window.__backboneUiAmdUnderscore
	
],function(
	Backbone,
	_
	
){
	
	Backbone.ui.Component = Backbone.View.extend({
		
		defaultXtype: 'component',
		
		initialize: function( cfg ) {
			
			_.extend({
				xtype: 		'',
				content: 	'',
				items: 		[]
			},cfg);
			
			this.cfg = cfg;
			
			this.items = [];
			
		},
		
		render: function( cfg ) {
			
			cfg = _.extend( _.clone(this.cfg), cfg );
			
			this.$el.html( cfg.content );
			
			_.each( cfg.items, this.add, this )
			
			return this;
			
		},
		
		add: function( cfg ) {
			
			cfg = _.extend({
				parent: this,
				xtype: 	this.defaultXtype
			},cfg);
			
			var item = new Backbone.ui.xtypes[cfg.xtype](cfg).appendTo( this.el );
			
			this.items.push(item);
			
		}
		
		
	});
	
	Backbone.ui.addXtype( 'component', Backbone.ui.Component );

	
});