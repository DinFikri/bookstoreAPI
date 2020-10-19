const { query } = require('express')
const express = require('express')
const db = require('../../controller/dbController')

const app = express.Router()

app.patch('/books', (req, res) => {
    const body = req.body
    const id = body.id
    const idFound = db.get('books', id)
    if (idFound) {
        db.edit('books', id, body)
        res.send(body)
    } else {
        res.status(409).send("ID Not Found")
    }
})

module.exports = app