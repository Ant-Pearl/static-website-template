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
  console.log('incomplete')
}
