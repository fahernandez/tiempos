// Setting mysql connection
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'tiempos',
        password : '15lZTp4LdUDVe3S',
        database : 'tiempos',
        charset  : 'utf8'
  }
});
module.exports = require('bookshelf')(knex);