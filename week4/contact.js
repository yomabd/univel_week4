//This is a javascript code for the contact html


//1. Use a regexp for the email address validation
// sample of an email address: username@domain.com
//Username:   [lowercase & uppercase letters, numbers, dot, underscore
//              a percent AbortSignal, plus sign or hyphen]
//Domain:     [Letters, numbers, period & hyphen]
//Dot-Com:    [2 - 4 charaters]

//Define a regex to match an email address

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
// var String = " abdolyom.yi@gmail.com \n"
// var match = String.trim().match(emailRegex)
// console.log(match)

var button = document.getElementById("submit");
var email = document.getElementById('emailaddress');

button.addEventListener('click',validateEmail);

function validateEmail(){
    //remove any white space at start or end of the input
    let inputEmail = email.value.trim();
    console.log(inputEmail)
    const match =  inputEmail.match(emailRegex)
    //create an alert for an invalid email address
    if (!match){
        alert("invalid email entered")
    }
    email.value = "";
}

