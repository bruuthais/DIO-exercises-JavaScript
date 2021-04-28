let order = []; 
let clickedOrder = []; // ordem dos cliques
let score = 0; //precisa para saber quando errou

//0 - verde / 1 - vermelho / 2 - amarelo / 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); //arrendonda o numero e deixa random a ordem
    order [order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) * 1); //preparando para acender a cor que for selecionada
    }
}

let lightColor = (element, number) => { // inicia-se a função para acender as cores
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout (() => {
        element.classList.remove('selected');
    });
}

let checkOrder = () => { //checar a ordem das cores clicadas
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            lose(); //perdeu o jogo e ele para
            break; 
        }
    }
    if(clickedOrder.length == order.length) { //se clicar as cores certinhas, exibirá a pontuação
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {//função para clique do usuário
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
},250);
    
    
}
let createColorElement = (color) => { //função que retorna a cor
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

let nextLevel = () => { //função para próximo nível do jogo
    score++;//irá aumentar o score, aumentando a dificuldade conforme o nível
    shuffleOrder();
}

let lose = () => { //função para caso perca o jogo, irá dar um alert e recomeçar o jogo
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em Ok para iniciar um novo jogo.`);
    order = []; 
    clickedOrder = [];

    playGame();
}

let playGame = () => { //função para iniciar o jogo
    alert(`Deseja iniciar o jogo?`);
    score = 0;

    nextLevel();
}

//ativar os cliques

green.onclick = () => click(0);
red.onclick= () => click (1);
yellow.onclick= () => click (2);
blue.onclick= () => click (3);

playGame(); //inicio do jogo
