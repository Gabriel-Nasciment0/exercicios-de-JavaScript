function verificar() {
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var numero3 = Number(document.getElementById("numero3").value);
    var resultado = document.getElementById("resultado");
    var auxiliar = numero1;

    if (numero2 > numero1) {
        auxiliar = numero2;
        numero2 = numero1;
        numero1 = auxiliar;
    }
    if (numero3 > numero1) {
        auxiliar = numero3;
        numero3 = numero1;
        numero1 = auxiliar;
    }
    if (numero2 > numero3) {
        auxiliar = numero3;
        numero3 = numero2;
        numero2 = auxiliar;
    }
    resultado.innerHTML = ` ${numero1} > ${numero3} > ${numero2} `;
}
