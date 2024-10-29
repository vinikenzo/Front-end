
function validar(){
    
    var nomeEl = document.getElementById("txtNome");
    var rgEl = document.getElementById("txtRG");
    var cpfEl = document.getElementById("txtCpf");
    var senhaEl = document.getElementById("txtSenha");
    var confSenhaEl = document.getElementById("txtConfSenha");
    var rdoMascEl = document.getElementById("sexoM");
    var rdoFemEl = document.getElementById("sexoF");
    var rdoOutrosEl = document.getElementById("sexoO");

    if(nomeEl.value == ""){
        alert("Campo obrigatório!")
        nomeEl.focus();
        return false;
    }
    if(rgEl.value == ""){
        alert("Campo obrigatório!")
        rgEl.focus();
        return false;
    }
    if(cpfEl.value == ""){
        alert("Campo obrigatório!")
        cpfEl.focus();
        return false;
    }
    if(senhaEl.value == "" || confSenhaEl.value == ""){
        alert("Preencha os campos de senha e confirmação de senha!")
        senhaEl.focus();
    }
    else{
        if(confSenhaElEl.value != confSenhaEl.value){
        alert("As senhas não conferem!")
        }
    }

    if(!rdoFemEl.checked && !rdoMascEl.checked && !rdoOutrosEl.checked){
        alert("Selecione o sexo!")
    }

}