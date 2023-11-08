import Express from 'express'
import { FetchSefaz } from './reqSefaz.js'
import { Treatment } from './treatment.js'

const app = Express()
const port = 3333

app.use(Express.json())

// Initial Rote
app.get('/', async (req, res) => {
  const htmlTextAfterFetch = await FetchSefaz()
  Treatment(htmlTextAfterFetch)
  res.send()
})

// Starting server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
