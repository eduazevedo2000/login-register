const router = require('express').Router()
const User = require('../model/user')

router.get('/getAllUsers', async (req, res) => {
  const allUsers = await User.find()
  res.json(allUsers)
})

router.get('/getUser/:email&:password', async (req, res) => {
  const email = req.params.email
  const password = req.params.password
  const userObject = {
    email: email,
    password: password,
  }

  const user = await User.find(userObject)
  res.json(user)
})

router.post('/addNewUser', async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const newUser = new User({
    name: name,
    email: email,
    password: password,
  })

  await newUser.save()

  res.json(`${newUser.name} added successfully`)
})

module.exports = router
