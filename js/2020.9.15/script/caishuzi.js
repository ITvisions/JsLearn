// 创建一个随机数
let Myrandom = Math.floor(Math.random()*100) + 1;

// 显示结果
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')

// 客户输入和点击
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '上次猜的数:'
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === Myrandom) {
        lastResult.textContent = '恭喜你，猜对了';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if (guessCount === 10) {
        lastResult.textContent = 'game over';
        setGameOver()
    }
    else {
        lastResult.textContent = '你猜错了';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < Myrandom) {
            lowOrHi.textContent = '你猜低了';
        }else if (userGuess > Myrandom) {
            lowOrHi.textContent = '你猜高了'
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame)
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = ''
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    Myrandom = Math.floor(Math.random() * 100) + 1;
}