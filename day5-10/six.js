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