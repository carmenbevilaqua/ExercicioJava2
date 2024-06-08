let ipNumPessoas = document.querySelector("#ipNumPessoas")
let h3Resultado = document.querySelector("#h3Resultado")

function calcularQuantidade(){
    let pessoas = Number (ipNumPessoas.value)

    if (isNaN(pessoas) || pessoas <= 0) {
        h3Resultado.innerHTML = "Por favor, insira um número válido de pessoas.";
        return;
    }

    let ovosPorPessoa = 2;
    let queijoPorPessoa = 50;

    let quantidadeOvos = pessoas * ovosPorPessoa;
    let quantidadeQueijo = pessoas * queijoPorPessoa;

    h3Resultado.innerHTML = `Quantidade de ovos que você irá precisar: ${quantidadeOvos} ovos.<br>
                             Quantidade de queijo que você irá precisar: ${quantidadeQueijo} gramas.`;
}
btCalcular.onclick = function(){
    calcularQuantidade();
}
