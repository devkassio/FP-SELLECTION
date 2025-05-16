let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

const backgrounds = [
    'radial-gradient(#000, rgb(228, 227, 227))',   // Porsche
    'radial-gradient(#000, yellow)',              // Lamborghini
    'radial-gradient(#000, red)'                  // Ferrari
]


function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')   
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

    // Trocar cor de fundo da section

    document.querySelector('section').style.backgroundImage = backgrounds[active]
}

nextButton.onclick = () => {
    
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')

    
}

prevButton.onclick = () => {

    list.style.setProperty('--calculation', - 1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}



