/**
 * Learning Backbone
 * -> Underscore Templates
 *
 * @author: MPeg [marco(dot)pegoraro(at)gmail(dot)com]
 *
 * This example use some simple jQuery to handle events and dispatch
 * actions to models and views.
 * (next example will rewrite this logics introducing Router)
 *
 * We have a global object (a model) "person" who contain some data:
 * - name
 * - surname
 * - age
 *
 * We try to display these informations with a simple template:
 * <strong>name:</strong> <%= data.name %> <%= data.surname %>! <% if ( data.age ) { %><br><small><strong>Age:</strong> <%= data.age %></small><% } %>
 *
 *
 * Different views implements different ways to fetch the template but renders the same way.
 * All these views inherit from ExampleSource who expose the render() method (and some other utilities)
 *
 */




/**
 * This is a global so you can play with the console changing person's attributes:
 * person.set('name','Jeff')
 */
var person;


require.config({
	
	baseUrl: './',
	
	paths: {
		
		// Libraries
		text:		'../_libs/text',
		jquery: 	'../_libs/jquery',
		underscore:	'../_libs/underscore',
		backbone:	'../_libs/backbone',
		
		// Application Places
		view:		'js/views',
		model:		'js/models',
		collection:	'js/collections'
		
	}
	
});





/**
 * 
 */

define([
	
	// Frameworks
	'backbone',
	'jquery',
	
	// Models
	'model/person',
	
	// Views
	'view/internal_view',
	'view/js_view',
	'view/text_view',
	'view/dom_view'

],function(

	// Frameworks
	Backbone,
	$,
	
	// Models
	PersonModel,
	
	// Views
	InternalView,
	JsView,
	TextView,
	DomView
	
	
){
	
	
	
	// Instanciate the person model.
	// at this time "person" will contain PersonModel's defaults.
	// we do not need to chage it!
	person = new PersonModel;
	
	
	
	
	
	
	/**
	 * By clicking on "start" button we instanciate the views.
	 * all these objects are different and the difference is how they fetch the template!
	 *
	 * the important thing in this code is "model: person".
	 * each view receive the same model instance.
	 *
	 * this way views can listen to model's changes!
	 */
	$('#start').bind('click',function(e){
		
		var internalView = new InternalView({
			el:		'#internal',
			model: person
		}).render();
		
		var jsView = new JsView({
			el:		'#js',
			model: 	person
		}).render();
		
		var textView = new TextView({
			el:		'#text',
			model: 	person
		}).render();
		
		var domView = new DomView({
			el:		'#dom',
			model: 	person
		}).render();
		
		
		// enable/disable UI buttons
		$('#start').addClass('disabled').removeClass('btn-primary');
		$('#set_age, #change_name, #reset').removeClass('disabled');
		
	});
	
	
	
	
	/**
	 * Handling Actions
	 *
	 *
	 * don't care about the first instruction in these methods.
	 * it only ensure that you have started the example!
	 *
	 * you need to focus your attention to one simple thing:
	 * we alter model's data only.
	 *
	 * here views are not used.
	 * views receives model's link inside so them can listen to model's changes!
	 *
	 * model::set() method trigger "change" event!
	 */
	
	$('#set_age').bind('click',function(){
		
		// ensures the example is started!
		if ( $(this).hasClass('disabled') ) alert('please click on "Start Example" to initialize Vews objects!');
		
		// random age!
		person.set('age', Math.floor(Math.random()*31) );
		
	});
	
	$('#change_name').bind('click',function(){
		
		// ensures the example is started!
		if ( $(this).hasClass('disabled') ) alert('please click on "Start Example" to initialize Vews objects!');
		
		// random name/surname from the array
		var names = [ 'marco', 'mario', 'walter', 'silvia', 'filippa' ];
		var surnames = [ 'pegoraro', 'rossi', 'bianchi', 'verdi' ];
		
		person.set('name', 		names[Math.floor(Math.random()*names.length) ] );
		person.set('surname', 	surnames[Math.floor(Math.random()*surnames.length) ] );
		
	});
	
	$('#reset').bind('click',function(){
		
		// ensures the example is started!
		if ( $(this).hasClass('disabled') ) alert('please click on "Start Example" to initialize Vews objects!');
		
		// clear model's data without trigger events.
		person.clear({ silent:true });
		
		// restore defaults data triggering events (change).
		person.set( person.defaults );
		
	});
		
		
});