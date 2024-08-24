function outerFunction(){

        function innerFunction () {
            // console.log(`I have accessed the User: ${userName}`);
            
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

// console.log(array);
// console.log(`Number of array elements: ${array.length}`);
// console.log(`Function called: ${count} times`);


function captureUser(name){
    return function(){
        console.log(`Welcome my friend: ${name}`);
        
    }
}

const umairUser = captureUser('Umair')
const talhaUser = captureUser('Talha')

// umairUser()
// talhaUser()

function createFunction(index){

    return function (){
        console.log(`Function index is:${index}`);
        
    }

}

const functionArray = []
for (let index = 0; index < 5; index++) {
    
functionArray.push(createFunction(index))
    
}

// functionArray[0]();
// functionArray[1]();


function outer(outerVar){
    return function inner(innerVar){
        console.log(`I am outer function variable:${outerVar}`);
        console.log(`I am inner function variable:${innerVar}`);
        
        
    }
}

// const newFun = outer(2)
// newFun(3)





function itemHandler() {
    // Encapsulate items within the closure
    let items = [];
  
    function itemList(name, price, description) {
      return {
        productName: name,
        productPrice: price,
        productDescription: description,
      };
    }
  
    // Add a new item to the collection
    function add(name, price, description) {
      const itemDetails = itemList(name, price, description);
      items.push(itemDetails);
      console.log("Item added successfully.");
    }
  
    // View an item by its index
    function view(index) {
      if (index >= 0 && index < items.length) {
        console.log(`Item ${index + 1}:`, items[index]);
      } else {
        console.log("Invalid index. Cannot view item.");
      }
    }
  
    // Update an item by its index
    function update(index, newName, newPrice, newDescription) {
      if (index >= 0 && index < items.length) {
        const item = items[index];
        item.productName = newName;
        item.productPrice = newPrice;
        item.productDescription = newDescription;
        console.log("Item updated successfully.");
      } else {
        console.log("Invalid index. Cannot update item.");
      }
    }
  
    // Delete an item by its index
    function remove(index) {
      if (index >= 0 && index < items.length) {
        items.splice(index, 1); // Correct removal of item at the specified index
        console.log("Item deleted successfully.");
      } else {
        console.log("Invalid index. Cannot delete item.");
      }
    }
  
    // Return the module's interface
    return {
      add,
      view,
      update,
      remove,
    };
  }
  
  // Create a new item handler module
  const itemsModule = itemHandler();
  
  // Use the module's methods
  itemsModule.add("Pepsi 100ML", 150, "Pepsi is a brand bro");
  itemsModule.add("Coke 100ML", 250, "Coca Cola");
  itemsModule.view(0);
  itemsModule.view(1);
  itemsModule.update(0, "Cup cake", 70, "Cup cake added in place of Pepsi");
  itemsModule.view(0);
  itemsModule.remove(0);
  itemsModule.view(0);
  itemsModule.view(1); // Should show invalid index message
  