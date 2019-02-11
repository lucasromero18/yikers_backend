const knex = require("../db/knex.js");


module.exports = {
    
    getAllCategories: (req, res) => {
        knex('categories').then((results) => {
            res.send(results)
        })
    }

}