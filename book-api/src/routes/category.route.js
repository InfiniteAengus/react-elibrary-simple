const Router = require('express').Router;
const router = new Router();
const categories = require('../controllers/category.controller');

router.get('/read', categories.read);

module.exports = router;
