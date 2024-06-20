var moon = document.getElementById('moon')
var sun = document.getElementById('sun')
var home = document.getElementById('home-section')
var faq = document.getElementById('faq')
var text = document.getElementById('text-container')
var acceptBtn = document.getElementById('accept-btn')
var lightHtml = document.getElementById('light-html')
var lightCss = document.getElementById('light-css')
var lightDesign = document.getElementById('light-design')
var darkHtml = document.getElementById('dark-html')
var darkCss = document.getElementById('dark-css')
var darkDesign = document.getElementById('dark-design')

moon.addEventListener('click', (e)=>{
    e.preventDefault()
    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
    home.classList.toggle('dark-theme')
    text.classList.toggle('text-container-dark')
    lightHtml.classList.toggle('hide')
    lightCss.classList.toggle('hide')
    lightDesign.classList.toggle('hide')
    darkHtml.classList.toggle('hide')
    darkCss.classList.toggle('hide')
    darkDesign.classList.toggle('hide')
})

sun.addEventListener('click', (e)=>{
    e.preventDefault()
    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
    home.classList.toggle('dark-theme')
    home.classList.add('light-bg')
    text.classList.toggle('text-container-dark')
    lightHtml.classList.toggle('hide')
    lightCss.classList.toggle('hide')
    lightDesign.classList.toggle('hide')
    darkHtml.classList.toggle('hide')
    darkCss.classList.toggle('hide')
    darkDesign.classList.toggle('hide')
})

