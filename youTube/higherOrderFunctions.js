const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; companies.length; i++) {
//   console.log(companies[i]);
// }

//for Each, similar to for loop but cleaner looking

// companies.forEach(function(company) { //company is the same as companies[i] in for loop, can call index what you want
//   console.log(company); //can get other values, i.e. company.name, company.category, etc
// });

//filter, allows us to filter things out from the array

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);

//Filter with ES 5 syntax

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// })

// console.log(canDrink);

//Filter with ES 6 Arrow Function Syntax

// const canDrink = ages.filter(age=> age >= 21);

// console.log(canDrink);

//Filter retail companies

//With ES 5 Syntax

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

// console.log(retailCompanies);

//With ES 6 Arrow Function Syntax

//company is the parameter and what comes after the arrow is the condition, the arrow is used instead of the word function and the condition after the arrow is used instead of an if statement

// const retailCompanies = companies.filter(company => company.category === 'Retail');



// console.log(retailCompanies);

//Get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(eightiesCompanies);

//Get companies that lasted 10 years or more

// const longLastingCompanies = companies.filter(company => (company.end - company.start >= 10));

// console.log(longLastingCompanies);

//Map- create a new array from an existing array or object

//Create array of company names

// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// console.log(companyNames);

//Can try adding anything to map

// const testMap = companies.map(function(company) {
//   return 1;
// });

// console.log(testMap);

//Map using more variables, making an array of strings with multiple variables

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(testMap);

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age));

// console.log(agesSquare);

// const agesTimesTwo = ages.map(age => age * 2);

// console.log(agesTimesTwo);

//Can do two maps at a time

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);

//   console.log(ageMap);

//sort

//sort companies by comparing them, takes in two values and compares them returning 1 or -1 to move the values up or down in the array

//sort companies by start year

//c1 and c2 are variables that you can set, they represent companies, you can call them what you want, usually they are called a and b

// const sortedCompanies = companies.sort(function(c1, c2){
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1
//   }
// });

// console.log(sortedCompanies);

//ES 6 Arrow syntax, using ternary operator instead of if else statement, ? is the condition where we want to return true, : is similar to else, what comes after : is the else statement

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

//sort ages

// const sortAges = ages.sort((a,b) => a - b); //sorts ages in ascending order, to do in descending order use b - a

// console.log(sortAges);

//reduce

//add ages together with for loop

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }

// console.log(ageSum)

// add ages together using reduce

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0); //going to take a second parameter of the total, which will start at 0

// console.log(ageSum);

//shorter version with arrows

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// console.log(totalYears)

//shorter version with arrows

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears)