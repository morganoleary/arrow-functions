/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);


// Arrow Function With Parameters 
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters (simple functions)
// const addTwoNumbers2 = (a, b) => (a + b); (also valid)

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers(6, 4);
console.log(sum2);

// Implicit Returns 
// (1 parameter 'message' doesn't need () )

const saySomething = message => console.log(message);
saySomething('Hello there!!!');

// (0 parameters, you must add an empty () to tell JS you're declaring a function)
const sayHello = () => console.log('hello');

// Returning Multiple Lines (empty () required)
// If you need to return multiple lines of code, you must wrap whatever comes after 
// the return keyword in ()

const returnMultipleLines = () => {
    `<p>
        This is a multiline string!
    </p>`
}
console.log(returnMultipleLines());
