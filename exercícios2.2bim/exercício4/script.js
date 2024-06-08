let ipSabor1 = document.querySelector("#ipSabor1")
let ipSabor2 = document.querySelector("#ipSabor2")
let ipSabor3 = document.querySelector("#ipSabor3")
let ipSabor4 = document.querySelector("#ipSabor4")
let qntdRefri = document.querySelector("#qntdRefri")
let h4Resultado = document.querySelector("#h4Resultado")
let btCalcular = document.querySelector("#btCalcular")

function somarTudo(){
    let precoPizza = 12.00;
    let precoRefri = 7.00;

    let totalPizzas = 4 * precoPizza;
    let totalRefri = precoRefri * Number (qntdRefri.value);
    let total = totalPizzas + totalRefri

    h4Resultado.innerHTML = `Resumo do Pedido: <br>
                            Sabores escolhidos: <br>
                            - ${ipSabor1.value} <br> 
                            - ${ipSabor2.value} <br> 
                            - ${ipSabor3.value} <br> 
                            - ${ipSabor4.value} <br>
                            Total pizzas: R$ ${totalPizzas.toFixed(2)} <br>
                            Quantidade de refrigerantes: ${qntdRefri.value} <br>
                            Total a pagar: R$ ${total.toFixed(2)}`;             
}
btCalcular.onclick = function(){
    somarTudo();
}