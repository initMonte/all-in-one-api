import { Router } from 'express'

export const pagesRouter = Router()

pagesRouter.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.send('<h1>Mi DOCS</h1>')
})
pagesRouter.get('/docs', (req, res) => {
  res.send('<h1>Mi DOCS</h1>')
})
pagesRouter.get('/*', (req, res) => {
  res.send('<h1>ERROOOOOOOR not found</h1>')
})
