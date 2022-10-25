function obterMenor() {
   var n1 = document.querySelector('#valor1').value;
   var n2 = document.querySelector('#valor2').value;
   var n3 = document.querySelector('#valor3').value;

   var menor = Math.min(n1, n2, n3);
   console.log(menor);
   document.querySelector('#resultado').innerHTML = menor;
}