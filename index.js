import express from 'express'
import cors from 'cors'

import { moviesRouter } from './api/routes/movies.js'

const app = express()
app.use(cors())
app.disable('x-powered-by')

// app.use(express.json({ extended: false }))

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.send('<h1>Mi página</h1>')
})

app.use('/movies', moviesRouter)

app.listen(PORT, () => { console.log(`Server listening on port http://localhost:${PORT}`) })
