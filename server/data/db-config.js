const knex = require('knex');

const knexfile = require('../knexfile.js');
const dbEnv = process.env.DB_ENV;

module.exports = knex(knexfile[dbEnv]);
