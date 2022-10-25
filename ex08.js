function converter() {
   var horario = document.querySelector('#horario').value;
   var cidade = document.querySelector('input[name="cidade"]:checked').value;

   const data = new Date((["2022-10-22", horario]));

   switch(cidade){
       case 'lisboa':
         tz = "Europe/Lisbon";
       break;
   
       case 'nova-iorque':
         tz = "America/Detroit";
      break;
   
       case 'cidade-do-mexico':
         tz = "America/Mexico_City";
       break;
           
       case 'toquio':
         tz = "Asia/Tokyo";
       break;

       case 'berlim':
         tz = "Europe/Berlin";
       break;
   } 

   const horarioConvertido = data.toLocaleString("en", { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz });
   document.getElementById('horario-convertido').innerHTML = horarioConvertido;
}


