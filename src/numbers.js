/* eslint-disable */
const age=100;
const money=1000.50;
console.log(typeof age);
console.log(typeof money);

console.log("10"+"3");

console.log(Math.round(2.2));
console.log(Math.floor(2.6));
console.log(Math.ceil(2.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets/kids);
console.log(eachKidGets);
const leftsweets=sweets%kids;
console.log(leftsweets);

let x=2**3;
console.log(x);
x=Math.pow(2,3);
console.log(x);

console.log(0.1 + 0.2);
//let costOfProduct = 100.95;
//let costOfProduct=10095;

console.log(typeof Infinity);
console.log(typeof -Infinity);
//let result=10/'hello';
console.log(typeof NaN);

let a=100;
let result=Number.isInteger(a);
console.log(`is a a number: ${result}`);
let y="abcd";
result=Number.isInteger(y);
console.log(`is y a number: ${result}`);
result = (typeof y === 'string');
console.log(`Is y a String: ${result}`);
let flag = true;
result = (typeof flag === 'boolean');
console.log(`Is flag a boolean: ${result}`);
let nos = [1,2,3,4,5];
result = (typeof nos === 'object');
console.log(`Is nos an object: ${result}`);


