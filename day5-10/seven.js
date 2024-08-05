let bookOne = {
    'name': 'Pakistan Studies',
    'author': 'Lumber One',
    'publishYear': 1947,
    bookDetails () {
            // console.log(`Book title is: ${this.name} and its author is: ${this.author}`);
    },

    updatingValue (input){
        this.publishYear = input;
        // console.log(`I updated the year to ${this.publishYear}`);
    }

}
// bookOne.updatingValue(2000);
// console.log(bookOne.bookDetails());
// console.log(bookOne.publishYear);


const library = {
    name: 'UOG Library',
    books: [
        {
            'title': 'Islamiat',
            'author': 'Nasir Publisher'
        },
        {
            'title': 'Mathematics',
            'author': 'John Doe'
        },
        {
            'title': 'Physics',
            'author': 'Jane Smith'
        },
        {
            'title': 'Chemistry',
            'author': 'Emily Johnson'
        },
        {
            'title': 'Biology',
            'author': 'Michael Brown'
        },
        {
            'title': 'History',
            'author': 'Sarah Davis'
        }
    ]
}




// console.log(`Name of the library is: ${library.name} and it has following books`);

for (let index = 0; index < library.books.length; index++) {
    // console.log(library.books[index].title);
    
    
}

for (const book of library.books){


    for (let key in book){
        // console.log(`${key}: ${book[key]}`);
        
        
    }

}

for (const book of library.books) {
    const keys = Object.keys(book);
    const values = Object.values(book);
    for (let i = 0; i < keys.length; i++) {
        console.log(`Key: ${keys[i]} Value: ${values[i]}`);
                
    }
        
    }

    

