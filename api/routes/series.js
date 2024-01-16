import { Router } from 'express'
import { SerieController } from '../controllers/series.js'

export const seriesRouter = Router()

seriesRouter.get('/', SerieController.getAll)
seriesRouter.get('/:id', SerieController.getById)
seriesRouter.post('/', SerieController.postSerie)
seriesRouter.put('/:id', SerieController.putSerie)
seriesRouter.patch('/:id', SerieController.patchSerie)
seriesRouter.delete('/:id', SerieController.deleteSerie)
