function consultarTabuada() {
  var n = document.querySelector('#numero').value; 
    var txt = '';
    for(let i = 0; i <= 10; i++) {
        txt += `<tr>
                    <td>${n}</td>
                    <td>${i}</td>
                    <td>${n*i}</td>
                </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML = txt;
}