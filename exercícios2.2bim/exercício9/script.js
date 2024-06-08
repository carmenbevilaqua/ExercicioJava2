let ipAlunos = document.querySelector("#ipAlunos")
let ipTurmas = document.querySelector("#ipTurmas")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function dividirAlunos() {
    let alunos = Number(ipAlunos.value);
    let turmas = Number(ipTurmas.value);

    if (turmas === 0) {
        h3Resultado.innerHTML = "O número de turmas deve ser maior que zero.";
        return;
    }

    let pessoasTurma = Math.floor(alunos / turmas);
    let semTurma = alunos % turmas;

    h3Resultado.innerHTML = `Cada turma ter&aacute ${pessoasTurma} alunos.<br>${semTurma} ficar&atildeo sem turma.`;
        }

btCalcular.onclick = function() {
    dividirAlunos();
};