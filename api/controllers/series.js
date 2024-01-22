import crypto from 'node:crypto'

import { translateTo } from '../middleware/translateTo.js'
import pkg from '../models/serie.cjs'
const { SerieModel } = pkg

export class SerieController {
  static async getAll(req, res) {
    const { genre, allgenres, year, lang } = req.query

    let series = await SerieModel.getAll()
    series = await SerieModel.filterSeries(series, { genre, allgenres, year })
    series = translateTo(series, lang)

    res.json(series)
  }

  static async getById(req, res) {
    const { id } = req.params
    let serie = await SerieModel.getById({ id })
    serie = translateTo(serie, req.query.lang)
    if (serie) return res.json(serie)
    res.status(404).json({ message: 'Serie not found' })
  }

  static async postSerie(req, res) {
    const {
      title,
      description,
      started,
      ended,
      seasons,
      episodes,
      poster,
      genre,
      rate
    } = req.body
    if (!title || !description || !started || !ended || !seasons || !episodes || !poster || !genre || !rate) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }

    const newSerie = {
      id: crypto.randomUUID(),
      title,
      description,
      started,
      ended,
      seasons,
      episodes,
      poster,
      genre,
      rate
    }
    res.status(201)
    return res.send(newSerie)
  }

  static async putSerie(req, res) {
    const { id } = req.params
    const serie = await SerieModel.getById({ id })

    if (!serie) {
      return res.status(404).json({ message: 'Serie not found' })
    }

    const {
      title,
      description,
      started,
      ended,
      seasons,
      episodes,
      poster,
      genre,
      rate
    } = req.body
    if (!title || !description || !started || !ended || !seasons || !episodes || !poster || !genre || !rate) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }
    serie.title = title
    serie.description = description
    serie.started = +started
    serie.ended = ended
    serie.seasons = +seasons
    serie.episodes = +episodes
    serie.poster = poster
    serie.genre = genre
    serie.rate = +rate
    return res.send(serie)
  }

  static async patchSerie(req, res) {
    const { id } = req.params
    const serie = await SerieModel.getById({ id })

    if (!serie) {
      return res.status(404).json({ message: 'Serie not found' })
    }

    const {
      title,
      description,
      started,
      ended,
      seasons,
      episodes,
      poster,
      genre,
      rate
    } = req.body
    if (!title && !description && !started && !ended && !seasons && !episodes && !poster && !genre && !rate) {
      return res.status(400).json({
        status: 'error',
        message: 'At least 1 valid parameter must be edited.'
      })
    }

    if (title) serie.title = title
    if (description) serie.description = description
    if (started) serie.started = +started
    if (ended) serie.ended = ended
    if (seasons) serie.seasons = +seasons
    if (episodes) serie.episodes = +episodes
    if (poster) serie.poster = poster
    if (genre) serie.genre = genre
    if (rate) serie.rate = +rate
    return res.send(serie)
  }

  static async deleteSerie(req, res) {
    const { id } = req.params
    const serie = await SerieModel.getById({ id })

    if (!serie) {
      return res.status(404).json({ message: 'Serie not found.' })
    }
    return res.status(200).json({ message: 'Serie deleted succesfully.' })
  }
}
