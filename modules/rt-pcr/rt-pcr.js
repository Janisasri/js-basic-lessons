/*eslint-disable*/

 
// call the function to set the event to the new row
// check the empty input
 

import { move,myFunction } from "./display.js";
import { checkEmptyInput,reset } from "./validate.js";

var addData = document.getElementById("btn");
addData.addEventListener("click",function() {
    move();
    myFunction();
});
 function reset() {
     
     myFunction();
 }
 window.reset = reset;