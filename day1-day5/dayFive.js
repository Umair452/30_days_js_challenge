let num = 3

function checker (num){
    if (num % 2 == 0) {
        console.log(`Number is even`);
    } else {
    console.log(`Number is odd`);
    }
}

// checker(num)

function squareFunction(num){
    return Math.pow(num, 2)
    // return num ** 2  both works the same

}

// console.log(`Square of ${num} is: ${squareFunction(num)}`);


function maxNumber (num, num2 = 2){
if (num > num2) {
    console.log(`${num} is greater than ${num2}`);

} else {
    console.log(`${num2} is greater than ${num}`);
}
}

// maxNumber(num)

function concatenation (){
    let fname = "Umair"
    let lname = "Arshad"
    console.log(fname.concat(lname));
}

// concatenation()

const arrowSum = (num, num2 = 2) => (num + num2)

// console.log (arrowSum(num))

const emailValidation = () =>{
    let email = "umair@gamil.com"
    if (email.includes(" ")) {
        // console.log(`Email is invalid it may contains a space or it is missing .com etc`);
    } else if (!email.includes('.com')) {
        // console.log(`Email is invalid it may contains a space or it is missing .com etc`);
        
    }
    else{
        // console.log(`Email is valid`);
    }
}

// emailValidation()

const callbackfn = () => {
    console.log(`I am function being called`);
}

const higherOrder = (fun, counter = 3) => {
    console.log(`I called the following function ${counter} times`);

    for (let index = 1; index <= counter; index++) {
        fun()
        
    }
}

// higherOrder(callbackfn)


let higherOrderFunction = (functionOne, functionTwo, value) => {
let temp = functionOne(value)
let result = functionTwo(temp)

return result
}
let multiplier = (value) =>{
    return value * 2;
}

let twoSum = (value) => {
    return value + 2
}

let value = 2

 let result = higherOrderFunction(multiplier, twoSum, value)

//  console.log(result);