import { Router } from 'express'

export const pagesRouter = Router()

pagesRouter.get('/', (req, res) => {
  res.sendFile('api/pages/home.html', { root: '.' })
})
pagesRouter.get('/docs', (req, res) => {
  res.sendFile('api/pages/docs.html', { root: '.' })
})
pagesRouter.get('/*', (req, res) => {
  res.sendFile('api/pages/notFound.html', { root: '.' })
})
