for (let index = 1; index <= 10; index++) {
    // console.log(index);
    
}

for (let index = 1; index <= 10; index++) {
    // console.log(`5    *    ${index}  = ${5 * index}`);
    
}

let index = 1
let sum = 0

while (index <= 10) {

    sum = sum + index
    index++


}


let reverseIndex = 10

while (reverseIndex >= 1){
    // console.log(reverseIndex);
    reverseIndex--
}

// console.log(`Sum of numbers from 1 to 10 is: ${sum}`);

let doIndex = 5
let ficIndex = 1
let ficResult = 1
do {
   ficResult = ficIndex * ficResult
   ficIndex++
} while (ficIndex<= doIndex);
// console.log(`Fictorial of ${doIndex} is: ${ficResult}`);

let staric = ' * '
for (let index = 0; index <= 5; index++) {
    // console.log(`${staric.repeat(index)}`);
   
    
}


for (let index = 1; index <= 10; index++) {
   
    if (index == 5) {
        continue
    }
    // console.log(index);
}



for (let index = 1; index <= 10; index++) {
   
    if (index == 5) {
        break
    }
    console.log(index);
}