let filaNormais = [];
let filaEspeciais = [];
let contadorNormal = 1;
let contadorEspecial = 1;

function gerarSenhaNormal() {
    filaNormais.push(contadorNormal.toString());
    contadorNormal++;
    atualizarFilas();
}

function gerarSenhaEspecial() {
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indiceLetra = Math.floor((contadorEspecial - 1) / 10);
    let numero = (contadorEspecial - 1) % 10 + 1;
    let senha = letras[indiceLetra] + numero.toString();
    filaEspeciais.push(senha);
    contadorEspecial++;
    atualizarFilas();
}

function removerSenhaNormal() {
    filaNormais.shift();
    atualizarFilas();
}

function removerSenhaEspecial() {
    filaEspeciais.shift();
    atualizarFilas();
}

function atualizarFilas() {
    document.getElementById('filaNormais').textContent = '[' + filaNormais.join(', ') + ']';
    document.getElementById('filaEspeciais').textContent = '[' + filaEspeciais.join(', ') + ']';
}
