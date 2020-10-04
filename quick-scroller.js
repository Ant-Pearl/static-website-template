if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var QSContents = document.getElementsByClassName("qs-selector")
  console.log(QSContents)
  for (var i = 0; i < QSContents.length; i++) {
    QSContents[i].addEventListener("click", scrollToSection)
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
  window.scrollTo(0, header.offsetTop)
}
