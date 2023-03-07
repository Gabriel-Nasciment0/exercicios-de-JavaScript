function calcular() {
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var resposta = document.getElementById("resposta");
    var nota = nota1 + nota2;
    var media = nota / 2;

    if (media >= 9 && media <= 10) {
        resposta.innerHTML = `sua nota foi ${nota} com a media de ${media} seu conseito foi A parabens aprovado`;
    } else if (media >= 7.5 && media < 9) {
        resposta.innerHTML = `sua nota foi ${nota} com a media de ${media} seu conseito foi B parabens aprovado`;
    } else if (media >= 6 && media < 7.5) {
        resposta.innerHTML = `sua nota foi ${nota} com a media de ${media} seu conseito foi C parabens aprovado`;
    } else if (media >= 4 && media < 6) {
        resposta.innerHTML = `sua nota foi ${nota} com a media de ${media} seu conseito foi D infelismente voce foi reprovado`;
    } else if (media >= 0 && media < 4) {
        resposta.innerHTML = `sua nota foi ${nota} com a media de ${media} seu conseito foi E infelismente voce foi reprovado`;
    } else {
        resposta.innerHTML = "{ERRO} verifique os dados e tente novamente";
    }
}
