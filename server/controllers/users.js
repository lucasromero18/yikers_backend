const knex = require("../db/knex.js");


module.exports = {

    getAllUsers: (req, res) => {
        knex('users').then((results) => {
            res.json(results)
        })
    },

    editUser: (req, res) => {
        knex('users').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    }

}