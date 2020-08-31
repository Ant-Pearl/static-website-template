if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var products = document.getElementsByClassName('product-header')
  for (var i = 0; i < products.length; i++) {
    var product = products[i]
    product.addEventListener('click', expandProduct)
  }
}

function expandProduct(event) {
  var product = event.target
  console.log(product.parentElement.getElementsByClassName('product-summary'))
  var productSummary = product.parentElement.getElementsByClassName('product-summary')[0]
  if (productSummary.style.position == 'relative') {
    productSummary.style.position = 'absolute'
    productSummary.style.visibility = 'hidden'
  } else {
    productSummary.style.position = 'relative'
    productSummary.style.visibility = 'visible'
  }
}
