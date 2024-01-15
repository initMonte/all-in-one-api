import crypto from 'node:crypto'

import pkg from '../models/movie.cjs'
import { translateTo } from '../middleware/translateTo.js'
const { MovieModel } = pkg

export class MovieController {
  static async getAll(req, res) {
    const { genre, year, lang } = req.query

    let movies = await MovieModel.getAll()
    movies = await MovieModel.filterSeries(movies, { genre, year, lang })
    console.log(movies)
    movies = translateTo(movies, lang)

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
    const {
      title,
      description,
      year,
      director,
      duration,
      poster,
      genre,
      rate
    } = req.body

    const newMovie = {
      id: crypto.randomUUID(),
      title,
      description,
      year,
      director,
      duration,
      poster,
      genre,
      rate
    }
    res.status(201)
    return res.send(newMovie)
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
