// 1- Crie uma função que valide se um número é positivo, negativo ou zero.

let inputText = document.querySelector('.input-text');
let inputButton = document.querySelector('.input-button');
let span = document.querySelector('.class-span');

function validandoValor() {
    let ValorDigitadoNoInput = inputText.value;

    if (ValorDigitadoNoInput > 0) {
        span.innerHTML = `O Número ${ValorDigitadoNoInput} ele é positivo!`
    }else if (ValorDigitadoNoInput < 0) {
        span.innerHTML = `O Número ${ValorDigitadoNoInput} ele é Negativo!`
   
    }else if (ValorDigitadoNoInput == 0) {
            span.innerHTML = `O Número ${ValorDigitadoNoInput} não é nem negativo nem positivo!`
       
   

    } else {
        span.innerHTML = `O valor ( ${ValorDigitadoNoInput} ) não é Número! Por Favor digite um número`
    }
}

inputButton.addEventListener('click', validandoValor);