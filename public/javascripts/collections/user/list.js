/*global define */
define([
	'underscore',
	'backbone',
	'models/user/item'
], function (_, Backbone, UserItem) {
	'use strict';

	var UserList = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: UserItem,
		url: '/api/users'
	});

	return new UserList();
});
