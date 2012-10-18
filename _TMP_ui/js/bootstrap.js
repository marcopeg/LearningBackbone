define([
	'backboneUI'
	
],function(
	Backbone
	
){
	
	
	var Tmp = Backbone.View.extend({
		
		render: function( txt ) {
			
			txt = txt || "mona";
			
			this.$el.html( txt );
			
			return this;
			
		}
		
	});
	
	var tmp = new Tmp();
	tmp.appendTo( '#app', 'il testo da redenrer' );
	
	
	
	
	
	var aa = new Backbone.ui.Component({
		
		content: 'aaa',
		
		items: [
			{ xtype: 'button', content: 'bbb' },
			{ content: 'ccc' }
		]
		
	}).appendTo('#app');
	
	
});