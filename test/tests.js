// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isCool from '../isCool.js'

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const result = isCool('y');
    const result2 = isCool('yes');
    const result3 = isCool('yellow');
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, result);
    assert.equal(true, result2);
    assert.equal(true.result3);
})
///Thank you Jacob for explaining this!!!
