import { Router } from 'express'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const pagesRouter = Router()

pagesRouter.get('/', (req, res) => {
  const file = join(process.cwd(), 'api/pages', 'home.html')
  const home = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(home)
})
pagesRouter.get('/docs', (req, res) => {
  const file = join(process.cwd(), 'api/pages', 'docs.html')
  const docs = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(docs)
})
pagesRouter.get('/favicon.ico', (req, res) => {
  const file = join(process.cwd(), '/', 'favicon.ico')
  const ico = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'image/png' })
  res.end(ico)
})
pagesRouter.get('/global.css', (req, res) => {
  const file = join(process.cwd(), 'api/pages/css', 'global.css')
  const css = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/css' })
  res.end(css)
})
pagesRouter.get('/allin1logo.svg', (req, res) => {
  const file = join(process.cwd(), 'api/pages/assets', 'allin1logo.svg')
  const logo = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
  res.end(logo)
})
pagesRouter.get('/github.svg', (req, res) => {
  const file = join(process.cwd(), 'api/pages/assets', 'github.svg')
  const github = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
  res.end(github)
})
pagesRouter.get('/book-open.svg', (req, res) => {
  const file = join(process.cwd(), 'api/pages/assets', 'book-open.svg')
  const book = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
  res.end(book)
})
pagesRouter.get('/hero-img.svg', (req, res) => {
  const file = join(process.cwd(), 'api/pages/assets', 'hero-img.svg')
  const heroimg = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
  res.end(heroimg)
})
pagesRouter.get('/arrow-down.svg', (req, res) => {
  const file = join(process.cwd(), 'api/pages/assets', 'arrow-down.svg')
  const arrowdown = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
  res.end(arrowdown)
})
pagesRouter.get('/*', (req, res) => {
  const file = join(process.cwd(), 'api/pages', 'notFound.html')
  const notFound = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(notFound)
})
