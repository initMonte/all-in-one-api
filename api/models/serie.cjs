const series = require('../data/series.json')

class SerieModel {
  static async getAll({ genre }) {
    if (genre) {
      return series.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return series
  }

  static async getById({ id }) {
    const serie = series.find((serie) => serie.id === id)
    if (serie) return serie
  }
}

module.exports = { SerieModel }
