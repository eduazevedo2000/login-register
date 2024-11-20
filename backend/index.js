const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

dotenv.config()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => {
    console.log(err)
  })

app.use('/api', require('./routes/users'))

app.listen(process.env.PORT, () => {
  console.log(`server listening at http://localhost:${process.env.PORT}`)
})
