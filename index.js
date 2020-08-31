if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  var imagesList = ["Images/placeholder.png", "Images/placeholder-green.png", "Images/placeholder-red.png", "Images/placeholder-purple.png"]
  var currentImage = 0
  ready()
}

function ready() {
  var arrowLeft = document.getElementsByClassName('arrow-left')[0]
  var arrowRight = document.getElementsByClassName('arrow-right')[0]
  arrowLeft.addEventListener('click', nextImageLeft)
  arrowRight.addEventListener('click', nextImageRight)
  setInterval(nextImageAuto, 10000)
}

function nextImageAuto() {
  currentImage = (currentImage + 1)%imagesList.length
  if (currentImage > imagesList.length) {
    currentImage = 0
  }
  document.getElementsByClassName("slideshow-image")[0].src = imagesList[currentImage]
}

function nextImageLeft(event) {
  currentImage = (currentImage - 1)%imagesList.length
  if (currentImage < 0) {
    currentImage = 3
  }
  console.log(currentImage)
  event.target.parentElement.getElementsByClassName("slideshow-image")[0].src = imagesList[currentImage]
}

function nextImageRight(event){
  currentImage = (currentImage + 1)%imagesList.length
  if (currentImage > imagesList.length) {
    currentImage = 0
  }
  event.target.parentElement.getElementsByClassName("slideshow-image")[0].src = imagesList[currentImage]
}

function imageTransition() {
  document.getElementsByClassName("slideshow-transition-image")[0].src = imagesList[currentImage]
}
