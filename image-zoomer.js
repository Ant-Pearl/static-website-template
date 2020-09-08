if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var gallery = document.getElementsByClassName('zoomable-image')
  for (var i = 0; i < gallery.length; i++) {
    image = gallery[i]
    image.addEventListener('click', openImageBig)
  }
  document.addEventListener('scroll', closeImageBig)
  document.getElementsByClassName('pp-image-big-container')[0].addEventListener('click', closeImageBig)
  document.getElementsByClassName('pp-image-big')[0].addEventListener('click', openFullSizeImage)
}

function openImageBig(event) {
  document.getElementsByClassName('pp-image-big-container')[0].style.top = parseInt(window.scrollY) + 'px'
  document.getElementsByClassName('pp-image-big-container')[0].height = screen.height + 100
  document.getElementsByClassName('pp-image-big-container')[0].style.visibility = 'visible'
  document.getElementsByClassName('pp-image-big-container')[0].style.height = screen.height
  document.getElementsByClassName('pp-image-big')[0].src = event.target.src
  document.getElementsByClassName('pp-image-big-description')[0].innerHTML = event.target.parentElement.getElementsByClassName('zoomable-description')[0].innerHTML
}

function closeImageBig(event) {
  document.getElementsByClassName('pp-image-big-container')[0].style.visibility = 'hidden'
}

function openFullSizeImage(event) {
  window.open(event.target.src)
}
