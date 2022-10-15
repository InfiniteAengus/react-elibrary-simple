require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

connection.query('CREATE DATABASE IF NOT EXISTS book', function (err, results) {
	console.log(results);
	console.log(err);
});

connection.end();
