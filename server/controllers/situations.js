const knex = require("../db/knex.js");


module.exports = {

    getAllSituations: (req, res) => {
        knex('situations').then((results) => {
                res.json(results)
        })
    },

    addSituation: (req, res) => {
        console.log(req.body)
        knex('situations').insert(req.body, '*').then((results) => {
            res.json(results[0])
        })
    },

    editSituation: (req, res) => {
        knex('situations').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteSituation: (req, res) => {
        knex('situations').del().where('id', req.params.id).then((results) => {
            res.send(200)
        })
    }
}