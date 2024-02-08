const perguntas = [
    {
        pergunta: 'O que é JavaScript?',
        respostas: 
        [
            'Uma linguagem de marcação',
            'Uma linguagem de programação',
            'Um estilo de folha de estilo',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a forma correta de declarar uma variável em JavaScript?',
        respostas: 
        [
            'vari minhaVariavel = valor;',
            'variable minhaVariavel = valor;',
            'var minhaVariavel = valor;',
        ],
        correta: 2
    },
    {
        pergunta: 'Como se chama a estrutura de controle de fluxo que permite executar um bloco de código repetidamente enquanto uma condição específica for verdadeira?',
        respostas: 
        [
            'Switch',
            'While loop',
            'For loop',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o operador de comparação que verifica igualdade de valor e tipo?',
        respostas: 
        [
            '===',
            '==',
            '=',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a função do método "querySelector" em JavaScript?',
        respostas: 
        [
            'Selecionar um elemento do DOM pelo seu ID',
            'Selecionar múltiplos elementos do DOM',
            'Selecionar um elemento do DOM pelo seu seletor CSS',
        ],
        correta: 2
    },
    {
        pergunta: 'O que é um array em JavaScript?',
        respostas: 
        [
            'Um tipo de dado que representa uma coleção ordenada de elementos',
            'Uma função para criar objetos',
            'Um método para ordenar dados em ordem alfabética',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a finalidade do operador ternário em JavaScript?',
        respostas: 
        [
            'Comparar três valores',
            'Atribuir um valor com base em uma condição',
            'Executar uma função em três etapas',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o método que permite converter um valor em uma string em JavaScript?',
        respostas: 
        [
            'toString()',
            'convertToString()',
            'stringify()',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é uma função em JavaScript?',
        respostas: 
        [
            'Um tipo de dado que armazena valores',
            'Um bloco de código que pode ser chamado e executado',
            'Um operador usado para fazer cálculos matemáticos',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o método usado para adicionar um novo elemento ao final de um array em JavaScript?',
        respostas: 
        [
            'push()',
            'add()',
            'append()',
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal =  document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
