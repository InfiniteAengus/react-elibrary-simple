const Sequelize = require('sequelize');
const databaseConfig = require('../config/database_config');

const sequelizeInstance = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
	host: databaseConfig.host,
	dialect: databaseConfig.dialect,
	operatorsAliases: false,

	pool: {
		max: databaseConfig.pool.max,
		min: databaseConfig.pool.min,
		acquire: databaseConfig.pool.acquire,
		idle: databaseConfig.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;

db.Book = require('./Book')(sequelizeInstance, Sequelize);
db.Category = require('./Category')(sequelizeInstance, Sequelize);

db.Category.hasMany(db.Book);
db.Book.belongsTo(db.Category, { as: 'Category', foreignKey: 'categoryId' });

module.exports = db;
