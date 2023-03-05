function verificar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    var resposta = document.querySelector("p");
    if (numero1 > numero2 && numero1 > numero3) {
        resposta.innerHTML = `o numero ${numero1} e maior que ${numero2} e ${numero3}`;
    } else if (numero2 > numero1 && numero2 > numero3) {
        resposta.innerHTML = `o numero ${numero2} e maior que ${numero1} e ${numero3}`;
    } else if (numero3 > numero1 && numero3 > numero2) {
        resposta.innerHTML = `o numero ${numero3} e maior que ${numero1} e ${numero2}`;
    } else {
        resposta.innerHTML = "[ERRO} verifique os dados e tente novamente";
    }
}
