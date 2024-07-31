document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display")
  let buttons = Array.from(document.getElementsByClassName("btn"))
  const prefix = " ♥ "
  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "C":
          display.value = ""
          break
        case "=":
          try {
            display.value = prefix + eval(display.value)
          } catch {
            display.value = "DEU ERRO MAN"
          }
          break
        default:
          display.value += e.target.innerText
      }
    })
  })
})
