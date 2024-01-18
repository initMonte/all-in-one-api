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
  const file = path.join(process.cwd(), 'api/pages', 'docs.html')
  const docs = fs.readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(docs)
})
pagesRouter.get('/*', (req, res) => {
  const file = path.join(process.cwd(), 'api/pages', 'hotFound.html')
  const notFound = fs.readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(notFound)
})

module.exports = { pagesRouter }
