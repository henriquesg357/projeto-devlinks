function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img (corrected selector)
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assests/avatar.png")
  } else {
    img.setAttribute("src", "./assests/avatar-light.png")
  }
}
