function getRandomThrow(player, computer) {
    if (player === computer) {
        return 0;
    } else if (player < computer) {
        return -1;
    } else if (player > computer) {
        return 1
    }
}

export default getRandomThrow;