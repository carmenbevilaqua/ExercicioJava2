let ipNome1 = document.querySelector("#ipNome1");
let ipAno1 = document.querySelector("#ipAno1");

let ipNome2 = document.querySelector("#ipNome2");
let ipAno2 = document.querySelector("#ipAno2");

let ipNome3 = document.querySelector("#ipNome3");
let ipAno3 = document.querySelector("#ipAno3");

let h3Resultado = document.querySelector("#h3Resultado");
let anoAtual = new Date().getFullYear();

function calcularIdade() {
    let ano1 = Number(ipAno1.value);
    let ano2 = Number(ipAno2.value);
    let ano3 = Number(ipAno3.value);

    let idade1 = anoAtual - ano1;
    let idade2 = anoAtual - ano2;
    let idade3 = anoAtual - ano3;

    let pessoas = [
        { nome: ipNome1.value, idade: idade1 },
        { nome: ipNome2.value, idade: idade2 },
        { nome: ipNome3.value, idade: idade3 }
    ];

    pessoas.sort((a, b) => b.idade - a.idade);

    h3Resultado.innerHTML = pessoas.map(pessoa => `${pessoa.nome}: ${pessoa.idade} anos`).join("<br>");
}

let btVerificar = document.querySelector("#btVerificar");
btVerificar.onclick = function() {
    calcularIdade();
}