var base = require('./base');

// User model
module.exports = base.Model.extend({
  	tableName: 'user',
	idAttribute: 'id_user'
});
