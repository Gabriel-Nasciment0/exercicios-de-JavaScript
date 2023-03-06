function calculo() {
    var salario = Number(document.getElementById("salario").value);
    resultado = document.getElementById("resultado");

    if (salario <= 280.0) {
        ajuste = salario + salario * (20 / 100);
        resultado.innerHTML = `Seu salario de ${salario} passou para ${ajuste}`;
    } else if (salario > 280.0 && salario <= 700.0) {
        ajuste = salario + salario * (15 / 100);
        resultado.innerHTML = `Seu salario de ${salario} passou para ${ajuste}`;
    } else if (salario > 700.0 && salario <= 1500.0) {
        ajuste = salario + salario * (10 / 100);
        resultado.innerHTML = `Seu salario de ${salario} passou para ${ajuste}`;
    } else if (salario > 1500.0) {
        ajuste = salario + salario * (5 / 100);
        resultado.innerHTML = `Seu salario de ${salario} passou para ${ajuste}`;
    }
}
