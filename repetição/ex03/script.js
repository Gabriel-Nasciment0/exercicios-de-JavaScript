let nome = prompt("informe seu nome: min 3 caracteres");
let idade = prompt("informe sua idade: min 0 max 150");
let salario = prompt("informe seu salario");
let sexo = prompt("informe seu sexo: masculino ou feminino");
let estado_civil =
    "informe seu estado civil: solteiro(a), casado(a), viuvo(a), divorciado(a)";

while (nome.length <= 2) {
    alert("[ERRO] insira um nome maior que 3 caracteres");
    nome = prompt("informe seu nome: min 3 caracteres");
}
while (idade < 0 || idade > 150) {
    alert("[ERRO] insira uma idade entre 0 ate 150");
    idade = prompt("informe sua idade: min 0 max 150");
}
while (salario <= 0) {
    alert("[ERRO] insira um salario maior que 0");
    salario = prompt("informe seu salario");
}
while (sexo.toUpperCase() != "MASCULINO" || sexo.toUpperCase() != "FEMININO") {
    alert("[ERRO] insira o sexo masculino ou feminino");
    sexo = prompt("informe seu sexo: masculino ou feminino");
}
