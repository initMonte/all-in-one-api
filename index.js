import express from 'express'
import cors from 'cors'

import { moviesRouter } from './api/routes/movies.js'
import { seriesRouter } from './api/routes/series.js'
import { booksRouter } from './api/routes/books.js'
import { quotesRouter } from './api/routes/quotes.js'
import { pagesRouter } from './api/routes/pages.cjs'

const app = express()
app.use(cors())
app.use(express.json())
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.use('/movies', moviesRouter)
app.use('/series', seriesRouter)
app.use('/books', booksRouter)
app.use('/quotes', quotesRouter)
app.use('/', pagesRouter)

app.listen(PORT, () => { console.log(`Server listening on port http://localhost:${PORT}`) })
