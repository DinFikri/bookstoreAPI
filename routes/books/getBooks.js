const { query } = require('express')
const express = require('express')
const db = require('../../controller/dbController')

const app = express.Router()

app.get('/books', (req, res) => {
    res.send(db.get('books'))
})

module.exports = app