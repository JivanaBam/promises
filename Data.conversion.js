// Data.conversion

// js => string can be converted to => number
// only numeric string can be converted to number

// const a = "1234"; // numeric string

// let b = Number(a);

// console.log(b);

//NaN => Not a Number

// const sth = "Hello";

// let x = Number(sth);

// console.log(x);

//? numeric string can be converted to number by following ways
// (1) ParseInt/parseFloat  (2) number (3) +

// let a = "1234";

// let b = parseInt(a); // old method
// let b = Number(a); // now using method
// let b = +a; // now  using method
// console.log(b);

// let x = "10Broadway";
// let y = parseInt(x); //  O/P => 10
// let y = Number(x); //  O/P => NaN
// console.log(y);

// ?Number to String
let x = 25;
let y = String(x);
console.log(typeof y, y);
console.log(x, typeof x);

// Assignment..........