const express = require('./src/services/express');
const routes = require('./src/routes');

const PORT = process.env.PORT || 5000;

const server = express(routes);

server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
