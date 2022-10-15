module.exports = (sequelize, Sequelize) => {
	const Category = sequelize.define(
		'categories',
		{
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
			},
		},
		{
			timestamps: false,
		}
	);

	return Category;
};
