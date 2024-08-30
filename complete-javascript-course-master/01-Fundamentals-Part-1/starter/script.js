/*

//Declare a variable js and assign it a value amazing
let js = "amazing";
// Check if the value of 'js' is equal to the string "amazing"
if (js === "amazing") {
// If the conditi// If the condition is true, display an alert message saying "JAVASCRIPT IS FUN"on is true, display an alert message saying "JAVASCRIPT IS FUN"
 alert("JAVASCRIPT IS FUN");const fullName = firstName + lastName;

//the output for this computation doesnt   20 + 39 + 28; show output anywhere not even the console
20 + 39 + 28;
//for the output to be able to show use the console function
//the console.log function builds abridge between the script and the developer side of the browser

}

console.log(20 + 39 + 28); 20 + 39 + 28;
//declaring a variable and assigning it a value
let firstName = 'matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);
//console.log(20 + 39 + 28); 20 + 39 + 28;

//data types

let javaFun = true;
console.log(javaFun);
console.log(typeof javaFun)

console.log(typeof 23)
console.log(typeof 'jose')

javaFun = 'YES!';
console.log(typeof javaFun);

let year;
console.log(typeof year)

year = 1995;
console.log(typeof year);


//declaring variables using let,var andconsole.log(typeof year) const
let age = 30;
age = 31;

const yearOfBirth = 1999;
//console.log(typeof year)//yearOfBirth = 1993;// this returns an error it is not allowed

var subject = 'biology';
subject = 'physics';

//we can also assign values to variables without first declaring them
firstName = 'JOSEPHINE';// NOT ADVISABLE

//OPERATORS
//ARITHMETIC OPERATORS
const now = 2024;
//const agePeter = now - 1999;
//const ageAlex = now - 2020;
//console.log(agePeter, ageAlex);

//console.log(agePeter + 2, ageAlex + 20, 2 ** 3);

//concantenation operator

const firstNames = 'Josephine';
const lastName = 'Nanyonga';
fullName = firstNames + ' ' + lastName;
console.log(fullName);

//assignment operator
let x = 10 + 3;
x += 10;// x = x + 10; result = 23
x *= 4; // x = x * 4; result = 92
x /= 2; // x = x / 2; result = 46
x++; // x = x +1; result  = 47
x--; //x = x - 1 result = 46
console.log(x);

//comparison operators : Used to produce boolean values
// code or resuts arent strored
//console.log(agePeter > ageAlex);//< ,> ,<=, >=
//console.log(agePeter >= 18);
//console.log(ageAlex >= 18);

//to ensure that they are stored with create a variable for them
//const fullAge = ageAlex >= 18;

//OPERATOR PRECEDEENCE
const agePeter = now - 1999;
const ageAlex = now - 2020;

//same as this: console.log(agePeter > ageAlex)
const fullAges = (now - 1999 > now - 2020);
console.log(fullAges);

const averageAge = (agePeter + ageAlex) / 2;

console.log(agePeter, ageAlex, averageAge);

let z, y;

z = y = 25 - 10 - 12
console.log(z, y);
console.log(agePeter > ageAlex);



//first challenge

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
/*massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.75;

const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);

const markHigherBMI = (markBMI > johnBMI);

console.log(markBMI, johnBMI, markHigherBMI);


//STRINGS AND LITERALS
const firstName = 'Jonas';
const job = 'teacher';
const year = 2037;
const birthYear = 1991;

//strings
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(jonas);



//using the template literals to form a sentence
const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

//mire strings
console.log('she is \n\
a beautiful \n\
girl');

//creating multiple line using the template literals
console.log(`She is
a beautiful
girl`);



// if -else statements
//if-else control structure

const age = 14;

if (age >= 18) {

    console.log(`Sarah is allowed to drive`);
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is still young and is left with ${yearsleft} to start driving`)
}

// having the console.log outside the if-else blocks
const yearOfBirth = 1895;
let century;
if (yearOfBirth < 2000) {
    century = yearOfBirth < '20th';
} else {
    century = '21st';
}
console.log(century);//an error is generated if the century variable is not first declared

//Coding Challenge 2

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
/*massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.75;

const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's");
}
else {
    console.log("John's BMI is higher than Mark's");
}

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}*/


//TYPE CONVERSION AND TYPE CORECION

//type conversion

// let inputYear = '1991';
// console.log(Number(inputYear) + 18);// OUTPUT IS 2009
// console.log(inputYear + 18)//output is 199118

// //type corecion

// console.log('10'+ '2' + '3')//output is 1023 this becoz the + opeator joins strings and thet are the ones here and it is done automatically by javascript

// console.log('10' - '2')//output is 8 this becoz the - operator converts the string to numbers and that applies to the * and / operators

// //FALSY AND TRUTHY VALUES

// console.log(Boolean(0));//output is false
// console.log(Boolean({}));//output is true
// console.log(Boolean('jonas'))//output is true

// // using if statement to prove the above

// let year;
// if(year){
//     console.log('the year is defined');

// }else{
//     console.log('the year is undefined')//this will be the output

// }

// let addition = 10 + 2;

// if (addition){
//     console.log(`the answer is ${addition}`);
// }else {
//     console.log(`the answer is wrong`);
// }


// // EQUALITY OPERATORS ==,===

// const age = Number('18');
// if(age === 18) console.log('you have become an adult!');//with are supposed to use === 

// if (age == 18) console.log('you have become an adult!');

// const favourite =Number(prompt("what is your favourite number!"));
// //if (favourite === 23) console.log( '23 is a cool number');
// //if (favourite == 23) console.log( '23 is a cool number');


// //the use of elseif
// if(favourite === 23){
//     console.log('23 is a cool number');

// }else if (favourite === 7){
//      console.log('7 is a cool number');
// }
// else if (favourite === 30){
//     console.log('30 is a cool number');
// }else{
//     console.log('number is not 23 or 7 or 30');
// }
// if (favourite === 23) console.log( '23 is a cool number');
// if(favourite !== 23){
//      console.log('why not 23 ?');
// }


//coding challenge 3

// const averageScoreDolphins = (96 + 108 + 89)/3;
// const averageScoreKoalas = (88 + 91 + 110/3);
// console.log(averageScoreDolphins , averageScoreKoalas );

// if (averageScoreDolphins > averageScoreKoalas){
//     console.log('Dolphin is the winner of the trophy');
// }else if(averageScoreKoalas > averageScoreDolphins){
//     console.log('Koalas is the winner of the trophy');
// }else if(averageScoreDolphins === averageScoreKoalas){
//     console.log('both teams win the trophy');
// }

// bonus
const averageScoreDolphins = (97 + 112 + 101)/3;
const averageScoreKoalas = (109 + 95 + 106)/3;
console.log(averageScoreDolphins , averageScoreKoalas );


if(averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100){
    console.log('Dolphin is the winner of the trophy'); 
}else if(averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100){
    console.log('Koalas is the winner of the trophy');
}else if(averageScoreDolphins === averageScoreKoalas &&  averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
    console.log('Both team win the trophy');
}else{
    console.log('No team wins the trophy');
}


