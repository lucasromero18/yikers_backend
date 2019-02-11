const knex = require("../db/knex.js");


module.exports = {

    getAllusers: (req, res) => {
        knex('users').then((results) => {
            res.json(results)
        })
    },

    editUser: (req, res) => {
        knex('users').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteUser: (req, res) => {
        knex('users').del().where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

}