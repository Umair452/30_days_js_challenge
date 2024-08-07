

window.onload = () => {
    myFunction();
}

function myFunction() {
    setTimeout(() => {
        let heading = document.querySelector('#heading');
        let container = document.querySelector('.container')
        let newElement = document.createElement('div')
        let containerTwo = document.querySelector('.containerTwo')
        heading.textContent = 'My Inner Text Has Been Changed';
        container.style.backgroundColor = 'green'
        
        newElement.textContent = 'I am the appended div'
        container.appendChild(newElement)

        // container.removeChild(heading)

        containerTwo.removeChild(containerTwo.lastChild)
        attributeChanger();
    }, 2000);
   
}

function attributeChanger() {
    const image = document.querySelector('#image')
    image.setAttribute('alt', 'changed')
    image.classList.add('myImage')
}

function paragraphChanger(){
    const paragraph = document.querySelector('#paragraph')
    paragraph.textContent = "Congratulations!!"
    
}

function borderChanger(){
    const btn = document.querySelector('#btn')
    if (btn.style.borderColor == '') {
        btn.style.borderColor = 'red'
    } else {
        btn.style.borderColor = ''
    }
    
}

function visibiltyChanger () {
    const image = document.querySelector('#image')
    if (image.style.opacity == 0) {
        image.style.opacity = 1
    } else {
        image.style.opacity = 0
    }
}

function pressedKey() {
    const input = document.querySelector('#input').value
    console.log(`You pressed ${input} key`);
    
}

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#form').addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    const formData = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        message: document.querySelector('#message').value
    };



    console.log(formData); // Log the form data to the console
}


const element = document.querySelector('#dropdown');
const hero = document.querySelector('#heroName');
hero.textContent = element.firstChild.value

element.addEventListener('change' , (event)=>{
    
    hero.textContent = event.target.value;
})

const list = document.querySelector('.list')
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`You clicked ${event.target.innerText} `);
        
    }
})


  



})

function elementCreator() {
    const list = document.querySelector('.list')
   const newElement =  document.createElement('li')
   newElement.textContent = "I am added by button"
   list.appendChild(newElement)
}