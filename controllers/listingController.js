const listing_model = require('../models/listingModel');

exports.listing_get = function(req, res, next) {
    listing_model
        .getListings()
        .then((response) => {
            res.render('listings', { title: 'Reverb exercise', listings: response.body });
        });
};