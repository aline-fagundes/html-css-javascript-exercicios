function descrever(){
    var cidade = document.getElementById('cidade').value;

    switch(cidade){
        case 'sao-paulo':
            document.getElementById("descricao").innerHTML = 'São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica.'
        break;

        case 'indaiatuba':
            document.getElementById("descricao").innerHTML = 'Indaiatuba é um município brasileiro no interior do estado de São Paulo. Pertence à Mesorregião e Microrregião de Campinas.'
        break;

        case 'itu':
            document.getElementById("descricao").innerHTML = 'Itu é uma cidade do estado de São Paulo, no Brasil, situado na Região Metropolitana de Sorocaba, na Mesorregião Macro Metropolitana Paulista e na Microrregião de Sorocaba.'
        break;
        
        case 'salto':
            document.getElementById("descricao").innerHTML = 'Salto é um município brasileiro do estado de São Paulo. O município é cortado pelo rio Tietê.'
        break;
    }
}

/* 
    var cidades = ['descricao da cidade 1', 'descricao da cidade 2', 'descricao da cidade 3']
    
    function descrever() {
        var escolha = document.getElementById('cidade');
        document.getElementById("descricao").innerHTML = cidades[escolha.selectedIndex]
    } 
*/