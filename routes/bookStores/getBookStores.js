const { query } = require('express')
const express = require('express')
const db = require('../../controller/dbController')

const app = express.Router()

app.get('/bookStores', (req, res) => {
    res.send(db.get('bookStores'))
})

module.exports = app