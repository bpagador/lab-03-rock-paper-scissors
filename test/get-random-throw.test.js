import getRandomThrow from '../get-random-throw.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = getRandomThrow();
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    
});
