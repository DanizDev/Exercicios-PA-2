var numero1 = parseFloat(prompt("Digite o primeiro numero: "));
var numero2 = parseFloat(prompt("Digite o segundo numero: "));
var numero3 = parseFloat(prompt("Digite o terceiro numero: "));
var maior 
var menor 

if(numero1 > numero2 && numero1 > numero3){

    maior = numero1;

}else if(numero2 > numero1 && numero2 > numero3){

    maior = numero2;

}else{

maior = numero3;
};

if(numero1 < numero2 && numero1 < numero3){

    menor = numero1;

}else if(numero2 < numero1 && numero2 < numero3){
    
    menor = numero2;

}else{

    menor = numero3;
};

alert("O maior numero é: " + maior + "O menor numero é: " + menor);




