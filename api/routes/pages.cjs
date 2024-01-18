const express = require('express')
const fs = require('node:fs')

const pagesRouter = express.Router()

pagesRouter.get('/', (req, res) => {
  const home = fs.readFileSync('api/pages/home.html')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(home)
})
pagesRouter.get('/docs', (req, res) => {
  const docs = fs.readFileSync('api/pages/docs.html')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(docs)
})
pagesRouter.get('/*', (req, res) => {
  const notFound = fs.readFileSync('api/pages/notFound.html')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(notFound)
})

module.exports = { pagesRouter }
