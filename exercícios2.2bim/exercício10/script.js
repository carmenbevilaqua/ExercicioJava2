let ipValorVendido = document.querySelector("#ipValorVendido")
let ipMeta = document.querySelector("#ipMeta")
let ipMetaMinima = document.querySelector("#ipMetaMinima")
let btVerificar = document.querySelector("#btVerificar")
let h3Resultado = document.querySelector("#h3Resultado")

function verificarMeta(){
    let valorVendido = Number(ipValorVendido.value);
    let meta = Number(ipMeta.value);
    let metaMinima = Number(ipMetaMinima.value);

    let percentualMeta = (valorVendido / meta) * 100
    let percentualMetaMinima = (valorVendido / metaMinima) * 100

    if(valorVendido >= meta){
        h3Resultado.textContent += "Parabéns, você atingiu a meta!!";
    }
    else if (valorVendido >= metaMinima){
        h3Resultado.textContent += "Você atingiu a meta mínima.";
    }
    else 
    {
        h3Resultado.textContent += "Você não atingiu nenhuma meta :(";
    }
    
h3Resultado.innerHTML += "<br> Percentual de atingimento da meta: "+percentualMeta+"%<br>"
h3Resultado.innerHTML += "Percentual de atingimento da meta mínima: "+percentualMetaMinima+"%"
}
btVerificar.onclick = function(){
    verificarMeta();
}