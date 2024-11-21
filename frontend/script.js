const displayName = document.getElementById('displayName')
const displayEmail = document.getElementById('displayEmail')
const displayPassword = document.getElementById('displayPassword')

const choice = document.getElementById('choice')
const registerSection = document.getElementById('registerSection')
const loginSection = document.getElementById('loginSection')
const homepage = document.getElementById('homepage')

function showRegister() {
  choice.style.display = 'none'
  registerSection.style.display = 'block'
}

function showLogin() {
  choice.style.display = 'none'
  loginSection.style.display = 'block'
}

function login() {
  const email = document.getElementById('loginEmail').value
  const password = document.getElementById('loginPassword').value

  if (!email || !password) {
    console.log('Email and password are required')
    alert('Email and password are required')
    return
  }

  fetch(`http://localhost:3000/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        console.log('Login failed')
      }
      return res.json()
    })
    .then((data) => {
      console.log('login successfully')

      document.getElementById('choice').style.display = 'none'
      document.getElementById('loginSection').style.display = 'none'
      document.getElementById('homepage').style.display = 'block'
      document.getElementById('displayName').innerText = `Name: ${data.name}`
      document.getElementById('displayEmail').innerText = `Email: ${data.email}`
      document.getElementById(
        'displayPassword'
      ).innerText = `Password: ${data.password}`
    })
    .catch((err) => {
      console.error('Error during login:', err)
    })
}
function register() {
  const name = document.getElementById('registerName').value
  const email = document.getElementById('registerEmail').value
  const password = document.getElementById('registerPassword').value

  if (!name || !email || !password) {
    console.log('Name, Email and password are required')
  }

  fetch(`http://localhost:3000/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        console.log('Register failed')
      }
      return res.json()
    })
    .then((data) => {
      console.log('registered successfully')

      document.getElementById('registerSection').style.display = 'none'
      document.getElementById('loginSection').style.display = 'block'
      alert('successfully registered')
    })
    .catch((err) => {
      console.error('Error during register:', err)
    })

  showLogin()
}
