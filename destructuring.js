// Destructuring arrays

// this method does not use destructuring
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages [2];
//console.log(john, mary, joe);

// this method does
let [john, mary, joe] = ages;
console.log(john, mary, joe); // prints: 30 26 27

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia); // prints: designer developer accountant

// Destructuring subsets:

// Arrays
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); // prints: english french (ignores the rest of the array)

let [, , maryNative, marySecondary] = languages; // the commas skip the first 2 lang.
console.log(maryNative, marySecondary); // prints: spanish german since the commas at the beginning of the array  skip the first 2 languages

// Objects = values of objects represented by property names
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage); // prints: english german

// Using destructuring with the rest parameter syntax
// Bundle up the remaining parts of an array or object that might be used later on

// Arrays
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite); // prints: apple
console.log(secondFavorite); // prints: orange
console.log(others); // prints an array of remaining objects: [ 'banana', 'peach', 'cherry' ]


// Objects
let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favoriteFoods:
console.log(brian); // prints: pizza
console.log(anna); // prints: pasta
console.log(rest); // prints an object of the remaining items: { sarah: 'vegetarian', andrea: 'steak' }