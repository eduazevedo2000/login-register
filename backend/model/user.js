const mongoose = require('mongoose')

const user = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
})

module.exports = mongoose.model('user', user)
