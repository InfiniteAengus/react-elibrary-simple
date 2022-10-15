module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define(
		'books',
		{
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
				references: 'categories',
				referencesKey: 'id',
			},
			author: {
				type: Sequelize.STRING,
			},
			pages: {
				type: Sequelize.INTEGER,
			},
		},
		{
			timestamps: false,
		}
	);
	return Book;
};
