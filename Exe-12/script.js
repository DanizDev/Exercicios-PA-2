var valorHora = parseFloat(prompt("Digite o valor de sua hora: "));
var quantHoras = parseFloat(prompt("Digite a quantidade de horas trabalhadas: "));
var salarioBruto = valorHora * quantHoras
var descontos
var salarioLiquido 
var sindicato 
var FGTS 
var impostodeRenda


if(salarioBruto <= 1903.98){

    alert("Isento")
    alert("O salario bruto é de: " + salarioBruto);

}else if(salarioBruto > 1903.98 && salarioBruto <= 2826.65){

    alert("O desconto é de 7,5% ")
    alert("O salario bruto é de: " + salarioBruto);
    impostodeRenda = salarioBruto * 0.075
    alert("O desconto do imposto de renda é igual a: " + impostodeRenda)
    sindicato = salarioBruto * 0.03
    alert("O desconto do sindicato é igual a: " + sindicato)
    FGTS = salarioBruto * 0.08
    alert("O desconto do FGTS é igual a: " + FGTS)
    var descontos = sindicato + FGTS + impostodeRenda
    var salarioLiquido = salarioBruto - descontos
    alert("O salario liquido é igual a: " + salarioLiquido)

}else if(salarioBruto > 2826.66 && salarioBruto <= 3751.05){

    alert("O desconto é de 15% ")
    alert("O salario bruto é de: " + salarioBruto);
    impostodeRenda = salarioBruto * 0.15
    alert("O desconto do imposto de renda é igual a: " + impostodeRenda)
    sindicato = salarioBruto * 0.03
    alert("O desconto do sindicato é igual a: " + sindicato)
    FGTS = salarioBruto * 0.08
    alert("O desconto do FGTS é igual a: " + FGTS)
    var descontos = impostodeRenda + sindicato + FGTS
    var salarioLiquido = salarioBruto - descontos
    alert("O salario liquido é igual a: " + salarioLiquido)

}else if(salarioBruto > 3751.06 && salarioBruto <= 4664.68){

    alert("O desconto é de 22,5% ")
    alert("O salario bruto é de: " + salarioBruto)
    impostodeRenda = salarioBruto * 0.225
    alert("O desconto do imposto de renda é igual a: " + impostodeRenda)
    sindicato = salarioBruto * 0.03
    alert("O desconto do sindicato é igual a: " + sindicato)
    FGTS = salarioBruto * 0.08
    alert("O desconto do FGTS é igual a: " + FGTS)
    var descontos = impostodeRenda + sindicato + FGTS
    var salarioLiquido = salarioBruto - descontos
    alert("O salario liquido é igual a: " + salarioLiquido)

}else if(salarioBruto > 4664.69){

    alert("O desconto é de 27,5% ")
    alert("O salario bruto é de: " + salarioBruto)
    impostodeRenda = salarioBruto * 0.275
    alert("O desconto do imposto de renda é igual a: " + impostodeRenda)
    sindicato = salarioBruto * 0.03
    alert("O desconto do sindicato é igual a: " + sindicato)
    FGTS = salarioBruto * 0.08
    alert("O desconto do FGTS é igual a: " + FGTS)
    var descontos = impostodeRenda + sindicato + FGTS
    var salarioLiquido = salarioBruto - descontos
    alert("O salario liquido é igual a: " + salarioLiquido)

}













