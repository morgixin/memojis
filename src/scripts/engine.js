const emojis = [
    "🤡",
    "🤡",
    "🤠",
    "🤠",
    "🥳",
    "🥳",
    "🤓",
    "🤓",
    "😨",
    "😨",
    "👺",
    "👺",
];
const animals = [
    "🐸",
    "🐸",
    "🐒",
    "🐒",
    "🦆",
    "🦆",
    "🦉",
    "🦉",
    "🦚",
    "🦚",
    "🐀",
    "🐀",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => 
    (Math.random() > 0.5 ? 2 : -1)
);

let shuffleAnimals = animals.sort(() => 
    (Math.random() > 0.5 ? 2 : -1)
);

const state = {
    view: {
        triesCount: document.querySelector('#triesNum'),
    }
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].onclick = {};
        openCards[1].onclick = {};
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    state.view.triesCount.innerHTML++;

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        let p = document.createElement('p');
        p.style.color = "#fff";
        p.innerHTML = 'Você venceu! Clique em "Reset Game" para jogar de novo!';
        let container = document.querySelector(".container");
        container.insertBefore(p, container.children[1]);

        document.getElementById("reset-game").style.border = "5px solid #00ff2f";
    }
}

function play() {
    document.getElementById("start-game").style.display = "none";
    document.getElementById("reset-game").style.display = "block";

    // gera área para disposição das cartas
    let gameSpace = document.getElementsByClassName('game')[0];
    gameSpace.style.height = '400px';
    gameSpace.style.width = '430px';

    // inclui cada carta
    for(let i = 0; i < emojis.length; i++) {
        let box = document.createElement("div");
        box.className = "item-shown";
        box.innerHTML = shuffleEmojis[i];
        box.onclick = handleClick;
        gameSpace.appendChild(box);
    }

    document.getElementsByClassName("tries")[0].style.display = "flex";

    // mostra as cartas por 1 segundo
    setInterval(addItemShownClass, 1000);
}

function addItemShownClass() {
    let cards = document.querySelectorAll('.item-shown');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('item-shown');
        cards[i].classList.add('item');
    }
}

function enableResetBtn() {
    let resetBtn = document.getElementById('reset-game');
    resetBtn.style.display = "none";
}

// function init() {
    // document.getElementById("start-game").style.border = "5px solid #00ff2f";
    // startBtn.style.borderImage = "linear-gradient(325deg, #00ff2f 0%, #ec38bc 100%) 1";
    // startBtn.
// }

// init();
