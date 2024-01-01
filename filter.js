  
/**
 * The callback function must return a test to evaluate to either true or false
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

// to get the people old enough to drink alcohol:
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough); // Prints: [ { name: 'Michael, age: 23 } ]
  
// to filter the array down to just Paul:
// using just 'p' instead of 'person'
const paul = people.filter(p => p.name === 'Paul');
console.log(paul); // Prints an array containing the Paul object:
// [ { name: 'Paul', age: 18 } ]
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  // This way  is not that easy to understand...

  // filtering job candidates with a minimum of 5 years experience in at least one field
  const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    // return true or false result for the original filter
    return strongSkills.length > 0;
  })
  console.log(candidates); // Prints and array of the objects:
  /**
    [
     {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
      },
      {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
      },
    ]
   */

    // This way you extract the whole filter function into its own function
    const hasStrongSkills = student => {
        let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
        return strongSkills.length > 0;
    } 
    const candidates = students.filter(hasStrongSkills);
    console.log(candidates);

    // You can extract the inner filter into another function as well
    // This keeps it clean and simplified:
    const has5yearsExp = skill => skill.yrsExperience >= 5;
    const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
    const candidates = students.filter(hasStrongSkills);
    console.log(candidates);

    // Use .map() method to get only the qualifying candidates names
    const names = candidates.map(students.name); 
    // Prints... ???? not sure if this is correct but I think so?