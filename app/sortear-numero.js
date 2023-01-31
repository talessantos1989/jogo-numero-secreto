const menorValor = 0
const maiorValor = 100
const numeroAleatorio = gerarNumeroAleatorio();


function gerarNumeroAleatorio(){
    // o numero aleatorio vai sempre estar até o valorMaior + 1 
    return parseInt(Math.random() * maiorValor + 1);
}
console.log(numeroAleatorio);

// atribuir no span o menor valor
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor


// Atribuir no span o maior valor
const elementoMaiorValor = document.getElementById('maior-valor');
console.log(elementoMaiorValor)
elementoMaiorValor.innerHTML = maiorValor