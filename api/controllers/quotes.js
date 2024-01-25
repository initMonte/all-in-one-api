import crypto from 'node:crypto'

import { translateTo } from '../middleware/translateTo.js'
import pkg from '../models/quote.cjs'
import { pagination } from '../middleware/pagination.js'
const { QuoteModel } = pkg

export class QuoteController {
  static async getAll(req, res) {
    const { category, allcats, author, lang, limit, offset } = req.query

    let quotes = await QuoteModel.getAll()
    quotes = await QuoteModel.filterQuotes(quotes, { category, allcats, author })
    quotes = pagination(quotes, limit, offset)
    quotes = translateTo(quotes, lang)

    res.json(quotes)
  }

  static async getById(req, res) {
    const { id } = req.params
    let quote = await QuoteModel.getById({ id })
    quote = translateTo(quote, req.query.lang)
    if (quote) return res.json(quote)
    res.status(404).json({ message: 'Quote not found' })
  }

  static async postQuote(req, res) {
    const {
      text,
      author,
      category
    } = req.body
    if (!text || !author || !category) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }

    const newQuote = {
      id: crypto.randomUUID(),
      text,
      author,
      category
    }
    res.status(201)
    return res.send(newQuote)
  }

  static async putQuote(req, res) {
    const { id } = req.params
    const quote = await QuoteModel.getById({ id })

    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' })
    }

    const {
      text,
      author,
      category
    } = req.body
    if (!text || !author || !category) {
      return res.status(400).json({
        status: 'error',
        message: 'Required field/s missing.'
      })
    }
    quote.text = text
    quote.author = author
    quote.category = category
    return res.send(quote)
  }

  static async patchQuote(req, res) {
    const { id } = req.params
    const quote = await QuoteModel.getById({ id })

    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' })
    }

    const {
      text,
      author,
      category
    } = req.body
    if (!text && !author && !category) {
      return res.status(400).json({
        status: 'error',
        message: 'At least 1 valid parameter must be edited.'
      })
    }

    if (text) quote.text = text
    if (author) quote.author = author
    if (category) quote.category = category
    return res.send(quote)
  }

  static async deleteQuote(req, res) {
    const { id } = req.params
    const quote = await QuoteModel.getById({ id })

    if (!quote) {
      return res.status(404).json({ message: 'Quote not found.' })
    }
    return res.status(200).json({ message: 'Quote deleted succesfully.' })
  }
}
