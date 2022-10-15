const Router = require('express').Router;
const router = new Router();
const cardRouter = require('./book.route');
const categoryRouter = require('./category.route');

router.use('/book', cardRouter);
router.use('/category', categoryRouter);

module.exports = router;
