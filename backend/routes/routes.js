const router = require('express').Router()
const User = require('../model/user')

router.get('/getAllUsers', async (req, res) => {
  const allUsers = await User.find()
  res.json(allUsers)
})

router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const user = await User.findOne({ email, password })

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }
  res.json({ name: user.name, email: user.email, password: user.password })
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
