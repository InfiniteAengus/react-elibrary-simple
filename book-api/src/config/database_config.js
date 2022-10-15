require('dotenv').config();

module.exports = {
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	dialect: process.env.DB_CONNECTION,
	pool: {
		//pool configuration
		max: 5, //maximum number of connection in pool
		min: 0, //minimum number of connection in pool
		acquire: 30000, //maximum time in ms that pool will try to get connection before throwing error
		idle: 10000, //maximum time in ms, that a connection can be idle before being released
	},
};
