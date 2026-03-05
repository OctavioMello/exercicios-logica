let lista = [1,2,3,4,5,6];

function contas(lista) {
    let soma = 0;
    let media = 0;
    let qtdPares = 0;
    let qtdImpares = 0;
    for (let i = 0; i < lista.length; i++){
        soma += lista[i];
        media = soma / lista.length;
        if (lista[i] % 2 == 1) {
            qtdImpares++;
        } else {
            qtdPares++
        }
    } return {soma, media, qtdPares, qtdImpares}
}

let resultado = contas(lista);
console.log(resultado);