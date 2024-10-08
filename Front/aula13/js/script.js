/*
var num1;

let num2;

num3 = 3

const pi = 3.14

nome,nOme,noMe,nomE,NOME

aritmeticos => + - * / \\ % ** ++ -- 
logicos && || ! !=
comparação > < >= <= != == ===
atribuição = += -= *= /=
*/

function boasVindas(){
    //alert("Seja bem vindo!")
    document.write("Seja bem vindo");
}

function somar(){
    //Valor01 = parseInt(document.frmCalc.txtValor1.value)
    //Valor02 = parseFloat(document.getElementById("txtValor2").value);

    Valor01 = document.getElementById("txtValor1");
    Valor02 = document.getElementById("txtValor2");
    result = document.getElementById("result");

    if(Valor01.value ==""){
        alert("Campo obrigatório");
        Valor01.focus();
        return false;
    }


    soma = parseInt(Valor01.value) + parseInt(Valor02.value);
    result.innerText = soma;
    // document.write(soma);
}