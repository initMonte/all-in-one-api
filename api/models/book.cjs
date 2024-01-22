const books = require('../data/books.json')

class BookModel {
  static async filterBooks(books, { genre, allgenres, year }) {
    let filteredBooks = books

    if (genre) {
      if (genre instanceof Array && allgenres === 'true') {
        filteredBooks = books.filter(book => {
          return genre.every(g => book.genre.some(mg => mg.toLowerCase() === g.toLowerCase()))
        })
      } else if (genre instanceof Array) {
        filteredBooks = books.filter(
          book => book.genre.some(g => genre.includes(g.toLowerCase()))
        )
      } else {
        filteredBooks = books.filter(
          book => book.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
      }
    }
    if (year) {
      const numericYear = parseInt(year)
      filteredBooks = filteredBooks.filter(
        book => {
          return book.year === numericYear
        }
      )
    }
    return filteredBooks
  }

  static async getAll() {
    return books
  }

  static async getById({ id }) {
    const book = books.find((book) => book.id === id)
    if (book) return book
  }
}

module.exports = { BookModel }
