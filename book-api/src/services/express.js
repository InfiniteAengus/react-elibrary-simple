const express = require('express');
const bodyParser = require('body-parser');

const ExpressApp = (routes) => {
	const app = express();

	app.use(express.json({ limit: '50mb' }));
	app.use(express.urlencoded({ limit: '50mb' }));

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', routes);

	return app;
};

module.exports = ExpressApp;
