/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!templates/user/item.html'
], function ($, _, Backbone, handlebars, userItemTemplate) {
	'use strict';

	var UserItemView = Backbone.View.extend({

		tagName:  'tr',

		template: handlebars.compile( userItemTemplate ),

		// The DOM events specific to an item.
		events: {

		},


		initialize: function () {

		},

		// Re-render the titles of the todo item.
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			
			return this;
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
	});

	return UserItemView;
});
