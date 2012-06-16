/**
 * Conditional AMD Coding for a jQuery Plugin
 *
 * This simple yet funny jQuery plugin center vertically and bounce a DOM node.
 * I use it in my "Hello World" examples.
 *
 * This file explain how to pack a jQuery plugin to be ready as AMD module.
 * This way the plugin itself can be loaded as dependency in your application define() blocks!
 */





/**
 * Decide HOW to expose the plugin to the world.
 * - as AMD module with jquery dependency
 * - as global "jQuery" variable extension
 */
(function (factory) {
	
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}




/**
 * Code the plugin itself and pass it to the above conditional code.
 * Inside this block we can use "$" to refer to jQuery.
 *
 * "$" will be setted up by the AMD define() or directly with the jQuery global object.
 */
}(function($) {
	
	
	$.fn.centerBounce = function() {
		
		$(this).each(function(){
			
			var $this = $(this);
			
			// Center text vertically:
			$this.css({
				paddingTop: 	$(window).height()/2 - $this.outerHeight()/2,
				textAlign: 		'center',
				marginLeft: 	'auto',
				marginRight: 	'auto'
			});
			
			// Bounce text:
			$this
				.animate({ fontSize: '40pt' },1000)
				.animate({ fontSize: '10pt' },1000)
			;
			
		});
		
		return this;
		
	};
	
	
}));