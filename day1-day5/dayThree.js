let num1 = 0
let num2 = 2
let num3 = 4
let age = 18

//simple control structure

if(num1 > 0){
    // console.log('Number is positive');
}

else if(num1 == 0){
    // console.log('Number is zero');
}

else{
    // console.log('Number is a negative number');
}


if (age >= 18) {
    // console.log('Person is eligible to vote');
} else {
    // console.log('Person is not eligible to vote');
}

if (num1 > num2 && num1 > num3) {
    // console.log(`${num1} is greater than ${num2} and ${num3}`);
} else if(num2 > num1 && num2 > num3){
    // console.log(`${num2} is greater than ${num1} and ${num3}`);
    
} else {
    // console.log(`${num3} is greater than ${num1} and ${num2}`);
}





                           //switch statement
//pick a week day

//generating a random character 

let day = 'MTWtFsS'

function dayGenerator(length){
    let pickedChar = ''
    let stringLength = day.length
    for (let index = 0; index < length; index++) {
        
        pickedChar = day.charAt(Math.floor(Math.random() * stringLength))
        
    }

    return pickedChar
}

let dayGenerated = dayGenerator(1)

// console.log(`When should I visit the doctor? let the computer decide....`);

switch (dayGenerated) {
    case 'A':
        // console.log(`Monday is the best day to visit the doctor`);
        break;
        case 'T':
            // console.log(`Tuesday is the best day to visit the doctor`);
            break;
            case 'W':
                // console.log(`Wednesday is the best day to visit the doctor`);
                break;
                case 't':
                    // console.log(`Thursday is the best day to visit the doctor`);
                    break;
                    case 'F':
                        // console.log(`Friday is the best day to visit the doctor`);
                        break;
                        case 's':
                            // console.log(`Saturday is the best day to visit the doctor`);
                            break;
                            case 'S':
                                // console.log(`Sunday is the best day to visit the doctor`);
                                break;
    default:
        // console.log(`Go whenever you want to`);
        break;
}

//leap year check




function leapChecker(input){


if(input % 4 == 0 && input % 100 != 0 || input % 400 == 0){
    // console.log(`${input} is a Leap year`);
}
else{
    // console.log(`${input} is not a Leap year`);
}

}

let year = 2004

leapChecker(year);