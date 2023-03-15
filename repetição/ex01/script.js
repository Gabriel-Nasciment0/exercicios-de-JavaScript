let nota = Number(prompt("Digite um numero de zero a dez:"));
while (nota < 0 || nota > 10) {
    alert("[ERRO]nota invalida");
    nota = Number(prompt("Digite um numero de zero a dez:"));
}
alert(`nota valida ${nota}`);
