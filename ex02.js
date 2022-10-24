function calcular(){
    
    var formaPgmto = document.querySelector('input[name="pagamento"]:checked').value;

    var valor = document.querySelector('#valor').value;
    var desconto = 0;
    var total = 0;

    if(valor < 100) {
        total = valor;
    } else if(formaPgmto == "avista") {
        desconto = valor * 0.01;
        total = valor - desconto;
    }

    document.getElementById('desconto').innerHTML = parseFloat(desconto).toFixed(2);
    document.getElementById('valor-total').innerHTML = parseFloat(total).toFixed(2);
}