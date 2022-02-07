const navToggle = document.querySelector('#navToggle')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const navInContent = document.getElementById('navInContent')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    overlay.classList.toggle('open')
    body.classList.toggle('locked')
})