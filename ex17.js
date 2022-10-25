const produtos = [];

var descricao = '';
var preco = 0;
var estoque = 0;
var unidadeDeMedida = '';

function cadastrar(exibir) {
    if(validarDados()) {
        var produtoCadastrado = {
            descricao: descricao, 
            preco: preco, 
            estoque: estoque, 
            unidadeDeMedida: unidadeDeMedida
        }
    
        console.log(produtoCadastrado);
        produtos.push(produtoCadastrado);
        exibir();
    }
}

function validarDados() {
    var compDescricao = document.getElementById('descricao');
    var compPreco = document.getElementById('preco');
    var compEstoque = document.getElementById('estoque');
    var compUnidadeDeMedida = document.getElementById('unidade-de-medida');

    if(compDescricao.value == '') {
        alert('Informe o nome do produto!');
        compDescricao.focus();
        return false;
    }

    descricao = compDescricao.value;
    preco = compPreco.value;
    estoque = compEstoque.value;
    unidadeDeMedida = compUnidadeDeMedida.value;
    return true;
}

function exibirTabela() {
    var txt = '';
    for(let i = 0; i < produtos.length; i++) {
        txt += `<tr>
                    <td>${produtos[i].descricao}</td>
                    <td>${produtos[i].preco}</td>
                    <td>${produtos[i].estoque}</td>
                    <td>${produtos[i].unidadeDeMedida}</td>
                </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML = txt;
}

/* const produtos = [
    {
        descricao: 'Chocolate', 
        preco: 5.00, 
        estoque: 100, 
        unidadeDeMedida: 'gramas'
    },
    {
        descricao: 'Bala', 
        preco: 2.50, 
        estoque: 50, 
        unidadeDeMedida: 'gramas'
    },
    {
        descricao: 'Toddynho', 
        preco: 3.50, 
        estoque: 75, 
        unidadeDeMedida: 'mililitros'
    }
]

const valorTotal = produtos.forEach(produto => {
    var tipo = produto.descricao
    var valor = produto.preco * produto.estoque
    console.log(`O preço total dos produtos do tipo ${tipo} é R$: ${valor}`)
})
*/
