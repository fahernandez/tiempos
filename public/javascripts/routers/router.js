/*global define*/
define([
	'jquery',
	'backbone',
	'views/user/main'
], function ($,
			Backbone, 
			UserListView
) {
	'use strict';

	var mainRoutes = Backbone.Router.extend({
		routes: {
			"users" : "getUserList",
		},

		getUserList: function (param) {
			console.log('Loading users main view...');
			new UserListView();
		}
	});

	return mainRoutes;
});
