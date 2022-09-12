'use strict';

let secretNumber = Math.trunc((Math.random() * 20));
let score = 20;
let highscore = 0;

const setText = (message) => {
    document.querySelector('.message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
}


const onClickCheckHander = () => {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 1) {
        if (!guess || guess > 20 || guess < 1) {
            document.querySelector('.message').textContent = 'Kindly enter value between 1-20';
        }
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if (guess > secretNumber) {
            setText('📉 Too high!');
        }
        else if (guess < secretNumber) {
            setText('📈 Too low!');
        }
    }
    else {
        document.querySelector('.message').textContent = '💥 You lost!';
        document.querySelector('.score').textContent = 0;
    }

}

const onClickAgainHandler = () => {
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20));
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
}

document.querySelector('.check').addEventListener('click', onClickCheckHander);
document.querySelector('.again').addEventListener('click', onClickAgainHandler);