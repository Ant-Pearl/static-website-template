if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  console.log("test")
  ready()
}

var imagesList = ["Images/placeholder.png", "Images/placeholder-green.png", "Images/placeholder-red.png", "Images/placeholder-purple.png"]
var currentImage = 0
var headerHeight = document.getElementsByTagName('header')[0].clientHeight
var phoneElement = document.getElementsByClassName('peeker')[0]

function ready() {
  var arrowLeft = document.getElementsByClassName('arrow-left')[0]
  var arrowRight = document.getElementsByClassName('arrow-right')[0]
  arrowLeft.addEventListener('click', nextImageLeft)
  arrowRight.addEventListener('click', nextImageRight)
  setInterval(nextImageAuto, 10000)
  document.addEventListener('scroll', phoneNumberSticky)
}

function nextImageAuto() {
  imageTransition()
  currentImage = (currentImage + 1)%(imagesList.length)
  if (currentImage > imagesList.length) {
    currentImage = 0
  }
  document.getElementsByClassName("slideshow-image")[0].src = imagesList[currentImage]
}

function nextImageLeft(event) {
  imageTransition()
  currentImage = (currentImage - 1)%(imagesList.length)
  if (currentImage < 0) {
    currentImage = 3
  }
  event.target.parentElement.getElementsByClassName("slideshow-image")[0].src = imagesList[currentImage]
}

function nextImageRight(event){
  imageTransition()
  currentImage = (currentImage + 1)%(imagesList.length)
  if (currentImage > imagesList.length) {
    currentImage = 0
  }
  event.target.parentElement.getElementsByClassName("slideshow-image")[0].src = imagesList[currentImage]
}

function imageTransition() {
  document.getElementsByClassName("slideshow-transition-image")[0].width = document.getElementsByClassName("slideshow-image")[0].width
  document.getElementsByClassName("slideshow-transition-image")[0].src = imagesList[currentImage]
  document.getElementsByClassName("slideshow-transition-image")[0].style.transition = "0s"
  document.getElementsByClassName("slideshow-transition-image")[0].style.opacity = 1
  setTimeout(imageTransition2, 20)
}

function imageTransition2() {
  document.getElementsByClassName("slideshow-transition-image")[0].style.transition = ".5s"
  document.getElementsByClassName("slideshow-transition-image")[0].style.opacity = 0
}

function phoneNumberSticky(event) {
  console.log(window.scrollY)
  console.log(headerHeight)
  if (window.scrollY > headerHeight) {
    console.log('yoyoyoyo')
    phoneElement.style.top = parseInt(window.scrollY) + 'px'
  } else{
    phoneElement.style.top = '-35px'
  }
}
