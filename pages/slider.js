let images = [
  { url: '../images/slide1.svg' },
  { url: '../images/slide2.svg' },
  { url: '../images/slide3.svg' },
]

let cities = [
  {
    cityName: 'Rostov-on-Don LCD admiral',
    repairTime: '3.5 months',
    apartmentArea: '81 m2',
    repairCost: 'Upon request',
  },
  {
    cityName: 'Sochi',
    repairTime: '3.5 months',
    apartmentArea: '81 m2',
    repairCost: 'Upon request',
  },
  {
    cityName: 'Rostov-on-Don LCD Patriotic',
    repairTime: '3.5 months',
    apartmentArea: '81 m2',
    repairCost: 'Upon request',
  },
]

function initSlider(options) {
  if (!images || !images.length) return
  
  options = options || {
    titles: false,
    dots: true,
  }
  
  let sliderImages = document.querySelector('.slider__images')
  let sliderArrows = document.querySelector('.slider__arrows')
  let sliderDots = document.querySelector('.slider__dots')
  let sliderNav = document.querySelector('.block3__navigation__nav')
  let sliderCities = document.querySelector('.block2_projects__cities-slider')
  
  initImages()
  initCities()
  initArrows()
  
  if (options.dots) {
    initDots()
    initNav()
  }
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `
        <div
          class='image n${index} ${index === 0 ? 'active' : ''}'
          style='background-image:url(${images[index].url});'
          data-index='${index}'>
        </div>
      `
      
      sliderImages.innerHTML += imageDiv
    })
  }
  
  function initCities() {
    cities.forEach((city, index) => {
      let cityDiv = `
        <div class='block2_projects__city n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>
          <div class='block2_projects__text_blocks'>
            <div class='block2_projects__text_blocks1'>
              <h1 class='text_blocks1_h1'>
                CITY
              </h1>
              <p class='text_blocks1_p'>
                ${city.cityName}
              </p>
            </div>
            <div class='block2_projects__text_blocks2'>
              <h1 class='text_blocks1_h1'>
                APARTMENT AREA
              </h1>
              <p class='text_blocks1_p'>
                ${city.apartmentArea}
              </p>
            </div>
          </div>
          <div class='block2_projects__text_blocks'>
            <div class='block2_projects__text_blocks1'>
              <h1 class='text_blocks1_h1'>
                REPAIR TIME
              </h1>
              <p class='text_blocks1_p'>
                ${city.repairTime}
              </p>
            </div>
            <div class='block2_projects__text_blocks2'>
              <h1 class='text_blocks1_h1'>
                REPAIR COST
              </h1>
              <p class='text_blocks1_p'>
                ${city.repairCost}
              </p>
            </div>
          </div>
        </div>
      `
      
      sliderCities.innerHTML += cityDiv
    })
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll('.slider__arrow').forEach(arrow => {
      arrow.addEventListener('click', function() {
        let curNumber = +sliderImages.querySelector('.active').dataset.index
        let nextNumber
        
        if (arrow.classList.contains('left')) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1
        }
        
        moveSlider(nextNumber)
      })
    })
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `
        <div
          class='slider__dots-item n${index} ${index === 0 ? 'active' : ''}'
          data-index='${index}'
        ></div>
      `
      
      sliderDots.innerHTML += dot
    })
    
    sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
      dot.addEventListener('click', function() {
        moveSlider(this.dataset.index)
      })
    })
  }
  
  function initNav() {
    images.forEach((image, index) => {
      const imageNames = ['ROSTOV-ON-DON ADMIRAL', 'SOCHI THIEVES', 'ROSTOV-ON-DON PATRIOTIC']
      
      let dot = `
        <li
          class='block3__navigation__nav-item n${index} ${index === 0 ? 'active' : ''}'
          data-index='${index}'
        >
          ${imageNames[index]}
        </li>
      `
      
      sliderNav.innerHTML += dot
    })
    
    sliderNav.querySelectorAll('.block3__navigation__nav-item').forEach(dot => {
      dot.addEventListener('click', function() {
        moveSlider(this.dataset.index)
      })
    })
  }
  
  function moveSlider(num) {
    sliderImages.querySelector('.active').classList.remove('active')
    sliderImages.querySelector('.n' + num).classList.add('active')
    sliderCities.querySelector('.active').classList.remove('active')
    sliderCities.querySelector('.n' + num).classList.add('active')
    
    console.log(
      '%c Td - handlers - sliderNav.querySelector(.n + num)',
      'color: white; background-color: #95B46A',
      sliderNav.querySelector('.n' + num),
    )
    
    if (sliderNav.querySelector('.active')) {
      sliderNav.querySelector('.active').classList.remove('active')
    }
    
    sliderNav.querySelector('.n' + num).classList.add('active')
    
    if (options.dots) {
      if (sliderDots.querySelector('.active')) {
        sliderDots.querySelector('.active').classList.remove('active')
      }
      
      sliderDots.querySelector('.n' + num).classList.add('active')
    }
  }
}

let sliderOptions = {
  dots: true,
  titles: true,
}

document.addEventListener('DOMContentLoaded', function() {
  initSlider(sliderOptions)
})
