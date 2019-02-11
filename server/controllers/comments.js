const knex = require("../db/knex.js");


module.exports = {

    getAllComments: (req, res) => {
        knex('comments').then((results) => {
            res.send(results)
        })
    },

    addComment: (req, res) => {
        knex('comments').insert(req.body).then((results) => {
            res.send(200)
        })
    },

    editComment: (req, res) => {
        knex('comments').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteComment: (req, res) => {
        knex('comments').del().where('id', req.params.id).then((results) => {
            res.send(200)
        })
    }
}