var quantidade

document.getElementById('enviar').addEventListener('click', function() {
    quantidade = parseInt(document.getElementById('resposta').value) 
    // Definindo quantidade aqui
    var valoresDigitadosDiv = document.getElementById('valoresDigitados')
    valoresDigitadosDiv.innerHTML = ''

    var form = document.createElement('form') // Cria o formulário
    form.id = 'calculadoraForm' // Define um ID para o formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        calcularResultado()
    })

    for (var i = 1; i <= quantidade; i++) {
        var span = document.createElement('span');
        span.textContent = 'Número ' + i + ': '
        form.appendChild(span)

        var input = document.createElement('input')
        input.type = 'number'
        input.name = 'numero' + i
        form.appendChild(input)
    }

    var spanOperacao = document.createElement('span')
    spanOperacao.textContent = 'Operação: '
    form.appendChild(spanOperacao)

    var inputOperacao = document.createElement('input')
    inputOperacao.type = 'text'
    inputOperacao.name = 'operacao'
    form.appendChild(inputOperacao)

    var calcularButton = document.createElement('button')
    calcularButton.textContent = 'Calcular'
    form.appendChild(calcularButton)

    var resultadoSpan = document.createElement('span')
    resultadoSpan.textContent = 'Resultado: '
    form.appendChild(resultadoSpan)

    var resultadoInpt = document.createElement('input')
    resultadoInpt.type = 'text'
    resultadoInpt.name = 'resultado'
    form.appendChild(resultadoInpt)

    valoresDigitadosDiv.appendChild(form)
});

function calcularResultado() {
    var form = document.getElementById('calculadoraForm')
     // Seleciona o formulário pelo ID
    var numeros = []

    for (var i = 1; i <= quantidade; i++) {
        var input = form.elements['numero' + i]
        if (!input.value.trim()) {
            alert('Por favor, preencha todos os campos de números.')
            return
        }
        numeros.push(parseFloat(input.value))
    }

    var operacao = form.elements['operacao'].value
    var resultado = calcular(numeros, operacao)
    form.elements['resultado'].value = resultado
}

function calcular(numeros, operacao) {
    if (operacao === 'divisao' && numeros[1] === 0) {
        return 'Não é possível dividir por zero';
    }
    var resultado = 0;
    switch (operacao) {
        case 'adição':
            resultado = numeros.reduce((acc, val) => acc + val);
            break;
        case 'subtração':
            resultado = numeros.reduce((acc, val) => acc - val);
            break;
        case 'multiplicação':
            resultado = numeros.reduce((acc, val) => acc * val);
            break;
        case 'divisão':
            resultado = numeros.reduce((acc, val) => acc / val);
            break;
        default:
            return 'Operação inválida';
    }
    return resultado;
}
