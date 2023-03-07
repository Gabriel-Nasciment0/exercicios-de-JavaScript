function calcular() {
    var salario = Number(document.getElementById("salario"));
    var resposta = document.getElementById("resposta");
    var inss = salario * 0.1;
    var fgts = salario * 0.11;

    if (salario <= 900) {
        ir = 0; //IMPOSTO DE RENDA
        totaldescontos = ir + inss;
        salarioliquido = salario - totaldescontos;
        /////////////////////////////////////
    } else if (salario > 900 && salario <= 1500) {
        ir = salario * 0.05;
        totaldescontos = ir + inss;
        salarioliquido = salario - totaldescontos;
        /////////////////////////////////////
    } else if (salario > 1500 && salario <= 2500) {
        ir = salario * 0.1;
        totaldescontos = ir + inss;
        salarioliquido = salario - totaldescontos;
        ////////////////////////////////////
    } else if (salario > 2500) {
        ir = salario * 0.2;
        totaldescontos = ir + inss;
        salarioliquido = salario - totaldescontos;
    }
}
