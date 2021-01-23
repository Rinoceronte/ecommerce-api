const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts.js')
const app = express()

const port = 3001

app.get('/api/products', getProducts.getProducts)

app.get('/api/products/:id', getProducts.getProduct)



app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})