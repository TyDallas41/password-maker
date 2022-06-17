// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


function generatePassword(){

// Prompt user for the password criteria
//  a.password length 0 <120
//  b. lowercase, uppercase, number, special characters 
// Validate the input
// Display password to the page
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts(){
    characterLength = parseInt(prompt("How long do you want your password to be? (8 -128 characters)"));
    //Verify input
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
        alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    }
}