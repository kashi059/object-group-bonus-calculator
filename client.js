// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!


// function calculateIndividualEmployeeBonus( employee ) {  
//   // your logic here
//    let bonus = 1
//     for (let employee of employees){
     
//     console.log('this is a list of objects and inside an employees array', employees);

  

// // - Those who have a rating of a 2 or below should not receive a bonus.
//   if (employees.reviewRating <= 2){
//     bonus = 0;
//     console.log('No bonus for you this year.');
// // - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
//   } else if (employees.reviewRating === 3){
//     bonus = (employees.annualSalary * 1.04 );
//     console.log('You received a bonus this year of 4%');


// // - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
//   } else if (employees.reviewRating === 4){
//     bonus = (employees.annualSalary * 1.06 );
//     console.log('You received a bonus this year of 6%');


// // - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.

//   } else if (employees.reviewRating === 5){
//     bonus = (employees.annualSalary * 1.10 );
//     console.log('You received a bonus this year of 6%');
// }



// if (employees.employeeNumber.length >= 4){
//   //were gonna bump you up 5%
//   bonus = (bonus * 1.05)
//   console.log('',bonus);
  
// }
// // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// // - No bonus can be above 13% or below 0% total.

// else if (employees.annualSalary >= 65000){
//   bonus = (bonus * .99);
//    console.log('dropped you down 1% ', bonus);
// }

// else if (bonus > 1.13 || bonus < 1) {
//   bonus = (bonus * 1)
//   console.log ('No bonus for you! ', bonus); 
// }

// // screw robert!  HA-HA-HA!


    
//   }
//   return bonus
//   console.log(`${employees.name}` + ' earned a ' +  bonus + 'this year.')

//   // const employees = [
//   //   {
//   //     name: 'Atticus',
//   //     employeeNumber: '2405',
//   //     annualSalary: '47000',
//   //     reviewRating: 3
//   //   },
//   // return new object with bonus results
  
// }

// let bonusEarned = calculateIndividualEmployeeBonus('Atticus');


// - Those who have a rating of a 2 or below should not receive a bonus.
// if (reviewRating <= 2){
//   bonus = 0;
//   console.log('No bonus for you this year.');
// }


// // - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// else if (reviewRating = 3){
//   bonus = ("something" * 1.04 );
//   console.log('You recieved a bonus this year of 4%');
// }
// // - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// else if (reviewRating = 4){
//   bonus = ("something" * 1.06 );
//   console.log('You recieved a bonus this year of 6%');
// }
// // - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// else if (reviewRating = 4){
//   bonus = ("something" * 1.06 );
//   console.log('You recieved a bonus this year of 6%');
// }

// console.log('Divider********************************************************************************************************************')


// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.

// if (employeeNumber.length >= 4) {
//   //were gonna bump you up 5%
// }
// // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// // - No bonus can be above 13% or below 0% total.

// if (anualSalary >= 65000){
//   // * .99
// }

// if (bonus > 1.13 || bonus < 1) {
//   bonus = "nope"; 
// }

// // screw robert!  HAHAHA
  
// ## The Bonus Calculation Function

// Write a declared function that takes in one **Employee** object (as an argument to the function), 
// and `return` a new **object** with the following properties. _Note these properties are different than the ones you start with!_
// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
   let bonus = 0;
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      // const bonusEarned = calculateIndividualEmployeeBonus(employee);
      // console.log(`${employee.name} earned a bonus of $${bonusEarned} this year.`);
      console.log('this is a list of objects and inside an employees array', employees);
  
    
  
  // - Those who have a rating of a 2 or below should not receive a bonus.
    if (employee.reviewRating <= 2){
      console.log('No bonus for you this year.');
  // - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
    } else if (employee.reviewRating === 3){
      bonus += employee.annualSalary * 0.04;
      console.log('You received a bonus this year of 4%');
  
  
  // - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
    } else if (employee.reviewRating === 4){
      bonus += employee.annualSalary * 0.06 ;
      console.log('You received a bonus this year of 6%');
  
  
  // - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  
    } else if (employee.reviewRating === 5){
      bonus += employee.annualSalary * 0.10 ;
      console.log('You received a bonus this year of 10%');
  }
  
  
  //Teacher help me plz************* How do we make this work?
  if (employee.employeeNumber.length >= 4){
    //were gonna bump you up 5%
    bonus += employee.annualSalary * 0.05;
    console.log('You received a bonus this year of 5%');
  }
  // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  // - No bonus can be above 13% or below 0% total.
  
  if (employee.annualSalary >= 65000){
    bonus += employee.annualSalary * .99;
     console.log('Unfortunately we have to bring your annual salary down by 1%');
  }
  
  if (bonus > 0.13 || bonus < 0) {
    bonus = (employee.annualSalary * 1)
    console.log ('No bonus change for you! '); 
  }
  
  // screw robert!  HA-HA-HA!
  
  
      
    }
    return bonus
    console.log(`${employees.name}` + ' earned a ' +  bonus + 'this year.')
  
    // const employees = [
    //   {
    //     name: 'Atticus',
    //     employeeNumber: '2405',
    //     annualSalary: '47000',
    //     reviewRating: 3
    //   },
    // return new object with bonus results
    
  }
  
  let bonusEarned = calculateIndividualEmployeeBonus('Atticus');
  console.log(bonusEarned);