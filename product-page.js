if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

var headerHeight = document.getElementsByTagName('header')[0].clientHeight
var phoneElement = document.getElementsByClassName('peeker')[0]

function ready() {
  var gallery = document.getElementsByClassName('product-page-image')
  for (var i = 0; i < gallery.length; i++) {
    image = gallery[i]
    image.addEventListener('click', openImageBig)
  }
  document.addEventListener('scroll', closeImageBig)
  document.getElementsByClassName('pp-image-big-container')[0].addEventListener('click', closeImageBig)
  document.getElementsByClassName('pp-image-big')[0].addEventListener('click', openFullSizeImage)
  document.addEventListener('scroll', peeker)
}

function openImageBig(event) {
  document.getElementsByClassName('pp-image-big-container')[0].style.top = parseInt(window.scrollY) + 'px'
  document.getElementsByClassName('pp-image-big-container')[0].height = screen.height + 100
  document.getElementsByClassName('pp-image-big-container')[0].style.visibility = 'visible'
  document.getElementsByClassName('pp-image-big-container')[0].style.height = screen.height
  document.getElementsByClassName('pp-image-big')[0].src = event.target.src
}

function closeImageBig(event) {
  document.getElementsByClassName('pp-image-big-container')[0].style.visibility = 'hidden'
}

function openFullSizeImage(event) {
  window.open(event.target.src)
}

function peeker(event) {
  if (window.scrollY > headerHeight) {
    phoneElement.style.top = parseInt(window.scrollY) + 'px'
  } else{
    phoneElement.style.top = '-35px'
  }
}
