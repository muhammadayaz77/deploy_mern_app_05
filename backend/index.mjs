import express from 'express'
import dotenv from 'dotenv'
import uploadRoutes from './routes/upload.routes.mjs'
import cors from 'cors'
dotenv.config()

let app = express()
let PORT = process.env.PORT || 3000;

app.use(cors({
  origin : process.env.CLIENT_URL
}))
app.use(express.json())


app.use('/auth',uploadRoutes)

app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`)
})