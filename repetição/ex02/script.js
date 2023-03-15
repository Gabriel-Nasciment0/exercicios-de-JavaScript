let usuario = prompt("Usuario");
let senha = prompt("senha");
while (usuario == senha) {
    alert("o usuario e a senha não podem ser iguais");
    usuario = prompt("Usuario");
    senha = prompt("senha");
}
alert(`usuario : ${usuario}gg    
senha: ${senha}`);
