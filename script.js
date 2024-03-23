const produtoForm = document.querySelector('#produto-form')
const produtoLista = document.querySelector('#produto-lista')
const btnAddProduto = document.querySelector('#btn-produto-add')

// array que armazenará os produtos.
let produtos = []


// Listener do 'submit' [Cadastrar Produto] do formulário.
produtoForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    cadastraProduto()
})

// Função que cadastra o produto na listagem.
const cadastraProduto = () => {
    const p_nome = document.querySelector('#produto-nome').value
    const p_desc = document.querySelector('#produto-desc').value
    const p_valor = document.querySelector('#produto-valor').value
    const p_disp = document.querySelector('#produto-disp').value

    const produto = {
        nome: p_nome,
        descricao: p_desc,
        valor: p_valor,
        disponivel: p_disp
    }

    produtos.push(produto)
    addProdutoLista(produto)
    ordenarProdutos()
    limparForm()
}


// Ordena os produtos na lista por valor
const ordenarProdutos = () => {
    produtoLista.innerHTML = ''
    produtos.sort((produto1, produto2) => produto1.valor - produto2.valor)
    produtos.forEach((el) => {
        addProdutoLista(el)
    })
}


// Limpa os campos do formulário
const limparForm = () => {
    const p_nome = document.querySelector('#produto-nome').value = ''
    const p_desc = document.querySelector('#produto-desc').value = ''
    const p_valor = document.querySelector('#produto-valor').value = ''
    const p_disp = document.querySelector('#produto-disp').value = 'sim'
}


// Adiciona o produto na lista
const addProdutoLista = (produto) => {
    const linha = document.createElement('tr')
    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
    `
    produtoLista.appendChild(linha)
}


// Listener para o botão 'Adicionar Novo Produto'
btnAddProduto.addEventListener('click', (evt) => {
    const p_nome = document.querySelector('#produto-nome')
    p_nome.focus()
})


// Mostra os produtos na lista no carregamento da página
window.onload = function() {
    ordenarProdutos()
}