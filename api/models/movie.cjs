const movies = require('../data/movies.json')

class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static async getById({ id }) {
    const movie = movies.find((movie) => movie.id === id)
    if (movie) return movie
  }
}

module.exports = { MovieModel }
