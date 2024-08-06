//array destructuring

let myArray = [0, 1, 2, 3, 4, 5];

[one, ,two] = myArray;

// console.log(`${one} ${two}`);


//object destructuring

let bookDetails = {
    title: 'Pakistan Studies',
    author: 'Lumber One',
    published: "14/08/1947"
}

let {title,  author} = bookDetails;


// console.log(`${title} ${author}`);

//spread operator

let oldArray = [5,6,7,8,9];

let newArray = [];

newArray.unshift(1,2,3,4,...oldArray )

// console.log(newArray);


//rest operator


function summarize (...argument){
    

    let sum = argument.reduce((acc, num) => {
        return acc + num
    })

    // console.log(`The sum of ${argument} is: ${sum}`);
}

// summarize(2, 3, 4, 5);


function paramAcceptor (a, b =1){
    return a * b;
    
}

// console.log(paramAcceptor(3,2));

//enhanced object literals


let fName = "Umair";
let age = 24;
let showDetails = () => {console.log(`My first name is: ${fName} and my age is ${age}`);
}

let myObj = {
    fName,
    age,
    showDetails
}

// console.log(myObj.showDetails());


let obj_key='salary'
let emp={
    name:"one",
    age:27,
    obj_key:5500
}
// console.log(emp)


function objectCreater (key, value){
    let myObj = {}
    myObj[key] =  value;
    return myObj;
}
//old ways to give object a key and value using expression
// console.log(objectCreater('name', 'Umair'));

//Es6 way

function newWayObject (key, value){
    return {
        [key]: value
    }
}

// console.log(newWayObject('name', 'Umair Arshad'));
