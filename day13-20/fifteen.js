function outerFunction(){

        function innerFunction () {
            console.log(`I have accessed the User: ${userName}`);
            
        }

        let userName = 'Umair'

        return innerFunction();

}

// outerFunction();

function createCounter() {
    let counter = 0; // private variable

    function increment() {
        counter++;
    }

    function log() {
        console.log(counter);
    }

    return {
        increment: increment,
        log: log
    };
}

const myCounter = createCounter();
// myCounter.increment(); // Increments the counter
// myCounter.log(); // Logs 1

// myCounter.increment(); // Increments the counter
// myCounter.log(); // Logs 2