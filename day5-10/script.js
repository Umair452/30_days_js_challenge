

// window.onload = () => {
//     myFunction();
// }

// function myFunction() {
//     setTimeout(() => {
//         let heading = document.querySelector('#heading');
//         let container = document.querySelector('.container')
//         let newElement = document.createElement('div')
//         let containerTwo = document.querySelector('.containerTwo')
//         heading.textContent = 'My Inner Text Has Been Changed';
//         container.style.backgroundColor = 'green'
        
//         newElement.textContent = 'I am the appended div'
//         container.appendChild(newElement)

//         // container.removeChild(heading)

//         containerTwo.removeChild(containerTwo.lastChild)
//         attributeChanger();
//     }, 2000);
   
// }

// function attributeChanger() {
//     const image = document.querySelector('#image')
//     image.setAttribute('alt', 'changed')
//     image.classList.add('myImage')
// }

// function paragraphChanger(){
//     const paragraph = document.querySelector('#paragraph')
//     paragraph.textContent = "Congratulations!!"
    
// }

// function borderChanger(){
//     const btn = document.querySelector('#btn')
//     if (btn.style.borderColor == '') {
//         btn.style.borderColor = 'red'
//     } else {
//         btn.style.borderColor = ''
//     }
    
// }

// function visibiltyChanger () {
//     const image = document.querySelector('#image')
//     if (image.style.opacity == 0) {
//         image.style.opacity = 1
//     } else {
//         image.style.opacity = 0
//     }
// }

// function pressedKey() {
//     const input = document.querySelector('#input').value
//     console.log(`You pressed ${input} key`);
    
// }

// document.addEventListener('DOMContentLoaded', () => {

// document.querySelector('#form').addEventListener('submit', formHandler);

// function formHandler(event) {
//     event.preventDefault(); // Prevent the form from submitting and reloading the page
    
//     const formData = {
//         name: document.querySelector('#name').value,
//         email: document.querySelector('#email').value,
//         phone: document.querySelector('#phone').value,
//         message: document.querySelector('#message').value
//     };



//     console.log(formData); // Log the form data to the console
// }


// const element = document.querySelector('#dropdown');
// const hero = document.querySelector('#heroName');
// hero.textContent = element.firstChild.value

// element.addEventListener('change' , (event)=>{
    
//     hero.textContent = event.target.value;
// })

// const list = document.querySelector('.list')
// list.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         console.log(`You clicked ${event.target.innerText} `);
        
//     }
// })


  



// })

// function elementCreator() {
//     const list = document.querySelector('.list')
//    const newElement =  document.createElement('li')
//    newElement.textContent = "I am added by button"
//    list.appendChild(newElement)
// }

// let myPromise = new Promise (function (resolve, reject){
//     setInterval(()=>{
//         // console.log(`Async task is rendered`);
//         resolve()
//     }, 2000)
// })

// myPromise.then(function (){
//     // console.log(`Promise consumed`);
    
// })

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         // console.log(`Set timeout is over`);
//         resolve()
//     }, 1000)
// }).then(function (){
//     // console.log(`Promise consumed`);
    
// })

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log();
//        resolve({username: "Umair", email: "umair@gmail.com"}) 
//     }, 1000)
// }).then(function(user){
//     // console.log(user);
    
// })


// let promiseFour = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error = false
//         if(! error){
//             resolve({userName: "Umair"})
//         } else {
//             reject('ERROR!! SOMETHING WENT WRONG')
//         }
//     }, 2000)
// }).then((user)=>{
//     // console.log(user);
//     return user.userName;
// }).then((name)=>{
//     console.log(name);
    
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log(`Promise run successfully`);
// })


// let promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(! error){
//             resolve({userName: "Javascript is loaded"})
//         } else {
//             reject('LOADING ERROR!! SOMETHING WENT WRONG')
//         }
//     }, 1000)
// })


// Promise.all([promiseFour, promiseFive]).then((values)=>{
//     console.log(values);
    
// })
// Promise.race([promiseFour, promiseFive]).then((values)=>{
//     console.log(values);
    
// })



// async function consumingPromiseFive (){
    
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// consumingPromiseFive()

//  async function getMydata(){
//   const response =  await fetch('https://api.github.com/users/Umair452')
//   const data = await response.json()
//   console.log(data);
  
//  }

//  getMydata()


// fetch('https://api.github.com/users/Umar452').then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })



// function numberDivider () {
//     let numerator = 4;
//     let denominator = 0;
//     return new Promise ((resolve,  reject)=>{
//         setTimeout(()=>{
//                 try {

//                     if (denominator === 0) {
//                         throw new Error("Division by zero is not allowed");

                        
//                     }

//                     let result = numerator / denominator;
//                     console.log(`No error occured`);
//                     resolve(result)
//                 } catch (error) {
//                     reject(error)
//                 }
//         }, 2000)
//     })
// }

// numberDivider()
function divideNumbers() {
    return new Promise((resolve, reject) => {
      let numerator = 2;
      let denominator = 2;
  
      setTimeout(() => {
        try {
          if (denominator === 0) {
            throw new Error("Division by zero is not allowed");
          }
  
          let result = numerator / denominator;
          resolve(result); // This line will only run if no error is thrown
          console.log(`No error occurred, result is: ${result}`);
        } catch (error) {
          reject(error); // This line will run if an error is thrown
        }
      }, 2000);
    });
  }
  
  // Using the function
  divideNumbers()
    .then(result => {
      console.log(`Result: ${result}`);
    })
    .catch(error => {
      console.log(`Error occurred: ${error.message}`);
    }).finally(()=>{
        console.log(`The promise has been executed`);
        
    })
  