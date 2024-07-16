let num1 = 2;
let num2 = 3;

//summation function
let sum = function(){
    return num1 + num2;
}
// console.log(`Sum of ${num1} and ${num2} is: ${sum()}`);

//subtraction

let subtraction = function(){
    return num1 - num2;
}

// console.log(`Subtraction of ${num1} and ${num2} is: ${subtraction()}`);

//multiplication
let multiplication = function(){
    return num1 * num2;
}


// console.log(`Multiplication of ${num1} and ${num2} is: ${multiplication()}`);


//division

let division = function(){
    return num1 / num2;
}

// console.log(`Division of ${num1} by ${num2} is: ${division().toFixed(2)}`);

//remainder

let remainder = function(){
    return num1 % num2;
}

// console.log(`Remainder of ${num1} by ${num2} is: ${remainder()}`);


num1 += num2;

// console.log(num1);

num1 -=num2;

// console.log(num1);

if(num1>num2){
    // console.log(`${num1} is greater than ${num2}`);
}

else{
    // console.log(`${num1} is smaller than ${num2}`);
}

if(num1 <= num2){
    console.log(`${num1} is smaller than ${num2}`);
    num1 += 2;
    console.log(num1);
}

if(num1 >= num2){
    console.log(`${num1} is greater than ${num2}`);
}