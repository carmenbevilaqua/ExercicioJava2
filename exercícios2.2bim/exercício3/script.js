let ipNum1 = document.querySelector("#ipNum1")
let ipNum2 = document.querySelector("#ipNum2")
let btCalcular = document.querySelector("#btCalcular")
let h4Resultado = document.querySelector("#h4Resultado")

function calcularNumeros(){
    let numero1 = Number (ipNum1.value)
    let numero2 = Number (ipNum2.value)

    let somar = numero1 + numero2;
    let multiplicar = numero1 * numero2;
    let subtrair = numero1 - numero2;
    let dividir = numero1 / numero2;

    h4Resultado.innerHTML = "Somando os dois números o resultado é: "+somar+"<br>"+
                            "Multiplicando os dois números o resultado é: "+multiplicar+"<br>"+
                            "Subtraindo os dois números o resutado é: "+subtrair+"<br>"+
                            "Dividindo os dois números o resultado é: "+dividir;
}
btCalcular.onclick = function(){
    calcularNumeros();
}