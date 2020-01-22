const category_model = require('../models/categoryModel');

exports.category_search_get = function(req, res, next) {
    res.render('categories', { title: 'Reverb exercise' });
};

exports.category_search_post = function(req, res, next) {
    console.log('queryin');
    console.log(req.body.query);
    if(req.body.query) {
        category_model
            .getCategories(req.body.query)
            .then((response) => {
                console.log(response);
                console.log('RESPONSE');
                res.render('categories', { title: 'Reverb exercise', results: response });
            });
    }
};