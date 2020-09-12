if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

var headerHeight = document.getElementsByTagName('header')[0].clientHeight
var phoneElement = document.getElementsByClassName('peeker')[0]

function ready() {
  document.addEventListener('scroll', peeker)
}

function peeker(event) {
  if (window.scrollY > headerHeight) {
    phoneElement.style.top = parseInt(window.scrollY) + 'px'
  } else{
    phoneElement.style.top = '-70px'
  }
}
