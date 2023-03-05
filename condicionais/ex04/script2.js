function verificar2() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    var resposta2 = document.querySelector("div");
    if (numero1 < numero2 && numero1 < numero3) {
        resposta2.innerHTML = `o numero ${numero1} e menor que ${numero2} e ${numero3}`;
    } else if (numero2 < numero1 && numero2 < numero3) {
        resposta2.innerHTML = `o numero ${numero2} e menor que ${numero1} e ${numero3}`;
    } else if (numero3 < numero1 && numero3 < numero2) {
        resposta2.innerHTML = `o numero ${numero3} e menor que ${numero1} e ${numero2}`;
    } else {
        resposta2.innerHTML = "[ERRO} verifique os dados e tente novamente";
    }
}
