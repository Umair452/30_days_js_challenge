class Person {
    name = 'Umair Arshad'
    age = 24
    studentId = 1234
    studentName = 'Huzaifa'
    fName = 'Muhammad'
    lName = 'Umair'

    get intro (){
        console.log(`First name: ${this.fName}, Last name: ${this.lName}`);
        
    }

    set first(firstName){
        this.fName = firstName
    }

    set last(lastName){
        this.lName = lastName
    }

    static studentCount = 0

    constructor(){

        Person.studentCount += 1;

    console.log(`Total number of students are: ${Person.studentCount}`);
        
    }
    
    static greetings(){
        console.log(`Person's static method`);
        
    }

    greetings(){
        console.log(`Welcome ${this.name}`);
        
    }

    studentCreation (newStdID, newStdName){
        this.studentId = newStdID
        this.studentName = newStdName
    }
}

class Student extends Person {
    student(){
        console.log(`Student Id is: ${this.studentId} and Name is: ${this.studentName}`);
    }

    constructor(){
        super()
    }

    
}

let pObj = new Person;
// pObj.greetings()
// pObj.updation('Talha')
// pObj.greetings()

// sObject.student()
// sObject.greetings()

// Person.greetings()

// let secondStudent = new Student
// secondStudent.studentCreation(1090, 'Hasan')
// secondStudent.student();
// let thirdStudent = new Student
// thirdStudent.studentCreation(1122, 'Talha')
// thirdStudent.student()

console.log(pObj.intro);

pObj.first = 'Talha'
pObj.last = 'Butt'

console.log(pObj.intro);

