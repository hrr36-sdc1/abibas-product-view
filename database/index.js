/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const knex = require('knex');
require('dotenv').config();

const env = { prod: 'products', test: 'products_test', dev: 'products' };
const dbTableName = env[process.env.NODE_ENV];

const db = new Sequelize(dbTableName, process.env.DB_USER, process.env.PW, {
  host: 'localhost',
  dialect: 'postgresql',
});

const DB = {
  db,
  Shoes,
  Images,
};
module.exports = DB;
