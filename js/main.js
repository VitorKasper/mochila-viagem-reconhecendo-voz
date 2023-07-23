const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach( (elemento) => {    
    criaElemento(elemento)
})    

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    const validaItem = itens.find( elemento => elemento.nome === nome.value)
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (validaItem) {
        itemAtual.id = validaItem.id
        atualizaItem(itemAtual)
        itens[validaItem.id] = itemAtual
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }


    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""

})

function criaElemento(item) {
    
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const novaQuantidade = document.createElement('strong')
    novaQuantidade.innerText = item.quantidade
    novaQuantidade.dataset.id = item.id

    novoItem.appendChild(novaQuantidade)
    novoItem.innerHTML += item.nome
    novoItem.appendChild(botaoRemove(item.id))

    lista.appendChild(novoItem)

}

function atualizaItem (item) {
    const elemento = document.querySelector("[data-id='"+item.id+"']")
    elemento.innerHTML = item.quantidade
}

function botaoRemove(id) {
    const btn_remove = document.createElement('button')
    btn_remove.innerText = "X"

    btn_remove.addEventListener('click', function() {
        removeElemento(this.parentNode, id)
    })

    return btn_remove
}

function removeElemento(btn, id) {
    console.log(btn)
    btn.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem('itens',JSON.stringify(itens))
}