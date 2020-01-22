const superagent = require('superagent');
exports.getListings = (per_page = 10) => {
    return new Promise((resolve, reject) => {
        superagent
            .get('https://api.reverb.com/api/listings/all')
            .query({per_page})
            .set({
                'Accept': 'application/json',
                'Accept-Version': '3.0',
                'Content-Type': 'application/json'
            })
            .on('error', (e) => {
                reject(e);
            })
            .then((response) => {
                resolve(response);
            })
    })
};