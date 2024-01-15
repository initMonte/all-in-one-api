import pkg from '../models/movie.cjs'
const { MovieModel } = pkg

export class MovieController {
  static async getAll(req, res) {
    const { genre } = req.query

    const movies = await MovieModel.getAll({ genre })
    res.json(movies)
  }

  static async getById(req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById({ id })

    if (movie) return res.json(movie)
    // res.send('<p>Pelicula X</p>')
    res.status(404).json({ message: 'Movie not found' })
  }

  static async postMovie(req, res) {
    return res.send('<h1>Peli creada</h1>')
  }

  static async putMovie(req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById({ id })

    if (movie) {
      return res.send('<h1>Peli editada TOTAL</h1>')
    }
    res.status(404).json({ message: 'Movie not found' })
  }

  static async patchMovie(req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById({ id })

    if (movie) {
      return res.send('<h1>Peli editada PARCIAL</h1>')
    }
    res.status(404).json({ message: 'Movie not found' })
  }

  static async deleteMovie(req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById({ id })

    if (movie) {
      return res.send('<h1>Peli borrada</h1>')
    }
    res.status(404).json({ message: 'Movie not found' })
  }
}
