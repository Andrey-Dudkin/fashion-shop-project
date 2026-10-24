// * navbar fixed
function secureNavbar() {
  const navbar = document.querySelector('.navbar')
  const withScroll = 15
  if (!navbar) {
    return
  }
  if (window.scrollY > withScroll) {
    navbar.classList.add('navbar--fixed')
  } else {
    navbar.classList.remove('navbar--fixed')
  }
}
window.addEventListener('scroll', secureNavbar)

// * mobile menu
function openMenu() {
  const burgerBtn = document.querySelector('.burger-menu__btn')
  const burgerIcon = document.querySelector('.burger-menu__icon')
  const navbarNavigation = document.querySelector('.navbar-navigation')
  document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      navbarNavigation.classList.remove('navbar-navigation--opem')
      burgerIcon.classList.remove('burger-menu__icon-active')
    })
  })
  burgerBtn.addEventListener('click', function () {
    burgerIcon.classList.toggle('burger-menu__icon-active')
    navbarNavigation.classList.toggle('navbar-navigation--opem')
  })
}
openMenu()
