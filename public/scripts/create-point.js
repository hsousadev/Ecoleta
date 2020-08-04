
// função para adicionar as uf na caixa de seleção do Estado
function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {
        for (const state of states) {
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })


}

populateUFs()

// EVENTO PRINCIPAL
document
    .querySelector('select[name=uf]')
    .addEventListener("change", getCities)


// função para pegar a cidades de acordo com o evento principal
function getCities() {

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value 

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value= "${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })



}


// Itens de Coleta
/// Pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
}

// verificar se existem itens selecionados, se sim
// pegar os itens selecionados
const alreadySelected = selectedItems.findIndex( item => {
    const itemFound = item == itemId // true or false
    return itemFound
})

// se já estiver selecionado, tirar da seleção 
if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter( item => {
        const itemsIsDifferent = item != itemId
        return itemsIsDifferent
    })

    selectedItems = filteredItems
} else {
    selectedItems.push(itemId)
}

//atualizar o campo escondido com os itens selecionados
collectedItems.value = selectedItems