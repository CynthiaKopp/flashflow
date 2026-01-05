const flashcards = [
    {
        question: "O que é JavaScript?",
        answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
    },
    {
        question: "O que são funções de callback em JavaScript?",
        answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
    },
    {
        question: "O que é o this em JavaScript?",
        answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
    },
    {
        question: "O que é hoisting em JavaScript?",
        answer: "Hoisting é o comportamento em que declarações de variáveis e funções são 'movidas' para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código."
    },
    {
        question: "O que são tipos primitivos em JavaScript?",
        answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
    }
];

var cardAtual = 0;
var mostrandoResposta = false;

function mostrarCard() {
    var card = flashcards[cardAtual];

    document.getElementById('card-texto').textContent = card.question;
    document.getElementById('posicao').textContent = 'Card ' + (cardAtual + 1) + ' de ' + flashcards.length;

    mostrandoResposta = false;
    document.getElementById('card').classList.remove('virado');
}

function virarCard() {
    var card = flashcards[cardAtual];

    if (mostrandoResposta) {
        document.getElementById('card-texto').textContent = card.question;
        document.getElementById('card').classList.remove('virado');
        mostrandoResposta = false;
    } else {
        document.getElementById('card-texto').textContent = card.answer;
        document.getElementById('card').classList.add('virado');
        mostrandoResposta = true;
    }
}

function proximoCard() {
    cardAtual = cardAtual + 1;

    if (cardAtual >= flashcards.length) {
        cardAtual = 0;
    }

    mostrarCard();
}

mostrarCard();
