import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('user should win on this throw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'userWin';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user should tie on this throw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'userTie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user should lose on this throw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'userLoss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});