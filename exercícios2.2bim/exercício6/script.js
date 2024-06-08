let ipNota = document.querySelector("#ipNota");
let h4Resultado = document.querySelector("#h4Resultado");
let btVerificar = document.querySelector("#btVerificar");

function verificarNota(){
    let nota = Number(ipNota.value);

    if (isNaN(nota) || nota < 0 || nota > 100) {
            h4Resultado.textContent = "Por favor, insira uma nota válida entre 0 e 100.";
        } else if (nota > 60) {
            h4Resultado.textContent = "Aprovado";
        } else if (nota < 40) {
            h4Resultado.textContent = "Precisa fazer prova substitutiva.";
        } else {
            h4Resultado.textContent = "Reprovado";
        }
    }

btVerificar.onclick = function(){
        verificarNota();
}