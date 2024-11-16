var nota1 = parseFloat(prompt("Digite sua primeira nota: "));
var nota2 = parseFloat(prompt("Digite sua segunda nota: "));
var media = (nota1 + nota2) / 2;


alert("A primeira nota é: " + nota1);
alert("A segunda nota é: " + nota2);
alert("A media é: " + media);

if(media >= 0 && media <= 4){

    alert("O conceito é: E " );
    alert("Reprovado");
  

}else if(media >= 4.1 && media <= 6){

    alert("O conceito é: D ");
    alert("Reprovado");

}else if(media >= 6.1 && media <= 7.5){

    alert("O conceito é: C ");
    alert("Aprovado");

}else if(media >= 7.5 && media <= 9){

    alert("O conceito é: B ");
    alert("Aprovado");

}else if(media >= 9.1 && media <= 10){

    alert("O conceito é: A ");
    alert("Aprovado");
}















