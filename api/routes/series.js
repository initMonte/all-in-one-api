import { Router } from 'express'
import { SerieController } from '../controllers/series.js'

export const moviesRouter = Router()

moviesRouter.get('/', SerieController.getAll)
moviesRouter.get('/:id', SerieController.getById)
moviesRouter.post('/', SerieController.postSerie)
moviesRouter.put('/:id', SerieController.putSerie)
moviesRouter.patch('/:id', SerieController.patchSerie)
moviesRouter.delete('/:id', SerieController.deleteSerie)
