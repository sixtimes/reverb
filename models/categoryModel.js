const superagent = require('superagent');
exports.getCategories = (query) => {
    return new Promise((resolve, reject) => {
        superagent
            .get('https://api.reverb.com/api/categories/flat')
            .set({
                'Accept': 'application/json',
                'Accept-Version': '3.0',
                'Content-Type': 'application/json'
            })
            .on('error', (e) => {
                reject(e);
            })
            .then((response) => {
                let categories = response.body.categories.filter(category => {
                    return category.full_name.toLowerCase().indexOf(query) > -1
                });
                if(categories.length > 0) {
                    resolve(categories)
                } else {
                    resolve('no_results')
                }

            })
    })
};