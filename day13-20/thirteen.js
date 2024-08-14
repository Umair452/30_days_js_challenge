//this is about modules and we have created a module file for it


// now we will pass two paras to add them using that function

import { module } from "../module.js";
import  _ from "lodash";
import axios from "axios";

let myArray = [6, 8, 1, 0, 2]


let numOne = 2;
let numTwo = 67;


let secondArray = _.chunk(myArray, 3)

console.log(secondArray);

console.log(module.sum(numOne, numTwo), module.myUser, module.urlRequest());



