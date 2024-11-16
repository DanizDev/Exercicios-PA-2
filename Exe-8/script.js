var produto1 = parseFloat(prompt("Digite o valor do produto 1: "));
var produto2 = parseFloat(prompt("Digite o valor do produto 2: "));
var produto3 = parseFloat(prompt("Digite o valor do produto 3: "));
var menorpreco

if(produto1 < produto2 && produto1 < produto3){

    menorpreco = produto1;

}else if (produto2 < produto1 && produto2 < produto3){

    menorpreco = produto2;

}else{

    menorpreco = produto3;

}

alert("O produto a ser comprado é o produto de valor : " + menorpreco)






























