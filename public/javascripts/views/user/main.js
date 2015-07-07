/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'collections/user/list',
	'views/user/item',
	'text!templates/user/main.html'
], function ($, _, Backbone, handlebars, UserListCollection, UserItemView, UserlistTemplate) {
	'use strict';

	var UserListMainView = Backbone.View.extend({

		el: '#main-content',

		template: handlebars.compile( UserlistTemplate ),

		// The DOM events specific to an item.
		events: {
			'submit .search-box': 'search'
		},

		initialize: function () {
			this.render();

			this.$userList = this.$('.user-list');

			this.listenTo(UserListCollection, 'add', this.addOne);
			this.listenTo(UserListCollection, 'reset', this.addAll);

			UserListCollection.fetch();
		},

		// Re-render the titles of the todo item.
		render: function () {
			this.$el.html(this.template());
			
			return this;
		},

		// Add a single todo item to the list by creating a view for it,
		addOne: function (model) {
			console.log('Adding element...');
			var view = new UserItemView({ model: model });
			this.$userList.append(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$userList.empty();

			UserListCollection.each(this.addOne, this);
		},

		search : function(e) {
			e.preventDefault();
			var searchTerm = $(e.target).find('.form-control').val();

			console.log('Searching by user: ', searchTerm);
			this.loadUserList(searchTerm);
		},

		loadUserList : function(termToSearch) {
			console.log('Loading user listing view...');
		}
	});

	return UserListMainView;
});
