// IMPORT MODULES under test here:

import { isGameOver } from '../utils.js';


const test = QUnit.test;

test('user.greed is less than 80 the boolean is true and null is returned', (expect) => {
    //Arrange
    const user = { name:'p', character:'Aggressive', money: 25, greed: 5, completed: {} };
    // Set up your arguments and expectations
    const expected = null;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isGameOver(user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
// test('user.greed is more than 80 the boolean is false and page redirects', (expect) => {
//     //Arrange
//     const user = { name:'p', character:'Aggressive', money: 25, greed: 85, completed: {} };
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const isTrue = (isGameOver(user) === 1);
//     const actual = isTrue;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });