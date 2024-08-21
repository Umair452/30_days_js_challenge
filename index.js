function createIdGenerator() {
    let lastId = 0; // This variable is kept in the closure

    return function() {
        lastId++; // Increment the last generated ID
        return lastId.toString().padStart(5, '0'); // Convert to a string and pad with zeros
    };
}

const generateUniqueId = createIdGenerator();

let array = [];
let count = 0;

function idGenerator() {
    const uniqueId = generateUniqueId(); // Generate the next unique ID

    // Check if the uniqueId already exists in the array (though this shouldn't happen since it's always unique)
    if (!array.includes(uniqueId)) {
        array.push(uniqueId);
    }

    count++;
}

// Generate multiple IDs
idGenerator();
idGenerator();
idGenerator();
idGenerator();

console.log(array);
console.log(`Number of array elements: ${array.length}`);
console.log(`Function called: ${count} times`);
