/**
 * Learning Backbone
 * -> Hello World Events
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 *
 * This is the main view for this example.
 * This view define the scope of the app (#app div) and defines some events
 * sub items.
 * 
 */




define([
	
	// Frameworks
	'jquery',
	'backbone',
	'underscore',
	
	// View Templates
	'text!templates/type_text_log_view.html',
	'text!templates/click_button_log_view.html',
	'text!templates/click_link_log_view.html'

],function(

	// Frameworks
	$,
	Backbone,
	_,
	
	// View Templates
	TypeTextLogView,
	ClickButtonLogView,
	ClickLinkLogView
	
){
	
	return Backbone.View.extend({
		
		
		/**
		 * View's overridings
		 */
		
		el: $('#app'),
		
		initialize: function() {
			
			console.log("Initialize App View");
			
		},
		
		// Expose the view's events list and binds to the internal methods.
		events: {
			"dblclick #log" 				: "clearLog",
			"keyup input[type=text]"		: "typeText",
			"click input[type=button]"		: "clickButton",
			"click #lnk1"					: "clickLink",
			"mouseover #hv1"				: "mouseoverP",
			"mouseout #hv1"					: "mouseoutP"
		},
		
		// This method updates the log box with a static text message (may be HTML?)
		// If there is a data object passed to the render function the template is compiled
		// with the Underscore framework.
		render: function( msg, data ) {
			
			if ( data ) {
				
				msg = _.template( msg, data );
				
			}
			
			this.$('#log').html(msg);
			
		},
		
		
		
		
		
		/**
		 * Events related methods
		 */
		
		clearLog: function() {
			
			this.render("");
			
		},
		
		typeText: function( e ) {
			
			var ViewData = {
				type: 		null,
				message: 	$(e.target).val()
			};
			
			if ( e.keyCode == 13 ) {
				
				ViewData.type =	'typed';
				
				$(e.target).val("").focus();
				
			} else {
				
				ViewData.type =	'typing';
				
			}
			
			this.render( TypeTextLogView, ViewData );
			
		},
		
		clickButton: function(e) {
			
			this.render( ClickButtonLogView, {
				message: $(e.target).val()
			});
			
		},
		
		clickLink: function( e ) {
			
			e.preventDefault();
			
			this.render( ClickLinkLogView, {
				message: $(e.target).html()
			});
			
		},
		
		// mouse-over mouse-out stores the original background color inside
		// the view to switch the background to yellow and back to whatever was set before.
		
		mouseoverP: function( e ) {
			
			this.render('mouseover');
			
			this.originalColor = $(e.target).css('background');
			$(e.target).css('background','yellow');
			
		},
		
		mouseoutP: function( e ) {
			
			this.render('mouseout');
			
			$(e.target).css('background', this.originalColor );
			
		}
		
		
	});
	
	
});