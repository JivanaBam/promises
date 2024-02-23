// array
// c => collection of same array
// js => collection of any array

//  const studentDetails = ["reena", "sona", "geeta"];
//  console.log(studentDetails);

// ? js support array of mixed data type........
//  const randomArray = [ 12, "reena", true, null, "present"]
//  console.log(randomArray);

//?we can access values in array using index......
// index always start from zero
//  console.log(randomArray[2]);

//   const scoreMarks = [ 23,99 ,98, 88, 97];
// ? array length => total number of items in array.....
//  console.log(scoreMarks.length);

//  const carBrands= ["Honda", "Toyota", "Suzuki", "Tesla", "Hyundai", "Tata"];
//  console.log(carBrands[0]);
//  console.log(carBrands[1]);
//  console.log(carBrands[2]);
//  console.log(carBrands[3]);

//  for(let i = 0; i<=carBrands.length-1; i++){
//  console.log(carBrands[i]);
//  };

// Array Methods.........

// let studentLists= ["Prithivi", "sona", "rina","sita"];

//? push => adds elements to end of array.....
// studentLists.push("Arun");
// studentLists.push("sona", "gita");
// console.log(studentLists);

//? pop => removes last item from array.........

// studentLists.pop();
// console.log(studentLists);

//? unshift => add value from begining......
// let studentLists = ["Prithivi", "sona", "rina","sita"];
// studentLists.unshift("rajesh", "suresh");
// studentLists.unshift("manish");
// console.log(studentLists);

//? shift => remove value from begining........
// let studentLists = ["Prithivi", "sona", "rina","sita"];
// studentLists.shift();
// console.log(studentLists);

// ?map........................
// map is used to .............
// original array and returned array has same length/size.......
// const scores = [25, 35, 45, 55, 65, 75];
// scores.map((item, index, self)=>{
//     console.log(item, index, self);
// });

//newScores.......
// const scores = [25, 35, 45, 55, 65, 75];
// const newScores = scores.map((item, index, self)=>{
//     let newScores= item + 10;
// let newScores = item - 10;
//     return newScores;

// });
// console.log(newScores);

// const scores = [25, 35, 45, 55, 65, 75];
// const newItem = scores.map((item)=> item + 10);
// console.log(newItem);

// Lower Case..............
// const nameList =["SURESH", "HARI", "Shyam", "Gita"];
// let newNameList = nameList.map((item,index,self)=>{
//  let newItem = item.toLowerCase();
//  return newItem;
// });
// console.log(newNameList);

//Upper Case.............
// const nameList =["sushant", "suprim", "kamal"];
//     let newNameList= nameList.map((item, index, self)=>{
//     let newItem = item.toUpperCase();
//     return newItem;
// });
// console.log(newNameList);

// ASSINGNMENT..........

//? Create an array called friendsList and add your friends name. Print out your friend's
// name one by one............................

// const friendList= ["Sona", "Reena", "subekshya", "Dip", "Bidya"];

// console.log(friendList[0]);
// console.log(friendList[1]);
// console.log(friendList[2]);
// console.log(friendList[3]);
// console.log(friendList[4]);

// ?Create an array called favourite sportsPerson and use a for loop to print the player's name.

// const favourite_sportPersons = ["Leo Messi", "Virat", "MS Dhoni", "Sompal", "Mbappe"];
// for(let i=0; i<=favourite_sportPersons.length-1; i++){
// console.log(favourite_sportPersons[i]);
// };

// ?Create an array called myFavourite actors and print out who is your best actor among all
// actors.............

// const myFavourite_Actors = ["SRK", "Chris Evans", "Anuskha", "Leo Dcrapio", "Alia"];

// bestActor = myFavourite_Actors[0]
// console.log("My Favourite Actor is:", bestActor);

// ?Make an array of numbers that double the items..........

// const numbers =[ 2, 4, 5, 6, 7];
// const doubledNumbers= numbers.map((item, index, self)=>{
// let number = 2* item;
// return number;
// });

// console.log(doubledNumbers);

// ?Make an array of numbers and print whether the numbers are odd or even.............

//  const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//  let newNumber = numbers.map((item, indx, self)=>{
//      remainder= item % 2;
// if (remainder === 0){
//        console.log(`${item} is even`);

//  } else{
//     console.log(`${item} is odd`);

//  }
//     });

// const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// const checkEvenOrOdd = (numbers)=>{
//    let remainder= numbers% 2;
//     if (remainder === 0){
//            console.log(`${item} is even`);

//      } else{
//         console.log(`${item} is odd`);

//      }
// }
// numbers.forEach((item, index, self)=>{
//     const results = checkEvenOrOdd(item);

//     console.log(`${item} is $(result)`);
// });

// oddOrEvenNumbers = numbers.map((item)=>{
// const oddEvenNumber = [item/2==0];
// });

//? Create an array called laptopPriceList and run map.................

// const laptopPriceList = ["80Thousand", "1Lakh", "2Lakh", "2.5Lakh", "3Lakh"];
// laptopPriceList.map((item)=>{});

// console.log(laptopPriceList);

// ?There is array called laptopBrands = [“Dell”,”Asus”,”Acer”,”Hp”],
// 	Run map on it and print all elements........................

// const laptopBrands = ["Dell", "Asus", "Acer", "Hp"];
// laptopBrands.map(()=>{});
// console.log(laptopBrands);

// sunday we will study filter find slice splice some every sort

// ? filter => filter out values from array...................
//? original array n returned array has max probability of having different size..........

