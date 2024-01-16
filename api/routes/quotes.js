import { Router } from 'express'
import { QuoteController } from '../controllers/quotes.js'

export const quotesRouter = Router()

quotesRouter.get('/', QuoteController.getAll)
quotesRouter.get('/:id', QuoteController.getById)
quotesRouter.post('/', QuoteController.postQuote)
quotesRouter.put('/:id', QuoteController.putQuote)
quotesRouter.patch('/:id', QuoteController.patchQuote)
quotesRouter.delete('/:id', QuoteController.deleteQuote)
