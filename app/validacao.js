function verificaValorValido(chute){
    const numero = +chute;
    if (chuteInvalido(numero)) {
       elementoChute.innerHTML += `<div>Valor inválido</div>`
       return
    }
    if(numeroMaiorMenorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: O valor precisa estar entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if(numero === numeroAleatorio){
        document.body.innerHTML = `
        <h2> Você Acertou!</h2>
        <h3> O número secreto é o ${numeroAleatorio}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        ` 

    } else if ( numero > numeroAleatorio){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenorPermitido(numero){
    return numero > maiorValor ||  numero < menorValor
}

//botao Jogar Novamente
document.body.addEventListener('click', (e)=>{
        if(e.target.id === 'jogar-novamente'){
            window.location.reload();
        }
    }
)