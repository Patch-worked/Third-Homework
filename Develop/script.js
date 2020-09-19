// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt('how long would you like your password to be?' + "");
if (8 > passwordLength || passwordLength > 128){
  passwordLength = prompt('please enter a different number');
    if(8 > passwordLength || passwordLength > 128){
      prompt('default length is 12')
      passwordLength = 12;
    }
}
console.log(parseInt(passwordLength));

// have to write an if statement for how many times to pick a random character
// generator functions

//function to pick a random function
var functionsNeeded = [getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol];
var n = functionsNeeded.length;
function randomFunction(n){
  return Math.floor( Math.random() * n);
}


//generates a random lower case from character code
function getRandomLower(){
return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}
console.log(getRandomLower());

//generates random upper case from character code
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}
console.log(getRandomUpper());

//generates random number from character code
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}
console.log(getRandomNumber());

function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

