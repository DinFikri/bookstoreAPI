const { query } = require('express')
const express = require('express')
const db = require('../../controller/dbController')

const app = express.Router()

app.delete('/bookStores', (req, res) => {
    const query = req.query
    const id = req.query.id
    const idFound = db.get('bookStores', id)
    if (idFound) {
        db.remove('bookStores', id)
        res.send('Ok, Make Sure You Input Corect ID Number')
    } else {
        res.status(409).send("ID Not Found")
        return
    }
})

module.exports = app