
;(function($){
	
	var _targets, _scrollTop, _check;
	
	_targets = [];
	
	
	
	
	_check = function( scrollTop, e ) {
		
		this.cfg.scrolling.call( this.$, scrollTop, this, e );
		
		// Sticky Happens!
		if ( _scrollTop >= this.stickyStart ) {
			
			// Check if it is already sticky to prevent multiple call to "onSticky" callback!
			if ( this.$.hasClass(this.cfg.stickyClass) ) return;
			
			// Throw "onSticky" callback. Return "false" to block "sticky" behavior.
			if ( this.cfg.onSticky.call( this.$, scrollTop, this, e ) === false ) return;
			
			
			// Drop a placeholder element 
			if ( this.cfg.usePlaceholder ) {
				
				// Compose a placeholderID from the target object Id or from a time based id.
				this.placeholderId = this.$.attr('id');
				if ( !this.placeholderId ) this.placeholderId = new Date().getTime();	
				this.placeholderId+= '-scrollsticky-placeholder';
				
				
				this.$placeholder = $('<div>');
				
				this.$placeholder.css({
					display:	'block',
					width:		this.$.outerWidth(),
					height:		this.$.outerHeight()
				}).addClass(this.cfg.placeholderClass);
				
				this.$.after( this.$placeholder );
			
			}
			
			this.$.data('scrollSticky-style', this.$.attr('style') );
			
			// Sticky the element
			this.$.css({
				position: 	this.cfg.stickyPosition,
				top:		this.cfg.stickyTop,
				zIndex:		this.cfg.stickyZIndex
			}).addClass(this.cfg.stickyClass);
			
			
		// Unsticky Happens!
		} else {
			
			// Check if it is already sticky to prevent multiple call to "onUnsticky" callback!
			if ( !this.$.hasClass(this.cfg.stickyClass) ) return;
			
			// Throw "onUnsticky" callback. Return "false" to block "unsticky" behavior.
			if ( this.cfg.onUnsticky.call( this.$, scrollTop, this, e ) === false ) return;
			
			// Remove the placeholder from the page (if present)
			if ( this.$placeholder != null ) {
				this.$placeholder.remove();
				this.$placeholder = null;
			}
			
			// Unsticky the element
			this.$.css({
				position: 	'relative',
				top:		'auto'
			}).removeClass(this.cfg.stickyClass);
			
			this.$.removeAttr('style');
			this.$.attr('style',this.$.data('scrollSticky-style'));
			
		}
		
	} // EndOf: "_check()"
	
	
	
	
	
	
	$.fn.scrollSticky = function(cfg) {
		
		var i, found;
		
		var config = $.extend({},{
			stickyStart:		'auto',
			
			onSticky:			function( scrollTop, obj, e ) {},
			onUnsticky:			function( scrollTop, obj, e ) {},
			scrolling:			function( scrollTop, obj, e ) {},
			
			stickyPosition:		'fixed',
			stickyTop:			0,
			stickyZIndex:		9999,
			stickyClass:		'scrollsticky',
			
			usePlaceholder:		true,
			placeholderClass:	'scrollsticky-placeholder'
			
		},cfg);
		
		$(this).each(function(){
		
			var obj = {
				_:		this,
				$:		$(this),
				cfg:	config,
				stickyStart:	0,
				
				placeholderId: null,
				$placeholder:	null
			}
			
			// Calculates the scroll value to start fixed position.
			if ( obj.cfg.stickyStart == 'auto' ) {
				obj.stickyStart = obj.$.offset().top;
			} else {
				obj.stickyStart = obj.cfg.stickyStart;
			}
			
			// Check object presence in _targets[] and update info.
			found = false;
			for ( i=0; i<_targets;i++ ) {
				if ( _targets[i]._ == this ) {
					found = true;
					_targets[i] = $.extend({},_targets[i],obj);
				}
			}
			
			// Append item to _targets[] if not found!
			if ( !found ) _targets.push(obj);
		
		
		});
		
		
		return this;
		
	};
	
	
	
	
	
	/**
	 * The Functional Code
	 * any ideas about this code optimization??
	 */
	
	$(window).bind('scroll',function(e){
		
		// Fetch the window's visible area info once for each scroll event.
		// (load balance optimization)
		_scrollTop = $(window).scrollTop();
		
		// Walk through the active items to define if they are visible or not!
		for ( var i=0; i<_targets.length; i++ ) _check.call( _targets[i], _scrollTop, e );
		
			
	});
	
	// Trigger the first scroll event to activate the scrollSticky plugin.
	// Delayed instruction is mandatory with firefox.
	$(document).ready(function(){ 
		
		// Webkit version
		if ( $.browser.webkit ) {
			$(window).scroll( $(window).scrollTop() );
		
		// Other browsers version
		} else {
			setTimeout(function(){ $(window).trigger('scroll'); },1);
			
		}
		
	 });
	
})(jQuery);