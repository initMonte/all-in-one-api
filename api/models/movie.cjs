// const { translateTo } = require('../middleware/translateTo')

const series = require('../data/movies.json') // This data was obtained from https://www.imdb.com/

class MovieModel {
  static async filterSeries(series, { genre, year }) {
    let filteredSeries = series
    if (genre) {
      filteredSeries = series.filter(
        serie => serie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    if (year) {
      console.log('Filtrando por año:', year)
      const numericYear = parseInt(year)
      filteredSeries = filteredSeries.filter(
        serie => {
          console.log('Año de la serie:', serie.year)
          return serie.year === numericYear
        }
      )
    }
    return filteredSeries
  }

  static async getAll() {
    return series
  }

  static async getById({ id }) {
    const movie = series.find((movie) => movie.id === id)
    if (movie) return movie
  }
}

module.exports = { MovieModel }
