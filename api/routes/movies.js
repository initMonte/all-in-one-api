import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)
moviesRouter.get('/:id', MovieController.getById)
moviesRouter.post('/', MovieController.postMovie)
moviesRouter.put('/:id', MovieController.putMovie)
moviesRouter.patch('/:id', MovieController.patchMovie)
moviesRouter.delete('/:id', MovieController.deleteMovie)
