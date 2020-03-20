/**
//Temporizador

function temporizador() {
    document.write("Executando ... <br/>");
}

//Executa temporizador

 * 
setInterval(temporizador, 2000); //executa infinitamente

setTimeout(temporizador, 3000); //executa uma vez no tempo x ms e para
----------------------------------------------------------------
*/

//WEBSTORE
/**

localStorage.getNome, setNome, removeItem


var nome = ''
if (typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt("Digite seu nome");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;
localStorage.removeItem("nome");
 * 
 */

var nome = "Eder";
var sobrenome = "Quesado";
var idade = "28";

var eder = `Meu nome eh ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`;
document.getElementById('nome').innerHTML = eder;