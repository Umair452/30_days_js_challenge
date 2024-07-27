let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < myArray.length; index++) {
    // console.log(myArray[index]);
    
}

// console.log(`First element of array is ${myArray[0]} and the last element is ${myArray[myArray.length -1]}`);


myArray.push(11)

// console.log(`Element is pushed in array`);

// console.log(myArray);

myArray.pop(myArray[myArray.length - 1])

// console.log(`Element is poped from array ${myArray}`);

let removeFromCart = ['T-Shirt', 'Joggers', 'Perfume', 'Polo Shirt']


// console.log(`${removeFromCart.shift()} has been removed form the cart !`);

let addToCart = []

// console.log(`${addToCart.unshift('Diary')} item added to cart`);

// console.log(addToCart);






let newArray = myArray.map(function(element){
    return element * 2;
})
// console.log(`Old array is ${myArray}`);
// console.log(`New array is ${newArray}`);

// discount using map function

let customerCart = [300, 2000, 1500];
let discountedCart = [];
let prevTotal = 0;
let newTotal = 0;

customerCart.forEach(element => {
    prevTotal = element + prevTotal
     
});

const discount = true;

if (discount == true) {
    discountedCart = customerCart.map(function(element){
        let discount = element * 0.2
        return element = element - discount
    })
} else {
    return customerCart
}

discountedCart.forEach(element => {
    newTotal += element
})

// console.log(`Cart total before discount was: ${prevTotal}`);
// console.log(`Cart total after discount is: ${newTotal}`);


let filterArray = [1,2,3,4,5,6,7,8,9,10]

// console.log(filterArray.filter((num) => num % 2 == 0));

filterArray.filter((e, index) => {
// console.log(`Index of elment is: ${index} and the element is:${e}`);    
});

console.log(filterArray.reduce((acc, num) => {
    
    return acc +=  num
}));

//use reduce and filter methods for discount and other things

console.log(`Your new bill after discount is ${
    customerCart.reduce((acc, item) => {
        return acc += item
    })
}`);