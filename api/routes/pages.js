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
pagesRouter.get('/*', (req, res) => {
  const file = join(process.cwd(), 'api/pages', 'notFound.html')
  const notFound = readFileSync(file)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(notFound)
})

// export default { pagesRouter }
