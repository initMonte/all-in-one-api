import { Router } from 'express'
import home from '../pages/home.html'
import docs from '../pages/docs.html'
import notFound from '../pages/notFound.html'

export const moviesRouter = Router()

moviesRouter.get('/', home)
moviesRouter.get('/docs', docs)
moviesRouter.post('/*', notFound)
