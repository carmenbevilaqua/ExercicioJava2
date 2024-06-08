let ipDolar = document.querySelector("#ipDolar");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularDolar(){
    let dolar = Number (ipDolar.value);

    let cotacao1 = dolar * 1.01;
    let cotacao2 = dolar * 1.02;
    let cotacao3 = dolar * 1.05;
    let cotacao4 = dolar * 1.10;

h4Resultado.innerHTML = "Cotação com aumento de 1%: "+cotacao1+"<br>"+
                        "Cotação com aumento de 2%: "+cotacao2+"<br>"+
                        "Cotação com aumento de 5%: "+cotacao3+"<br>"+
                        "Cotação com aumento de 10%: "+cotacao4;
}
btCalcular.onclick = function(){
    calcularDolar();
}
