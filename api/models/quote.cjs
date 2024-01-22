const quotes = require('../data/quotes.json') // This data was obtained from https://www.imdb.com/

class QuoteModel {
  static async filterQuotes(quotes, { category, allcats, author }) {
    let filteredQuotes = quotes
    if (category) {
      if (category instanceof Array && allcats === 'true') {
        filteredQuotes = quotes.filter(quote => {
          return category.every(g => quote.category.some(mg => mg.toLowerCase() === g.toLowerCase()))
        })
      } else if (category instanceof Array) {
        filteredQuotes = quotes.filter(
          quote => quote.category.some(g => category.includes(g.toLowerCase()))
        )
      } else {
        filteredQuotes = quotes.filter(
          quote => quote.category.some(g => g.toLowerCase() === category.toLowerCase())
        )
      }
    }
    if (author) {
      filteredQuotes = filteredQuotes.filter(
        quote => {
          return quote.author.includes(author)
        }
      )
    }
    return filteredQuotes
  }

  static async getAll() {
    return quotes
  }

  static async getById({ id }) {
    const quote = quotes.find((quote) => quote.id === id)
    if (quote) return quote
  }
}

module.exports = { QuoteModel }
