var a = parseFloat(prompt("Digite o valor de A: "));

if(a === 0){

    alert("O valor de A não pode ser igual a 0");
    exit()
}

var b = parseFloat(prompt("Digite o valor de B: "));
var c = parseFloat(prompt("Digite o valor de C: "));
var delta = (b**2) - (4 * a * c);


if(delta < 0){

    alert("A equação não possui raizes reais");
    exit()

}else if(delta === 0){

    alert("A equação possui apenas uma raiz real")

}else if(delta > 0){

    alert("A equação possui duas raízes reais");

}











