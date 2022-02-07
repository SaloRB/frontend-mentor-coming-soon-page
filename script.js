const formElement = document.getElementById('form')
const emailElement = document.getElementById('email')
const errorElement = document.getElementById('error')

formElement.addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  // validate email is not empty and valid
  if (emailElement.value === '' || !emailElement.value.includes('@')) {
    emailElement.classList.add('has-error')
    errorElement.innerText = 'Please provide a valid email address'
  } else {
    emailElement.classList.remove('has-error')
    errorElement.innerText = ''
    emailElement.value = ''
  }
}
