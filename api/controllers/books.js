import crypto from 'node:crypto'

import { translateTo } from '../middleware/translateTo.js'
import pkg from '../models/book.cjs'
const { BookModel } = pkg

export class BookController {
  static async getAll(req, res) {
    const { genre, allgenres, year, lang } = req.query

    let books = await BookModel.getAll()
    books = await BookModel.filterBooks(books, { genre, allgenres, year })
    books = translateTo(books, lang)

    res.json(books)
  }

  static async getById(req, res) {
    const { id } = req.params
    let book = await BookModel.getById({ id })
    book = translateTo(book, req.query.lang)
    if (book) return res.json(book)
    res.status(404).json({ message: 'Book not found' })
  }

  static async postBook(req, res) {
    const {
      title,
      description,
      year,
      author,
      img,
      genre
    } = req.body
    if (!title || !description || !year || !author || !img || !genre) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }

    const newBook = {
      id: crypto.randomUUID(),
      title,
      description,
      year,
      author,
      img,
      genre
    }
    res.status(201)
    return res.send(newBook)
  }

  static async putBook(req, res) {
    const { id } = req.params
    const book = await BookModel.getById({ id })

    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    const {
      title,
      description,
      year,
      author,
      img,
      genre
    } = req.body
    if (!title || !description || !year || !author || !img || !genre) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }
    book.title = title
    book.description = description
    book.year = +year
    book.author = author
    book.img = +img
    book.genre = genre
    return res.send(book)
  }

  static async patchBook(req, res) {
    const { id } = req.params
    const book = await BookModel.getById({ id })

    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    const {
      title,
      description,
      year,
      author,
      img,
      genre
    } = req.body
    if (!title && !description && !year && !author && !img && !genre) {
      return res.status(400).json({
        status: 'error',
        message: 'At least 1 valid parameter must be edited.'
      })
    }

    if (title) book.title = title
    if (description) book.description = description
    if (year) book.year = +year
    if (author) book.author = author
    if (img) book.img = +img
    if (genre) book.genre = genre
    return res.send(book)
  }

  static async deleteBook(req, res) {
    const { id } = req.params
    const book = await BookModel.getById({ id })

    if (!book) {
      return res.status(404).json({ message: 'Book not found.' })
    }
    return res.status(200).json({ message: 'Book deleted succesfully.' })
  }
}
