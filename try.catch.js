//? error handle

let firstName = "Jibana";
let lastName = "Bam";
console.log(`My name is ${firstName} ${lastName}`);
const x = 6;
try {
  x = 2;
} catch (error) {
  console.log(error.message);
}
console.log(`I am learning MERN`);
