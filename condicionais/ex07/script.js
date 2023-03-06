function verificar() {
    var text = document.getElementById("text").value;
    text = text.toLowerCase();
    var resposta = document.getElementById("resposta");

    if (text == "dia") {
        resposta.innerHTML = "bom dia";
    } else if (text == "tarde") {
        resposta.innerHTML = "boa tarde";
    } else if (text == "noite") {
        resposta.innerHTML = "boa noite";
    } else {
        ("[ERRO]");
    }
}
