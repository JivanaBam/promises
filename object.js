// ?object => key value pair
//? primitive data types
// String
// boolen
// datatype
// undefined
// null

// ?non-primitive
// object => key value pair
// key is also called property
// collection of primitive data types
// let student1 = {
//     firstName:"Jibana",
//     lastName:"Bam",
//     college:"Everest",
//     age:"25",
//     permanentAddress:"Kalikot",
//     temporaryAddress:"Lalitpur",
//     isMarried:false,
//     isGraduated:null,
//     height:undefined,
// };
// console.log(student1);

// ?CRUD
// create/add
// read/retrieve
// update/edit
// delete/remove

// const courseDetails = {
//     name:"MERN",
//     duration:90,
//     type:"Full Stack",
//     numberOfStudents:16,
// };
// console.log(courseDetails.name);
// console.log(courseDetails.duration);
// console.log(courseDetails["type"]);

// read operation
// const courseDetails = {
//     name:"jibana",
//     subject:"mern",
//     details:undefined,
// };
// console.log(courseDetails.name);
// console.log(courseDetails.details);

// const countryDetails = {
//     name:"nepal",
//     population:"3cr",
//     states:7,
//     isSecular:true,
// };

// upsert= update and insert
// //? udate
// countryDetails.name= "india",
// countryDetails.states= 28,
// console.log(countryDetails);

//?add
// console.log(countryDetails);
// countryDetails.gdp="1 million",
// console.log(countryDetails);

//?detete
// delete countryDetails.isSecular;
// console.log(countryDetails);

// const laptopDetails={
//     name :"GF75",
//     brand :"MSI",
//     ram :16,
//     ssd:256,
//     display: "15.3",
//     graphics: "NVIDIA GeForce RTX 3060",
//     battery: "51 Whr",
//     processor: "i7 10750H",
// };

// ? display laptop name with battery capacity
// console.log(`{$laptopDetails.name} has ${laptopDetails.battery}battery`);

// ?change ram size to 18 gigs
// laptopDetails.ram = 18,
// console.log(laptopDetails);

// ?add another property called  memoryFrequency with 3200MHz value
// laptopDetails.memoryFrequency= "3200Hz",
// console.log(laptopDetails);

// ? add another property called weight whose value is 3kg
// laptopDetails.weight= "3kg",
// console.log(laptopDetails);

// ? update ssd size by 300 GB
// laptopDetails.ssd = laptopDetails.ssd+300,
// console.log(laptopDetails);

//? delete processor property
// delete laptopDetails.processor;
// console.log(laptopDetails);

//?2.Create an object named myHouseDetails and add following properties
// const myHouseDetails={
//     numberOfRooms: 9,
//     numberOfMembers: 10,
//     colorOfHouse:"white",
//     builtYear:2011,
//     numberOfStorey:3,
// };

//? A.Delete numberOfMembers property
// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

//? B.Update numberOfRooms by new value
// myHouseDetails.numberOfRooms =myHouseDetails.numberOfRooms+2,
// console.log(myHouseDetails);

//? C.Add a  new property called estimatedPriceOfHouse
// myHouseDetails.estimatedPriceOfHouse= "12cr",
// console.log(myHouseDetails);

//? D.Print out all properties on the console like “I have a green coloured house
// with 9 rooms where 10 people are  living. The house is 3 storey and was built in
//  2011 with an estimated budget of 2 crores.”
// console.log(`
//     I have a $(myHouseDetails.colorOfHouse) coloured house with $(myHouseDetails.numberOfRooms)
//     rooms where $(myHouseDetails.numberOfMembers) people are living. The house is
//  $(myHouseDetails.numberOfStorey) storey and was built in $(myHouseDetails.builtYear)
//  with an estimated budget of $(myHouseDetails.eatimatedPriceOfHouse).`
// );

//? nested object
//  const studentDetails ={
//     firstName: "Arick",
//     lastName:"Bam",
//     age: 21,
//     college:"Idaho University",
//     address:{
//         temporary:"Idaho",
//         permanent:"laltipur",
//     }
//  };

//  console.log(studentDetails.address.temporary);
//  console.log(studentDetails["address"].temporary);
// console.log(studentDetails.address["permanent"]);
// console.log(studentDetails["address"] ["permanent"]);

// studentDetails.address.permanent= "Idaho";
// studentDetails.address.permanent="kathmandu";

// console.log(studentDetails);

// voli we will study object copy

//? 5.hospital Details
// add field => name,location,patientCapacity, numberOfBed, numberOfBlock,
// numberOfDoctor,numberOfNurse

// const hospitalDetails = {
//     name: "patan hospital",
//     location: " lagankhel",
//     patientCapacity: 4000,
//     numberOfBed: 4500,
//     numberOfBlock: 5,
//     numberOfDoctor: 250,
//     numberOfNurse: 1000,

// };
// console.log(hospitalDetails);

// delete numberOfBed and numberOfNurse

// delete hospitalDetails.numberOfBed;
// delete hospitalDetails.numberOfNurse;
// console.log(hospitalDetails);

// update numberOfBlock

//  hospitalDetails.numberOfBlock += 5;
//  hospitalDetails.numberOfBlock = hospitalDetails.numberOfBlock + 6;
//  console.log(hospitalDetails);

// add new field named numberOfAmbulance

// hospitalDetails.numberOfAmbulance = 11;
// console.log(hospitalDetails);

// copy the object to new variable named newHospitalDetails

// hospitalDetails = "newHospitalDetails";
// console.log(HospitalDetails);
// print out results like "There is a hospital named ABC with...."

// object copy
// const laptop1={
//     name:"Mac book",
//     brand:" Apple",
//     model:2023,
//     storage:{
//         ram: 18,
//         ssd: 512,
//     },

// };
//? sallow copy
// copy by value , copy by reference
// const laptop2 = laptop1;  // reference
// laptop2.name = " Asus tuff";
// console.log(laptop2);

// spread operator(...)
// const laptop2 ={...laptop1};
// laptop2.name = "Asus TUF";
// laptop2.storage.ram = 8;
// console.log(laptop2);
// console.log(laptop1);

//structuredclone (deep copy)
// laptop2.name = "A";
// laptop2.storage.ssd = 1200;
// console.log(laptop1);

// destructured
// const laptop={
//     name:"Mac book",
//     brand:" Apple",
//     model:2023,
// };
//  console.log(laptop.name);
//  console.log(laptop.brand);

// destructured
//  const {
//     name,
//     brand,
//      model
//     } = laptop;
//  console.log(laptop);

// let firstName="sona";
// const student1 = {
//     firstName:" Ram",
//     lastName: "bbb",
//     address:{
//         permanent:"bkt",
//         temporary:"ktm",
//     }
// };
//  const {
//     firstName: fName, // rename
//     address: {temporary: tempAdd},
//  }= student1;
//  console.log(firstName);
//  console.log(tempAdd);

//voli we will study Array
