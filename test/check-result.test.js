import { checkResult } from '../check-result.js';

const test = QUnit.test;

test('paper, scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'You lost :(';
    const player2 = 'paper';
    const computer2 = 'rock';
    const expected2 = 'You won!';
    const player3 = 'paper';
    const computer3 = 'paper';
    const expected3 = 'It was a draw!';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    const result2 = checkResult(player2, computer2);
    const result3 = checkResult(player3, computer3);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result2, expected2);
    assert.equal(result, expected);
    assert.equal(result3, expected3);
    
});