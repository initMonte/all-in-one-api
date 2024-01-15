import { Router } from 'express'
import home from '../pages/home.html'
import docs from '../pages/docs.html'
import notFound from '../pages/notFound.html'

export const moviesRouter = Router()

moviesRouter.get('/', toString(home))
moviesRouter.get('/docs', toString(docs))
moviesRouter.post('/*', toString(notFound))
