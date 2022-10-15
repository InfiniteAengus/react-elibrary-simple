'use strict';

const categories = ['Art', 'Science', 'History', 'Humor', 'Fantasy'];

module.exports = {
	up: (queryInterface, Sequelize) => {
		let list = [];
		for (let category of categories) {
			list.push({
				name: category,
			});
		}
		return queryInterface.bulkInsert('Categories', list);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Categories', null, {});
	},
};
