const movies = require('../data/movies.json') // This data was obtained from https://www.imdb.com/

class MovieModel {
  static async filterMovies(movies, { genre, year }) {
    let filteredMovies = movies
    if (genre) {
      filteredMovies = movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    if (year) {
      const numericYear = parseInt(year)
      filteredMovies = filteredMovies.filter(
        movie => {
          return movie.year === numericYear
        }
      )
    }
    return filteredMovies
  }

  static async getAll() {
    return movies
  }

  static async getById({ id }) {
    const movie = movies.find((movie) => movie.id === id)
    if (movie) return movie
  }
}

module.exports = { MovieModel }
