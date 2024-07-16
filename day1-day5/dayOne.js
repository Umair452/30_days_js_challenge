var num = 1234;
let myName = "Umair"
const checker = true;
const myObj = {
    name: 'Umair',
    email: 'umair@gmail.com',
    cell: '03000000'
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(`Number is: ${typeof num} and My Name is: ${typeof myName} and it is: ${typeof checker} my array is ${typeof myArray}`);

let newVar = 1234
// console.log(`Old value of newVar is: ${newVar}`);
newVar = 'I changed it to stirng'
// console.log(`New value of newVar is: ${newVar}`);


//lets try symbol variable

let mySymbol = Symbol('key')

let newObj ={
    mySymbol: 'Name'
}

// console.log(newObj.mySymbol);

const iterableObj = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const value of iterableObj) {
    console.log(value); // 1, 2, 3
}

