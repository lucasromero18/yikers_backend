const knex = require("../db/knex.js");


module.exports = {

    getAllSituations: (req, res) => {
        knex('situations').then((results) => {
                res.json(results)
        })
    },

    addSituation: (req, res) => {
        knex('situations').insert(req.body).then((results) => {
            res.json(results)
        })
    },

    editSituation: (req, res) => {
        knex('situations').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteReview: (req, res) => {
        knex('situations').del().where('id', req.params.id).then((results) => {
            res.send(200)
        })
    }
}