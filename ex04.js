function contarCheckboxes(){
    var inputs = document.getElementsByTagName('input');
    var selecionados = 0;

    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].type == 'checkbox'){
            if(inputs[i].checked == true){
            selecionados++;
            }   
        }
    }
    document.getElementById("total-checked").innerHTML = selecionados;       
  }

/* function contarCheckboxes() {
    var totalChecked = $("input[type=checkbox]:checked").length;
    
    console.log(totalChecked);
    document.getElementById("total-checked").innerHTML = totalChecked;       
} 
*/