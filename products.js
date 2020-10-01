if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

var headerHeight = document.getElementsByTagName('header')[0].clientHeight
var phoneElement = document.getElementsByClassName('peeker')[0]


function ready() {
  var categories = document.getElementsByClassName('product-header')
  for (var i = 0; i < categories.length; i++) {
    var category = categories[i]
    category.addEventListener('click', expandProduct)
    category.parentElement.getElementsByClassName('product-summary')[0].style.transition = '0s'
    category.parentElement.getElementsByClassName('product-summary')[0].style.opacity = 0
    category.parentElement.getElementsByClassName('product-summary')[0].style.position = 'absolute'
    category.parentElement.getElementsByClassName('product-summary')[0].style.visibility = 'hidden'
  }
  document.addEventListener('scroll', peeker)
}

function expandProduct(event) {
  var category = event.target
  //console.log(product.parentElement.getElementsByClassName('product-summary'))
  var categorySummary = category.parentElement.getElementsByClassName('product-summary')[0]
  if (categorySummary.style.position == 'relative') {
    categorySummary.style.transition = '0s'
    categorySummary.style.opacity = 0
    categorySummary.style.position = 'absolute'
    categorySummary.style.visibility = 'hidden'
    event.target.getElementsByClassName('product-expand')[0].style.transform = "rotate(0deg)"
  } else {
    categorySummary.style.transition = '.5s'
    categorySummary.style.position = 'relative'
    categorySummary.style.visibility = 'visible'
    categorySummary.style.opacity = 1
    event.target.getElementsByClassName('product-expand')[0].style.transform = "rotate(180deg)"
    if (categorySummary.clientHeight > window.innerHeight) {
      //addCollapsePeekButton(category)
    }
  }
}


//function addCollapsePeekButton(category) {
//  var expandUp = `
//  <img class="${category}" src="Images/expand-arrow-up.png">`
//  document.getElementsByClassName('collapse-category-container')[0].innerHTML = expandUp

//}

function peeker(event) {
  if (window.scrollY > headerHeight) {
    phoneElement.style.top = parseInt(window.scrollY) + 'px'
  } else{
    phoneElement.style.top = '-70px'
  }
}
