import crypto from 'node:crypto'

import { translateTo } from '../middleware/translateTo.js'
import pkg from '../models/movie.cjs'
const { MovieModel } = pkg

export class MovieController {
  static async getAll(req, res) {
    const { genre, year, lang } = req.query

    let movies = await MovieModel.getAll()
    movies = await MovieModel.filterMovies(movies, { genre, year })
    movies = translateTo(movies, lang)

    res.json(movies)
  }

  static async getById(req, res) {
    const { id } = req.params
    let movie = await MovieModel.getById({ id })
    movie = translateTo(movie, req.query.lang)
    if (movie) return res.json(movie)
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
    if (!title || !description || !year || !director || !duration || !poster || !genre || !rate) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }

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

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }

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
    if (!title || !description || !year || !director || !duration || !poster || !genre || !rate) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }
    movie.title = title
    movie.description = description
    movie.year = +year
    movie.director = director
    movie.duration = +duration
    movie.poster = poster
    movie.genre = genre
    movie.rate = +rate
    return res.send(movie)
  }

  static async patchMovie(req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById({ id })

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }

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
    if (!title && !description && !year && !director && !duration && !poster && !genre && !rate) {
      return res.status(400).json({
        status: 'error',
        message: 'At least 1 valid parameter must be edited.'
      })
    }

    if (title) movie.title = title
    if (description) movie.description = description
    if (year) movie.year = +year
    if (director) movie.director = director
    if (duration) movie.duration = +duration
    if (poster) movie.poster = poster
    if (genre) movie.genre = genre
    if (rate) movie.rate = +rate
    return res.send(movie)
  }

  static async deleteMovie(req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById({ id })

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found.' })
    }
    return res.status(200).json({ message: 'Movie deleted succesfully.' })
  }
}
