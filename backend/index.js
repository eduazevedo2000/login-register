const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let genuuid = require('uuid')
const session = require('express-session')

dotenv.config()

app.use(cors())

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

// app.use(
//   session({
//     name: 'SessionCookie',
//     genid: function (req) {
//       console.log('session id created')
//       return genuuid()
//     },
//     secret: 'Shsh!Secret!',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false, expires: 60000 },
//   })
// )

app.use('/api', require('./routes/routes'))

app.listen(process.env.PORT, () => {
  console.log(`server listening at http://localhost:${process.env.PORT}`)
})
