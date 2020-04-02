function getRandomThrow() {
    const getRandom = Math.ceil(Math.random() * 3);
    if (getRandom === 1) {
        return 'rock';
    } else if (getRandom === 2) {
        return 'paper';
    } else { 
        return 'scissors';
    }
}

export default getRandomThrow;