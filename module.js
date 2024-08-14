
import axios from "axios";

function sum (numOne, numTwo) {
    return numOne + numTwo
}

let myUser = {
    name: "Umair",
    age: 24,
    detailLog (){
        console.log(`${this.age, this.name}`);
        
    }
}





let module = {
    sum,
    myUser
}




export {module};