function contarCheckboxes() {
    var inputs = document.querySelectorAll('input[type="checkbox"]:checked');
    var totalChecked = inputs.length;
    document.getElementById("total-checked").innerHTML = totalChecked;       
} 

/*function contarCheckboxes(){
    var inputs = document.querySelectorAll('input[type="checkbox"]');
    var selecionados = 0;

    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].checked == true){
        selecionados++;
        }   
    }
    document.getElementById("total-checked").innerHTML = selecionados;       
  }
*/