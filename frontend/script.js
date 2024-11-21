const displayName = document.getElementById('displayName')
const displayEmail = document.getElementById('displayEmail')
const displayPassword = document.getElementById('displayPassword')

const loginSection = document.getElementById('loginSection')
const homepage = document.getElementById('homepage')

function login() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

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
      alert('login successfully')

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
      alert('Login failed. Please check your credentials.')
    })
}

document.getElementById('loginButton').addEventListener('click', login)
