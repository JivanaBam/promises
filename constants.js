// ?constants
// PI= 3.14..
//

// ?hof => high order function =>
// case 1. function returning function
// case 2. function which accepts another function as an argument

// eg of case 2

// ?callback function => function which is passed as an argument to another function
// const getSum = (x, y, printValue) => {
//   const sum = x + y;
//   printValue(sum);
// };

// const printValue = (value) => {
//   console.log(value);
// };

// getSum(2, 3, printValue);

// eg case 1

const getSum = (x, y) => {
  const calculateSum = () => {
    let sum = x + y;

    return sum;
  };
  return calculateSum;
};

// const func = getSum (2,3);
// const result = func();

const result = getSum(10, 20)(); // one line function call
console.log(result);