// const numList= [ 1, 3, 55, -30, -48];
// let newNumList = numList.filter((item, index, self)=>{
//     return item >= 0;
// });

// console.log(newNumList);

//?
// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];
// get an array with even scores
// const newScoreList =scoreList.filter((item, index, self)=>{
//     const number= item % 2;
//     if (number===0){
//         return item;
//     }

// })
// console.log(newScoreList);

//.......................................
// let laptopList = [
//     {
//       name: "TUF F15",
//       brand: "asus",
//       price: 1044,
//     },
//     {
//       name: "GF63",
//       brand: "msi",
//       price: 900,
//     },
//     {
//       name: "macbook air m2",
//       brand: "apple",
//       price: 1400,
//     },
//     {
//       name: "nitro",
//       brand: "acer",
//       price: 800,
//     },

//     {
//       name: "inspiron 55",
//       brand: "dell",
//       price: 700,
//     },
//   ];

// ? due to sudden rise in tax, add 10% to the price of each laptop.............

// const newLaptopList = laptopList.map((item, index, self)=>{
//    let newPrice = item.price + (10/100) * item.price;
// let newItem ={
//     ...item,
//       price = newPrice,
// }
//     return newItem;
// });
// console.log(newLaptopList);

// Assignment
// let laptopList = [
//   {
//     name: "TUF F15",
//     brand: "asus",
//     price: 1044,
//   },
//   {
//     name: "GF63",
//     brand: "msi",
//     price: 900,
//   },
//   {
//     name: "macbook air m2",
//     brand: "apple",
//     price: 1400,
//   },
//   {
//     name: "nitro",
//     brand: "acer",
//     price: 800,
//   },

//   {
//     name: "inspiron 55",
//     brand: "dell",
//     price: 700,
//   },
// ];

// ? due to sudden rise in tax, add 10% to the price of each laptop............

// const newLaptopList0 = laptopList.map((item, index, self) => {
//   let newPrice = item.price + 0.1 * item.price;

//   let newItem = {
//     ...item,
//     price: newPrice, //replaces price with newPrice
//   };

//   return newItem;
// });

// console.log(newLaptopList0);

// ? decrease price of each laptop by 20 percent........................
// const newLaptopList= laptopList.map((item, index, self)=>{
//   let newPrice = item.price - (20/100) * item.price;

//   let newItem = {...item, price: newPrice};
//   return newItem;
// });

// console.log(newLaptopList);

// ? remove laptops whose price is greater than 1000.................

// let newLaptopList = laptopList.filter((item, index, self)=>{
//   if(item.price <= 1000){

//   return number;
// };
// });
// console.log(newLaptopList);

// ? remove laptops whose brand is apple.....................
// let newLaptopList = laptopList.filter((item, index, self)=>{
//   if item.brand !== "apple"){

//   return laptop;
// };
// });

// console.log(newLaptopList);

// ? increase price of asus laptop by 5%.....................

// const newLaptopList= laptopList.map((item, index, self)=>{
//  if (item.brand === "asus"){
//   newPrice = item.price + (5/100)* item.price;
//   newItem = {...item, price: newPrice};
//   return newItem;
// }
// else{
//   return item;
// }
// });

// console.log(newLaptopList);

// find  => returns first matching item based on condition .....................

// ? push, pop

// const nations =["nepal", "india","china"];

// nations.push ("Thiland");
// nations.pop();
// console.log(nations);

// ? map changes array content......................
// const prices = [100, 150, 130, 80,50];
// let newPrices =prices.map((item, index, self)=>{
//   let newItem = item -20;
//   return newItem;
// })
// console.log(newPrices);

///////
// const prices = [1100, 150, 130, 80,50];

// let newPrices = prices.map((item)=>{
//   if (item === 150){
//   let newItem = item +100;
//   return newItem
//   }
//   else{
//     return item;
//   }
// });
//  console.log(newPrices);

//
// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// const newStudentData = studentData.map((item) => {
//   let newScore = item.score + 5;

//   let newItem = { ...item, score: newScore };

//   return newItem;
// });
// console.log(newStudentData);

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// let newStudentData = studentData.filter((item, index, self) => {
//   if (item.score > 80) {
//     return item;
//   }
// });

// console.log(newStudentData);

//find...........................

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// let newStudentData = studentData.find((item, index, self) => {
//   if (item.score === 75) {
//     return item;
//   }
// });
// console.log(newStudentData);

// ?sort => select as dictionary order.........

// const nameList = [
//   "Nepal",
//   "India",
//   "China",
//   "Bhutan",
//   "America",
//   "Zimbabwe",
//   "Australia",
//   "Argentina",
// ];
// nameList.sort();

// console.log(nameList);

// ?const nums = [1, 25, 100, 125, 22, 266, 277, 11111];

// a-b => ascending
// b-a => descending
// nums.sort((a, b) => {
//   return a - b;
// });

// console.log(nums);

////?????array pf wprds
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

// let newWords = words.map((item) => {
//   if (item.length > 6) {
//     return item;
//   }
// });
// console.log(newWords);

// array method
/// ? reduce
//? calculate total score

// const score = [45, 55, 65, 72];

// let newValue = score.reduce((sum, item, index, self) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(newValue);

// calculate total value by multiplying each other
let values = [10, 25, 35, 5];
let newValue = values.reduce((multiply, item, index, self) => {
  multiply = multiply * item;
  return multiply;
}, 1);

console.log(newValue);
