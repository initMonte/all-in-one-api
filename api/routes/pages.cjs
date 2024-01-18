const express = require('express')
const fs = require('node:fs')
const path = require('node:path')

const pagesRouter = express.Router()

pagesRouter.get('/', (req, res) => {
  const file = path.join(process.cwd(), 'api/pages', 'home.html')
  const home = fs.readFileSync(file)
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
