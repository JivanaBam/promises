// ?array copy

const scores = [25, 35, 45, 55];
//copy address
// const newScores = scores;
// newScores[0] = 20;
// console.log(scores);

//? spread operator...................
// let newScores = [...scores];
// newScores[0] = 5;
// console.log(scores);

//? structureClone.....................

//? when array has objects or array inside

// const studentData = [{ name: "A" }, { name: "B" }];
// const newStudentData = structuredClone(studentData);
// newStudentData[0].name = "z";
// console.log(newStudentData);

// ? reverse
// reverses the order of array

// const countries = ["Nepal", "China", "India"];
// countries.reverse();
// console.log(countries);

// ? Use case...................
const names = ["Rina", "Sona", "Jibana", "Zeni", "Alisha"];

names.sort();
// names.sort().reverse();
console.log(names);
