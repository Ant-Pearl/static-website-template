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
    product.parentElement.getElementsByClassName('product-summary')[0].style.transition = '0s'
    product.parentElement.getElementsByClassName('product-summary')[0].style.opacity = 0
    product.parentElement.getElementsByClassName('product-summary')[0].style.position = 'absolute'
    product.parentElement.getElementsByClassName('product-summary')[0].style.visibility = 'hidden'
  }

}

function expandProduct(event) {
  var product = event.target
  //console.log(product.parentElement.getElementsByClassName('product-summary'))
  var productSummary = product.parentElement.getElementsByClassName('product-summary')[0]
  if (productSummary.style.position == 'relative') {
    productSummary.style.transition = '0s'
    productSummary.style.opacity = 0
    productSummary.style.position = 'absolute'
    productSummary.style.visibility = 'hidden'
  } else {
    productSummary.style.transition = '.5s'
    productSummary.style.position = 'relative'
    productSummary.style.visibility = 'visible'
    productSummary.style.opacity = 1
    setTimeout(productTransition(productSummary), 20)
  }
}

function productTransition(productSummary) {
  console.log(productSummary)

}
