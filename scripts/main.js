/* document.querySelector('img').onclick() = function() {

} */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/bookshelf.jpg') {
        myImage.setAttribute('src', 'images/book-stacked.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/bookshelf.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        //myHeading.textContent = 'Meet your next favourite read, ' + myName;
        myHeading.innerHTML = 'Meet your next favourite read, ' + myName;
    }
}

//initialization code
if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Meet your next favourite read, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}