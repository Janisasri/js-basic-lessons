/*eslint-disable*/

const names = ['John','Sam','Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

names.push('Jeni');
console.log('After push: ' + names);
//push will add the items at the end
//... is called as spread operator
// it represents the entire items in the array
const names2 = [...names, 'Jenisha'];
console.log('names2: ' + names2);
names.unshift('poppy');
console.log('unshift:' + names);
//adds the data to the beginning
//so the index no of the res of the values will change now
const names3 = ['raj', ...names];
console.log(names3);
//this will add data at the beginning
//now next method slice()
//create a new array

const bikes =['binachi','miele','panasonic','miyata','RE'];
const b1 = [...bikes.slice(0, 2)];
console.log(b1);
//slice takes 2 parameters
//from,to
//it has copied 2 values from index 0 and assigned to b1
const b2 = [...bikes.slice(2)];
console.log(b2);//last 2

const newBikes = [
    ...bikes.slice(0, 2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes: ' | newBikes);

//create a new array
//then index 0 and 1 values from bikes is copied using the slice
//(0,2) method.the first 2 values are copied.
//in the 2nd index value bennetto is pushed
//the from the third index again values from bikes is copied using slice(2)
//-the values  from the 2 index of bikes are copied.

//const newBike =['binachi','miele','panasonic','miyata','RE'];
//const b4 = [...bikes.slice(0, 2)];
 //console.log(b4);
 //const newBike = [
//...newBike.slice(0,2),
//...newBike.slice(4)
//];
//console.log('newBike: ' + newBike);

const indexOfSam = names.findIndex(names => names ==='Sam');
console.log('IndexOfSAM: ' + indexOfSam);
//function delete


//function deleteName(name){
    //const indexOfSam1=names.findIndex(names=>names===name);
    //const nam=[...names.slice(0,indexOfSam1),...names.slice(indexOfSam1+1)];
    //console.log(nam);
//}
//deleteName('Peter');

function deleteName(nametodelete, names) {
    const indexOfname = names.findIndex(n => n === nametodelete);
    console.log('indexOf name to delete: ' + indexOfname);
    const newArray = [
        ...names.slice(0, indexOfname),
        ...names.slice(indexOfname+1)
    ];
    return newArray;
};
    const deleteNames= deleteName('John',names);
    console.log(deleteNames);
    console.log(names);

    const numbers = [1,2,3,4,5,6,7,8,9];


    //console.log(numbers);
    //numbers.splice(3,2); 
    //(method) Array <number>.splice(start:number,deleteCount?:number)
    //Mutation Method - modifies/deletes the value in the source array
    //from the 3rd index delete the next 2 values
    //the values in number are modifies /deleted
    //console.log(numbers);

    const pizzaSlice = numbers.slice(2,4);//start and end index
    //(method) Array<number>.slice(start?:number, end?: number):
    //Immutable method = does not changes the source array
    console.log('pizzaSlices: ' + pizzaSlice);
    console.log('Original number:' + numbers);

const number = [1,2,3,4,5,6,7,8,9];
//anytime you want to use  a mutation and not mutate the original array
//we need to take a copy of the array 
numbers.reverse();
console.log(numbers);

const numberReversed = [...numbers].reverse();
console.log(numberReversed);
//pointers

 

