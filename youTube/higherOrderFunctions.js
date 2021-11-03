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

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(testMap);


// const testMap = companies.map(function(company) {
//   return 1;
// });

// console.log(testMap);