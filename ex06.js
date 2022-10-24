function revelarSigno() {

    const data = document.getElementById('nascimento').value;  
    console.log(data);
    const mes = data.substring(5).substring(0,2);
    console.log(mes);
    const dia = data.substring(8);
    console.log(dia);

    var signo = 'erro';

    switch(mes) {
        case '01':
            dia <=19 ? signo = 'Capricornio' : signo = 'Aquario';
        break;
        
        case '02':
           dia <= 18 ? signo = 'Aquario' : signo = 'Peixes';
        break;

        case '03':
           dia <= 20 ? signo = 'Peixes' : signo = 'Aries';
        break;

        case '04':
           dia <= 19 ? signo = 'Aries' : signo = 'Touro';
        break;

        case '05':
           dia <= 20 ? signo = 'Touro' : signo = 'Gemeos';
        break;

        case '06':
           dia <= 20 ? signo = 'Gemeos' : signo = 'Cancer';
        break;

        case '07':
           dia <= 22 ? signo = 'Cancer' : signo = 'Leao';
        break;

        case '08':
           dia <= 22 ? signo = 'Leao' : signo = 'Virgem';
        break;

        case '09':
           dia <= 22 ? signo = 'Virgem' : signo = 'Libra';
        break;

        case '10':
           dia <= 22 ? signo = 'Libra' : signo = 'Escorpiao';
        break;

        case '11':
           dia <= 21 ? signo = 'Escorpiao' : signo = 'Sagitario';
        break;

        case '12':
           dia <= 21 ? signo = 'Sagitario' : signo = 'Capricornio';
        break;
    }

    console.log(signo)
    document.getElementById("signo-revelado").innerHTML = signo;       
}
