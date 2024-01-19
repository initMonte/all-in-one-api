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
pagesRouter.get('/favicon.ico', (req, res) => {
  const file = path.join(process.cwd(), '/', 'favicon.ico')
  const ico = fs.readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'image/png' })
  res.end(ico)
})
pagesRouter.get('/global.css', (req, res) => {
  const file = path.join(process.cwd(), 'api/pages/css', 'global.css')
  const css = fs.readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/css' })
  res.end(css)
})
pagesRouter.get('/*', (req, res) => {
  const file = path.join(process.cwd(), 'api/pages', 'notFound.html')
  const notFound = fs.readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(notFound)
})

module.exports = { pagesRouter }
