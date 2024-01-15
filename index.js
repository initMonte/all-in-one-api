import express from 'express'
import cors from 'cors'

import { moviesRouter } from './api/routes/movies.js'
// import { booksRouter } from './api/routes/books.js'
// import { quotesRouter } from './api/routes/quotes.js'

const app = express()
app.use(cors())
app.disable('x-powered-by')

// app.use(express.json({ extended: false }))

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.send('<h1>Mi página</h1>')
})

app.use('/movies', moviesRouter)
// app.use('/books', booksRouter)
// app.use('/quotes', quotesRouter)

app.listen(PORT, () => { console.log(`Server listening on port http://localhost:${PORT}`) })
