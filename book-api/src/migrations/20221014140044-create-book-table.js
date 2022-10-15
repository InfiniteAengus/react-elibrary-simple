'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('books', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: Sequelize.STRING,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'categories',
					key: 'id',
				},
			},
			author: {
				type: Sequelize.STRING,
			},
			pages: {
				type: Sequelize.INTEGER,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('books');
	},
};
