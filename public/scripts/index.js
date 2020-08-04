
// Modal da página
const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

/// Quando clicar no botão de pesquisar
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})
/// Quando clicar no botão de fechar
close.addEventListener("click", () => {
    modal.classList.add("hide")
})


