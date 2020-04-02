function checkResult(player, computer) {
    if (player === computer) {
        return 0;
    } else if (player < computer) {
        return -1;
    } else if (player > computer) {
        return 1;
    }
}

export default checkResult; 
