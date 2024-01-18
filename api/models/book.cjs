const books = require('../data/books.json')

class BookModel {
  static async filterBooks(books, { genre, year }) {
    let filteredBooks = books
    if (genre) {
      filteredBooks = books.filter(
        book => book.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
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
