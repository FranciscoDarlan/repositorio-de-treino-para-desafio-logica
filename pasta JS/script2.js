// 2- Implemente uma função que verifique se uma pessoa é maior de idade.

let h1PerguntaUsuario = document.querySelector('.class-pergunta');
let inputText = document.querySelector('.input-text');
let inputButton = document.querySelector('.input-button');
let span = document.querySelector('.class-span');

h1PerguntaUsuario.innerHTML = 'Digite Sua Idade Para Saber Se e Maior de Idade Ou nao'

function VerificaIdade() {
    if (inputText.value >= 18) {
        span.innerHTML = ` Sua Idade é ${inputText.value} você é maior de idade.`;
    } else if (inputText.value < 18 && inputText.value >= 0) {
        span.innerHTML = ` Sua Idade é ${inputText.value} você é menor de idade.`;
    } else if (inputText.value < 0) {
        span.innerHTML = ` Sua Idade é ${inputText.value} ? impossível ! digite novamente Mentiroso! .`;
    }else {
        span.innerHTML = ` seu valor foi ( ${inputText.value} ) não é idade, por favor verifique!.`;
    } {

    }
}

inputButton.addEventListener('click', VerificaIdade)