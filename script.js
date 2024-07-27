document.addEventListener("DOMContentLoaded", function () {
  var startText = document.getElementById("start-text")
  var link = document.createElement("a")
  link.href = "second-page.html" 
  link.textContent = startText.textContent
  link.className = "text"
  startText.parentNode.replaceChild(link, startText)
})
