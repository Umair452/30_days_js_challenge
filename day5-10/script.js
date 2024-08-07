

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