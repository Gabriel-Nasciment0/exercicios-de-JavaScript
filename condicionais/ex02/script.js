function calcular() {
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var resultado = document.getElementById("resultado");
    var media = (nota1 + nota2) / 2;
    resultado.innerHTML = `sua media e ${media}`;
    if (media >= 7 && media < 10) {
        resultado.innerHTML = ` sua nota foi ${media} aprovado`;
    } else if (media == 10) {
        resultado.innerHTML = `parabens sua nota foi ${media} e foi aprovado com a nota maxima`;
    } else if (media == 0 || media < 7) {
        resultado.innerHTML = `sua nota foi ${media} Reprovado`;
    } else {
        resultado.innerHTML = "[Erro] nota invalida";
    }
}
