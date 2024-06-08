let ipNumero = document.querySelector("#ipNumero")
let btVerificar = document.querySelector("#btVerificar")
let h4Resultado = document.querySelector("#h4Resultado")

function verificarImpar(){
    let numero = Number (ipNumero.value);
    if(numero % 2 == 0){
        h4Resultado.textContent = "Par"
    }else{
        h4Resultado.textContent = "Impar"
    }
}
btVerificar.onclick = function(){
    verificarImpar();
}