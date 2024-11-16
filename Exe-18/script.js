var dia = parseInt(prompt("Digite um dia (dd)"));
var mes = parseInt(prompt("Digite um mês (mm)"));
var ano = parseInt(prompt("Digite um ano (aaaa)"));

if(dia > 1 && dia < 31 && mes >= 1 && mes <= 12 && ano > 1){

    alert("A data é válida");

}else{

    alert("A data é inválida");

}


