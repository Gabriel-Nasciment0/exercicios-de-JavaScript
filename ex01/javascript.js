function verificar() {
    var letra = document.querySelector("input").value;
    letra = letra.toUpperCase();
    if (
        letra == "A" ||
        letra == "E" ||
        letra == "I" ||
        letra == "O" ||
        letra == "U"
    ) {
        document.querySelector("p").innerHTML = `A letra ${letra} e uma vogal`;
    } else if (
        letra == "B" ||
        letra == "C" ||
        letra == "D" ||
        letra == "F" ||
        letra == "G" ||
        letra == "H" ||
        letra == "J" ||
        letra == "K" ||
        letra == "L" ||
        letra == "M" ||
        letra == "N" ||
        letra == "O" ||
        letra == "P" ||
        letra == "Q" ||
        letra == "R" ||
        letra == "S" ||
        letra == "T" ||
        letra == "V" ||
        letra == "W" ||
        letra == "X" ||
        letra == "Y" ||
        letra == "Z"
    ) {
        document.querySelector("p").innerHTML = `a letra ${letra} e consoante`;
    } else {
        document.querySelector(
            "p"
        ).innerHTML = `O conteudo  ${letra} não e uma letra tente novamente`;
    }
}
