import { Router } from 'express'
import { BookController } from '../controllers/books.js'

export const booksRouter = Router()

booksRouter.get('/', BookController.getAll)
booksRouter.get('/:id', BookController.getById)
booksRouter.post('/', BookController.postBook)
booksRouter.put('/:id', BookController.putBook)
booksRouter.patch('/:id', BookController.patchBook)
booksRouter.delete('/:id', BookController.deleteBook)
