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
  }
  document.addEventListener('scroll', peeker)
}

function expandProduct(event) {
  var category = event.target
  //console.log(product.parentElement.getElementsByClassName('product-summary'))
  var categorySummary = category.parentElement.getElementsByClassName('product-summary')[0]
  if (categorySummary.style.display == 'flex') {
    categorySummary.style.transition = '0s'
    categorySummary.style.display = 'none'
    console.log(categorySummary.style.display)
    event.target.getElementsByClassName('product-expand')[0].style.transform = "rotate(0deg)"
  } else {
    categorySummary.style.transition = '.5s'
    categorySummary.style.display = 'flex'
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
