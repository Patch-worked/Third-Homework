// Assignment Code
var generateBtn = document.querySelector("#generate");

// generator functions

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
