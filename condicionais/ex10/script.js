function verificar() {
    var dia = Number(document.getElementById("dia").value);
    var resposta = document.getElementById("resposta");

    if (dia == 1) {
        resposta.innerHTML = "hoje e segunda";
    } else if (dia == 2) {
        resposta.innerHTML = "hoje e terça";
    } else if (dia == 3) {
        resposta.innerHTML = "hoje e quarta";
    } else if (dia == 4) {
        resposta.innerHTML = "hoje e quinta";
    } else if (dia == 5) {
        resposta.innerHTML = "hoje e sexta";
    } else if (dia == 6) {
        resposta.innerHTML = "hoje e sabado";
    } else if (dia == 7) {
        resposta.innerHTML = "hoje e domingo";
    } else {
        resposta.innerHTML = "{ERRO} verifique os dados e tente novvamente";
    }
}
