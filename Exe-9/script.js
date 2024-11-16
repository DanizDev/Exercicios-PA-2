var numero1 = parseFloat(prompt("Digite o primeiro numero: "));
var numero2 = parseFloat(prompt("Digite o segundo numero: "));
var numero3 = parseFloat(prompt("Digite o terceiro numero: "));


if(numero1 > numero2 && numero1 > numero3){

if(numero2 > numero3){
 
    alert("A ordem é: " + numero1 + "," + numero2 + "," + numero3);

}else{

    alert("A ordem é:" + numero1 + "," + numero3 + "," + numero2);
}
}else if(numero2 > numero1 && numero2 > numero3){
    if(numero1 > numero3){

        alert("A ordem é: " + numero2 + "," + numero1 + "," + numero3);
    }else{

        alert("A ordem é: " + numero2 + "," + numero3 + "," + numero1);

    }
}else{
    alert("A ordem é: " + numero3 + "," + numero2 + "," + numero1);
}





