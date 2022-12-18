
const calcular = document.getElementById('calcular')


function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
    
    const valorIMC  = (peso / (altura * altura )).toFixed(1);

    let classificacao = '' ;

    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.';
    }
    else if (valorIMC >= 18.5 && valorIMC < 25) {
        classificacao = 'com o peso ideal . Parabèns !!'
    }
    else if(valorIMC >= 25 && valorIMC < 30) {
        classificacao = 'levemente acima do peso '
    }
    else if (valorIMC >= 30) {
        classificacao = ' com obesidade. Cuidado !!'
    }
        resultado.textContent = `${nome}  seu IMC è ${valorIMC} e você está ${classificacao}`;
    
        
    }else {
        resultado.textContent = 'Preencha todos os campos !!'
    }
}
calcular.addEventListener('click', imc);