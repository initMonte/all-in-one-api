import { Router } from 'express'
import fs from 'node:fs'

export const pagesRouter = Router()

pagesRouter.get('/', (req, res) => {
  const home = fs.readFileSync('api/pages/home.html')
  res.end(home)
})
pagesRouter.get('/docs', (req, res) => {
  const docs = fs.readFileSync('api/pages/docs.html')
  res.end(docs)
})
pagesRouter.get('/*', (req, res) => {
  const notFound = fs.readFileSync('api/pages/notFound.html')
  res.end(notFound)
})
