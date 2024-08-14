
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


function urlRequest(){

    axios.get('https://api.github.com/users/Umair452').then((response)=>{
        console.log(response);
        
    });
}




let module = {
    sum,
    myUser,
    urlRequest
}




export {module};