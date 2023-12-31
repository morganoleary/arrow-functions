// Regular function call 
// returns the value of a + b + c
const sumAll = (a, b, c) => a + b + c;
// call the function with 1, 2 & 3
let sum = (1, 2, 3);
console.log("Sum: ", sum); // logs 6 as expected

// Extra arguments are ignored
// arbitrary # of parameters - still logs just 6 as the last 3 parameters are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2: ", sum2);

// Function using ...rest
// squashes any extra parameters passed into the function into a new function called Rest which will be an array within the function
// this parameter can technically be called anything but called Rest as its the 'rest' of the parameters
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    // Loop through the Rest array to add each additional # to the existing sum
    for (let i of rest) {
        sum += i;
    }
    // Return the sum
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3: ", sum3); // logs 21 as expected