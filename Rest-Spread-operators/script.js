// <------------Basic example-------------->

function PlayerDetails(...details) {               //Here , `Details` is our Spread function used to unwrap or say unpacked our playerNo array.
  console.log(details);                            // Output: [1, 2, 3, 4,  5,6, 7, 8, 9, 10 ]
}

const playerNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
PlayerDetails(...playerNo);                        // `PlayerNo` is Rest Operator. it is wrapping our playerNo array or we can say it  packed our playerNo array.



// <------------example of Rest Operator-------------->

function displayDetails(name, age, ...skills) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log(`Skills: ${skills.join(", ")}`);
}

displayDetails("Shivankit", 23, "JavaScript", "React", "Node.js");
// Output:
// Name: shivankit, Age: 23
// Skills: JavaScript, React, Node.js
// Here, name and age are handled normally, but ...skills collects the remaining arguments into an array.




// <------------example of Spread Operator-------------->

const person1 = { name: 'shivankit', age: 23 };
const updatedPerson = { ...person1, city: 'Noida', age: 23 };
console.log(updatedPerson);
// Output: { name: 'shivankit', age: 23, city: 'Noida' }
// Here, ...person spreads the properties of the person object into the updatedPerson object. We also updated the age property and added a city property.





// <----------- The rest and spread operators play an important role in destructuring arrays and objects -------------->


//Object Destructuring with Rest Operator

const person2 = { emp: 'shivankit', age: 23, city: 'Noida', country: 'India' };
const { emp, ...otherDetails } = person2;
console.log(emp);          // Output: shivankit
console.log(otherDetails);  // Output: { age: 23, city: 'Noida', country: 'India' }




//Object Destructuring with Spread Operator

const array1 = [1, 2, 3];
const array2 = [4, 5];
const newArray = [...array1, ...array2];
console.log(newArray); // Output: [1, 2, 3, 4, 5]




// How to Use Spread to Convert a String into Individual Array Items

const myName = "shivankit agarwal";

console.log([...myName]);





