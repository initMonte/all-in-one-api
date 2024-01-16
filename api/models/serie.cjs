const series = require('../data/series.json') // This data was obtained from https://www.imdb.com/

class SerieModel {
  static async filterSeries(series, { genre, year }) {
    let filteredSeries = series
    if (genre) {
      filteredSeries = series.filter(
        serie => serie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    if (year) {
      const numericYear = parseInt(year)
      filteredSeries = filteredSeries.filter(
        serie => {
          return (serie.started <= numericYear && serie.ended >= numericYear)
        }
      )
    }
    return filteredSeries
  }

  static async getAll() {
    return series
  }

  static async getById({ id }) {
    const serie = series.find((serie) => serie.id === id)
    if (serie) return serie
  }
}

module.exports = { SerieModel }
