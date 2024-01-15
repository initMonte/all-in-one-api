const series = require('../data/movies.json')

class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      return series.filter(
        serie => serie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return series
  }

  static async getById({ id }) {
    const movie = series.find((movie) => movie.id === id)
    if (movie) return movie
  }
}

module.exports = { MovieModel }
