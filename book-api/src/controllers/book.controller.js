const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../models');
const { Book, Category } = require('../models');

exports.create = async (req, res) => {
	try {
		await Book.create(req.body);
		await this.readAll(req, res);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.readByID = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await Book.findOne({ where: { id: id } });
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const { categoryId = 0 } = req.params;
		const conditions = []

		if (Number(categoryId) !== 0) {
			conditions.push({ categoryId: categoryId })
		}

		const result = await Book.findAll({
			where: { [Op.and]: conditions.length > 0 ? conditions : [true] },
			include: { model: Category, as: 'Category' }
		});

		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.update = async (req, res) => {
	const { id, title, categoryId, author, pages } = req.body;
	try {
		await Book.update(
			{
				title,
				categoryId,
				author,
				pages,
			},
			{ where: { id } }
		);

		await this.readAll(req, res);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.delete = async (req, res) => {
	const { id } = req.params;

	try {
		await Book.destroy({ where: { id: id } });
		await this.readAll(req, res);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};
