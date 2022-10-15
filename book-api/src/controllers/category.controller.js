const sequelize = require('sequelize');
const { Category } = require('../models');

exports.read = async (req, res) => {
	try {
		const result = await Category.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};
