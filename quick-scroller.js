if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var QSContents = document.getElementsByClassName("qs-selector")
  var QSHeaders = document.getElementsByClassName("qs-section")
  console.log(QSHeaders)
  for (var i = 0; i < QSContents.length; i++) {
    QSContents[i].addEventListener("click", scrollToSection)
    QSHeaders[i].addEventListener("click", scrollToTop)
    console.log("For")
  }
}

function scrollToSection(event) {
  console.log("scrollToSection")
  var QSContents = document.getElementsByClassName("qs-selector")
  var i = 0
  console.log(event.target)
  console.log(QSContents[0])
  while (QSContents[i] !== event.target){
    i++
    if(i > 15){
      break
    }
  }
  console.log(i)
  var header = document.getElementsByClassName("qs-section")[i]
  console.log(header)
  console.log(header.offsetTop)
  window.scrollTo({top: header.offsetTop, behavior: 'smooth'})
}

function scrollToTop(event) {
  window.scrollTo({top: 0, behavior: 'smooth'})
}
