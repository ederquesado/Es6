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
--------------------------------------------------------------------------------------------------
*/

/*

String e variáveis

var nome = "Eder";
var sobrenome = "Quesado";
var idade = "28";

var eder = `Meu nome eh ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`;
document.getElementById('nome').innerHTML = eder;
* 
--------------------------------------------------------------------------------------------------
*/

/*
//Objetos e arrays

var pessoa = {
nome: "Eder",
sobrenome: "Quesado",
idade: 28,
cargo: "Desenvolvedor"
}

var { nome } = pessoa;
console.log(nome)

//let { cargo: programador } = pessoa;

let nomes = ["Eder", "Quesado", 10];
let [primeiro, segundo, anos] = nomes;
console.log(nomes);
* 
--------------------------------------------------------------------------------------------------
*/

/**
Spread Operator

let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 6];

console.log(primeiros)
console.log(numeros)
*/

function cadastroPessoa(dados) {
    let novosDados = {
        ...dados,
        cargo: "Pesquisador",
        codigo: "bam",
        status: 1
    };

    return novosDados;
}

console.log(cadastroPessoa({ nome: 'Eder', sobrenome: 'Roberto', anoNascimento: 1991 }));