// No spread operator

// 4 is added to both arr1 & arr2 because each points to the other variable so anything changed to arr1 will change arr2 and vice versa
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array", arr2);
console.log("First array", arr1);


// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; // this spread operator spreads the first array into this one so it spreads the values of the 3rd array into the 4th

// this only adds '7' to array 4
arr4.push(7);
console.log("Third array", arr3);
console.log("Fourth array", arr4);


// Copying an object
let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};
console.log("First object", obj1);
console.log("Second object", obj2);
// the above copies obj1 into obj2 by spreading a, b & c and then adds d to obj2 only
let obj3 = {...obj1, b:5};
console.log("Third object", obj3);
// now... obj1 is spread into obj3 and the value of 'b' is now changed to 5 in the 3rd object


// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
// this prints out the contents of array 1, then object 1, then array 3, followed by x, y & z
