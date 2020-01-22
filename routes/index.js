var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/categoryController');
var listing_controller = require('../controllers/listingController');

/* GET home page. */
router.get('/', category_controller.category_search_get);
router.get('/categories', category_controller.category_search_get);
router.post('/categories', category_controller.category_search_post);
router.get('/listings', listing_controller.listing_get);

module.exports = router;