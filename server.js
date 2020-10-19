const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addBooks = require('./routes/books/addBooks')
const getBooks = require('./routes/books/getBooks')
const editBooks = require('./routes/books/editBooks')
const deleteBooks = require('./routes/books/deleteBooks')
const addBookStores = require('./routes/bookStores/addBookStores')
const getBookStores = require('./routes/bookStores/getBookStores')
const editBookStores = require('./routes/bookStores/editBookStores')
const deleteBookStores = require('./routes/bookStores/deleteBookStores')

const app = express()
app.use(bodyParser.json())
app.use(rootRoute)
app.use(addBooks)
app.use(getBooks)
app.use(editBooks)
app.use(deleteBooks)
app.use(addBookStores)
app.use(getBookStores)
app.use(editBookStores)
app.use(deleteBookStores)

const port = 2424
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
