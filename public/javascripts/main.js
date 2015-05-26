
/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		// backboneLocalstorage: {
		// 	deps: ['backbone'],
		// 	exports: 'Store'
		// },
		bootstrap : {
			deps : [
				['jquery']
			]
		}
	},
	paths: {
		jquery: '/javascripts/vendor/jquery/dist/jquery',
		underscore: '/javascripts/vendor/underscore/underscore',
		backbone: '/javascripts/vendor/backbone/backbone',
		// backboneLocalstorage: '/javascripts/vendor/backbone.localStorage/backbone.localStorage',
		text: '/javascripts/vendor/text/text',
		bootstrap: "/javascripts/vendor/bootstrap-sass-twbs/assets/javascripts/bootstrap.min",
		handlebars : '/javascripts/vendor/handlebars/handlebars-v3.0.0'
	},
	//how long the it tries to load a script before giving up, the default is 7
	waitSeconds: 10
});

require([
	'backbone',
	// 'views/app',
	'routers/router'
], function (Backbone,/* AppView, */ Workspace) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// // Initialize the application view
	// new AppView();
});

// //requiring the scripts in the first argument and then passing the library namespaces into a callback
// //you should be able to console log all of the callback arguments
// require(['jQuery', 'bootstrap', 'app', 'handlebars'], function($, Bootstrap, App){

// });
