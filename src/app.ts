import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

// parser
app.use(express.json())
app.use
express.urlencoded({ extended: true })

// tasting
app.get('/', (req: Request, res: Response) => {
  res.send('Working Sucessfully')
})

export default app