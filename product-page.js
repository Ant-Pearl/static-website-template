if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}



function ready() {
  var gallery = document.getElementsByClassName('product-page-image')
  for (var i = 0; i < gallery.length; i++) {
    image = gallery[i]
    image.addEventListener('click', makeImageBig)
  }
}

function makeImageBig(event) {
  console.log(document.getElementsByClassName('main-header')[0].clientHeight)
  if (window.scrollY > document.getElementsByClassName('main-header')[0].clientHeight){
    console.log(document.getElementsByClassName('product-page-image-big-container')[0].style.top)
    document.getElementsByClassName('product-page-image-big-container')[0].style.top = parseInt(window.scrollY) + 'px'
    console.log(window.scrollY)
  }
  document.getElementsByClassName('product-page-image-big-container')[0].style.visibility = 'visible'
  document.getElementsByClassName('product-page-image-big-container')[0].style.height = screen.height
}
