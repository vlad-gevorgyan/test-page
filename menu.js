// decstop after 480px

const menuItems = document.querySelectorAll('.menu__item')

for (const menu__item of menuItems) {
  menu__item.addEventListener('click', () => {
    clearActiveClasses()

    menu__item.classList.add('menu__item_active')
  })
}


function clearActiveClasses() {
  menuItems.forEach((menu__item) => {
    menu__item.classList.remove('menu__item_active')
  })
}

// hamburger

const hamburger = document.querySelector('#hamburger-1');
const menu = document.querySelector('.menu_top');
const body = document.body;

hamburger.addEventListener('click', (event) => {
  event.preventDefault
  hamburger.classList.toggle('is-active')
  
  if (document.querySelector('.hamburger').classList.contains('is-active')) {
    menu.style.display = "block";
    body.classList.add("noscroll");
  } else {
    menu.style.display = "none"
    body.classList.remove("noscroll");
  }
})


// menu content 

const home = document.querySelector('.home')
const blog = document.querySelector('.blog')
const aboutUs = document.querySelector('.aboutus')
const catagory = document.querySelector('.catagory')
const contactUs = document.querySelector('.contactus')
const subscribe = document.querySelector('.subscribes')
const sections = document.querySelectorAll('section')


home.addEventListener('click', () => {
  clearActive()
  document.querySelector('section.first-screen').classList.add('active_display')
  document.querySelector('footer.footer-subscribe').classList.remove('active_display')
  menu.style.display = "none"
  hamburger.classList.remove('is-active')

})

blog.addEventListener('click', () => {
  clearActive()
  document.querySelector('section.posts-block').classList.add('active_display')
  document.querySelector('footer.footer-subscribe').classList.remove('active_display')
  menu.style.display = "none"
  hamburger.classList.remove('is-active')
})

aboutUs.addEventListener('click', () => {
  clearActive()
  document.querySelector('section.information-block').classList.add('active_display')
  document.querySelector('footer.footer-subscribe').classList.remove('active_display')
  menu.style.display = "none"
  hamburger.classList.remove('is-active')
})

catagory.addEventListener('click', () => {
  clearActive()
  document.querySelector('section.catagory-block').classList.add('active_display')
  document.querySelector('section.started-block').classList.add('active_display')
  document.querySelector('footer.footer-subscribe').classList.remove('active_display')
  menu.style.display = "none"
  hamburger.classList.remove('is-active')
})

contactUs.addEventListener('click', () => {
  clearActive()
  document.querySelector('section.authors-block').classList.add('active_display')
  document.querySelector('section.reviews-block').classList.add('active_display')
  document.querySelector('footer.footer-subscribe').classList.remove('active_display')
  menu.style.display = "none"
  hamburger.classList.remove('is-active')
})

subscribe.addEventListener('click', () => {
  clearActive()
  document.querySelector('section.now-block').classList.add('active_display')
  document.querySelector('footer.footer-subscribe').classList.add('active_display')
  menu.style.display = "none"
  hamburger.classList.remove('is-active')
})


function clearActive() {
  sections.forEach((section) => {
    section.classList.remove('active_display')
  })
}

