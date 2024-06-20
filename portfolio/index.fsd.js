var textLight = document.getElementById('textLight')
var lightLogo = document.getElementById('logoLight')
var darkLogo = document.getElementById('logoDark')
var switcher = document.getElementById('theme-switcher-light')
var imgLight = document.getElementById('img-light')
var imgbgLight = document.getElementById('imgbg-light')
var imgbgDark = document.getElementById('imgbg-dark')
var imgDark = document.getElementById('img-dark')
var services = document.getElementById('services')
var clients = document.getElementById('clients')
var moon = document.getElementById('moon')
var sun = document.getElementById('sun')

var counter = 0

switcher.addEventListener('click', () => {
    if (counter % 2 !== 0) {
        // switch to dark theme
        document.body.classList.toggle('dark-bg')
        lightLogo.classList.toggle('hide')
        darkLogo.classList.toggle('hide')
        textLight.classList.toggle('landing-text-container-dark')
        imgLight.classList.toggle('hide')
        imgDark.classList.toggle('hide')
        imgbgLight.classList.toggle('hide')
        imgbgDark.classList.toggle('hide')
        services.classList.toggle('dark-links')
        clients.classList.toggle('dark-links')
        moon.classList.toggle('hide')
        sun.classList.toggle('hide')

        counter += 1 

    } else {
        document.body.classList.toggle('dark-bg')
        lightLogo.classList.toggle('hide')
        darkLogo.classList.toggle('hide')
        imgbgLight.classList.toggle('hide')
        imgbgDark.classList.toggle('hide')
        textLight.classList.toggle('landing-text-container-dark')
        imgLight.classList.toggle('hide')
        imgDark.classList.toggle('hide')
        services.classList.toggle('dark-links')
        clients.classList.toggle('dark-links')
        moon.classList.toggle('hide')
        sun.classList.toggle('hide')
        
        counter += 1
    }
})