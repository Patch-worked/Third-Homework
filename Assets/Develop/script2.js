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

function generateP() { 
    var pass = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
      
    for (i = 1; i <= passwordLength; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
        
    } 
    alert("your password is " + pass);
    return pass;
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generateP);

