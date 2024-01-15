import { Router } from 'express'

export const pagesRouter = Router()

pagesRouter.get('/', (req, res) => {
  res.send('<h1>Mi HOME</h1>')
})
pagesRouter.get('/docs', (req, res) => {
  res.send('<h1>Mi DOCS</h1>')
})
pagesRouter.get('/*', (req, res) => {
  res.send('<h1>ERROOOOOOOR not found</h1>')
})
