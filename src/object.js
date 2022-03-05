/* eslint-disable*/
const person={
    first:'jeni',
    last:'s',
    age:100

};
console.log(person.first);
console.log(person.last);
console.log(person.age);

person.first='Tom';
person.last='jerry';
console.log(person.first);
console.log(person.last);
person.last=null;
console.log(person.last);

const empty ={};
const point = {x:10 , y:50};
console.log(point.x);
console.log(point.y);
const point2={x:point.x, y:point.y +1};
console.log(point2.x);
console.log(point2.y);
const book={
    'main title' :'Java script',
    'sub-title' :'Guide to Java Script for beginners',
    'for' : 'student',
    author: {
        first:'Jeni',
        last:'S'
    }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
//console.log(book.sub-title);
console.log(book.for);



