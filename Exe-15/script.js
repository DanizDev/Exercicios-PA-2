var lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triangulo: "));
var lado2 = parseFloat(prompt("Digite o valor do segundo lado do triangulo: "));
var lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triangulo: "));

if(lado1 == lado2 && lado1 == lado3){

    alert("O triângulo é Equilátero")

}else if(lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1){

    alert("O triângulo é Isósceles");

}else{

    alert("O triangulo é Escaleno");

}







