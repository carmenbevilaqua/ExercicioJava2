let ipNumero1 = document.querySelector("#ipNumero1")
let ipNumero2 = document.querySelector("#ipNumero2")
let btComparar = document.querySelector("#btComparar")
let h3Resultado = document.querySelector("#h3Resultado")

function verificarIgualdade(){
    let numero1 = Number (ipNumero1.value)
    let numero2 = Number (ipNumero2.value)

    if(numero1 > numero2){
        h3Resultado.textContent = numero1+" é maior que "+numero2+".";
    }
    else if(numero1 < numero2){
        h3Resultado.textContent = numero1+" é menor que "+numero2+".";
    } else {
        h3Resultado.textContent = numero1+" é igual que "+numero2+".";
    }
}
btComparar.onclick = function(){
    verificarIgualdade();
}