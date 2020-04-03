import getRandomThrow from './get-random-throw.js';
import { checkResult } from './check-result.js';

const playButton = document.getElementById('play-button');
const computerSelectionSpan = document.getElementById('computer-selection');
const winCount = document.getElementById('wins');
const lossCount = document.getElementById('losses');
const gamesCount = document.getElementById('games');
const drawsCount = document.getElementById('draws');
const resetButton = document.getElementById('reset-button');


let totalWins = 0;
let totalLoss = 0;
let totalDraws = 0;
let totalGames = 0;

const resetCount = () => {
    totalWins = 0;
    totalLoss = 0;
    totalDraws = 0;
    totalGames = 0;
    computerSelectionSpan.textContent = '';
    updateSpans();
};

const updateSpans = () => {
    winCount.textContent = totalWins;
    lossCount.textContent = totalLoss;
    drawsCount.textContent = totalDraws;
    gamesCount.textContent = totalGames;
};

playButton.addEventListener('click', () => {
    const userRadioButton = document.querySelector('input:checked');
    const userSelection = userRadioButton.value;

    const computerSelection = getRandomThrow();
    const getResult = checkResult(userSelection, computerSelection);

    if (getResult === 'You won!') {
        totalWins++;
    }
    
    if (getResult === 'You lost :(') {
        totalLoss++;
    }

    if (getResult === 'It was a draw!') {
        totalDraws++;
    }
    totalGames++;

    computerSelectionSpan.textContent = 'I drew ' + computerSelection + '. ' + getResult;

    updateSpans();
});

resetButton.addEventListener('click', resetCount);