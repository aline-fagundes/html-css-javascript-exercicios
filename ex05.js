function converter() {
    
    var valorInicial = document.querySelector('#valor').value;
    var conversao = document.querySelector('input[name="conversao"]:checked').value;
    var valorConvertido = 0;

    switch(conversao){
        case 'dolar-real':
            valorConvertido = valorInicial / 0.18;
        break;
    
        case 'real-dolar':
            valorConvertido = valorInicial * 0.18;
        break;
    
        case 'euro-real':
            valorConvertido = valorInicial / 0.15;
        break;
            
        case 'real-euro':
            valorConvertido = valorInicial * 0.15;
        break;

        case 'libra-real':
            valorConvertido = valorInicial / 0.13;
        break;

        case 'real-libra':
            valorConvertido = valorInicial * 0.13;
        break;
    } 
    document.getElementById('valor-convertido').innerHTML = parseFloat(valorConvertido).toFixed(2);
 }
