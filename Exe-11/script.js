var salario = parseFloat(prompt("Digite seu salário"));
var aumento;
var totalAumento;
var salarioantesReajuste = salario;



if (salario > 0 && salario <= 280) {

    aumento = (salario * 0.2);
    totalAumento = (aumento + salario);
    alert("O salario antes do reajuste era: " + salarioantesReajuste);
    alert("O percentual aplicado foi 20%");
    alert("O valor do aumento foi: " + aumento);
    alert("O total é: " + totalAumento);

} else if (salario > 280 && salario <= 700) {

    aumento = (salario * 0.15);
    totalAumento = (aumento + salario); 
    alert("O salario antes do reajuste era: " + salarioantesReajuste);
    alert("O percentual aplicado foi 15%");
    alert("O valor do aumento foi: " + aumento);
    alert("O valor é: " + totalAumento);

} else if (salario > 700 && salario <= 1500){

    aumento = (salario * 0.10);
    totalAumento = (aumento + salario);
    alert("O salario antes do reajuste era: " + salarioantesReajuste);
    alert("O percentual aplicado foi 10%");
    alert("O valor do aumento foi: " + aumento);
    alert("O valor é: " + totalAumento);

} else if (salario > 1500){

    aumento = (salario * 0.05);
    totalAumento = (aumento + salario);
    alert("O salario antes do reajuste era: " + salarioantesReajuste);
    alert("O percentual aplicado foi 5%");
    alert("O valor do aumento foi: " + aumento);
    alert("O valor é: " + totalAumento);
}


    











