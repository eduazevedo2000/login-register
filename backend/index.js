const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

app.get('/', (req, res) => {
  res.send('server is up')
})

app.listen(process.env.PORT, () => {
  console.log(`server listening at http://localhost:${process.env.PORT}`)
})
