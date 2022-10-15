'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('categories', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('categories');
	},
};
