function checkResult(player, computer) {
    if (player === 'paper' && computer === 'rock') {
        return 'You won!';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'You won!';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'You won!';
    } else if (player === 'rock' && computer === 'paper') {
        return 'You lost :(';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'You lost :(';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'You lost :(';
    } else {
        return 'It was a draw!';
    }
}

export default checkResult; 
