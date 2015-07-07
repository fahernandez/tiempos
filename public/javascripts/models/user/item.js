/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var UserItem = Backbone.Model.extend({
		initialize: function(){
	      console.log('This model has been initialized.');
	  	},

	  	defaults: {
            displayName: '',
            email: ''
        }
	});

	return UserItem;
});
