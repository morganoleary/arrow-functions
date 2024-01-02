// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// now it needs a callback function to action on each element of the array:

// acc = accumulator : the value returned from the reduce method (it will accumulate and keep track of the sum as the callback function is executed on each array element)
// curr = currentValue : current array item the callback function is being run on

/*
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum); // Prints: 10
*/

// breaking down the callback function:
/*
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr,
    );
    return acc + curr;
}, 0);
*/ 
// specify the beginning accumulator start point (0 at the end) to get all five elements listed out below (originally only 4 lines print, but this would begin with A:0 CV:0 T:0)

//console.log(sum); 
// Prints: 
// Accumulator: 0 Current Value: 1 Total: 1
// Accumulator: 1 Current Value: 2 Total: 3
// Accumulator: 3 Current Value: 3 Total: 6
// Accumulator: 6 Current Value: 4 Total: 10
// 10 (the ultimate value returned as the 'sum')
// (the accumulator is "accumulating" the sum of the current values as the function is executed for each element)

// Simplified down to one line again with the accumulator set as 0:ß
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Prints: 10






const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific property (in an array of objects)

  // Adding the current value's "yrsExperience" to the accumulator on each pass of the callback function
  const totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); 
  // ^ always specify initial value to use as accumulator!!
  console.log(totalExperience); // Prints: 16
  


  // Grouping by a property, and totaling it too (restructuring data in diff ways)
  // *first decide what you want to get back: integer, string, array?
  // we want an empty object so we can get this result:
  //{Developer: 12, Designer: 4}

  // 1st set of {} holds the callback function, 2nd set of {} is the initial value, an empty object (what the accumulator will be on the 1st pass)
  let experienceByProfession = totalExperience.reduce((acc, curr) => {
    let key = curr.profession; // get the current values profession

    //check if key already exists in the object we're accumulating into
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } // 1st time we see a new profession, that property will be added into the accumulator and its value will be set to the team member's experience
    else {
        acc[key] += curr.yrsExperience;
    } // if doesn't already exist, we just add the current member's experience to the already existing value

    return acc;
  }, {});

  console.log(experienceByProfession);
  // Prints: {Developer: 12, Designer: 4} as hoped


