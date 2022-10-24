function calcular(){
    var n1 = parseFloat(document.querySelector('#n1').value);
    var n2 = parseFloat(document.querySelector('#n2').value);
    var resultado = n1 + n2;
    console.log(resultado);

    document.querySelector('#resposta').innerHTML = `O resultado é ${resultado}!`;
}
