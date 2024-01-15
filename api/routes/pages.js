import { Router } from 'express'
import home from '../pages/home.ejs'
import docs from '../pages/docs.ejs'
import notFound from '../pages/notFound.ejs'

export const moviesRouter = Router()

moviesRouter.get('/', home)
moviesRouter.get('/docs', docs)
moviesRouter.post('/*', notFound)
