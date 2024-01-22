const movies = require('../data/movies.json') // This data was obtained from https://www.imdb.com/

class MovieModel {
  static async filterMovies(movies, { genre, allgenres, year }) {
    let filteredMovies = movies

    if (genre) {
      if (genre instanceof Array && allgenres === 'true') {
        filteredMovies = movies.filter(movie => {
          return genre.every(g => movie.genre.some(mg => mg.toLowerCase() === g.toLowerCase()))
        })
      } else if (genre instanceof Array) {
        filteredMovies = movies.filter(
          movie => movie.genre.some(g => genre.includes(g.toLowerCase()))
        )
      } else {
        filteredMovies = movies.filter(
          movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
      }
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
