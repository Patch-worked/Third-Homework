// Assignment Code
var generateBtn = document.querySelector("#generate");
var securePassword = document.querySelector('#placeholder');

var includeUppercase = confirm ("Would you like to include Uppercase Letters?")
var includeLowercase = confirm ("Would you like to include Lowercase Letters?")
var includeNumbers = confirm ("Would you like to include Numbers?")
var includeSpecialCharacters = confirm ("Would you like to include Special Characters?")
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

function generateAllupper() { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateUpperLower() { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          'abcdefghijklmnopqrstuvwxyz'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateUpperNumber() { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          '0123456789'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateUpperSpecial() { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          '@#$'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateUpperLowerNumber() { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          'abcdefghijklmnopqrstuvwxyz0123456789'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateUpperLowerSpecial() { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          'abcdefghijklmnopqrstuvwxyz@#$'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateLowerNumberSpecial() { 
  var pass = ''; 
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateLowerNumber() { 
  var pass = ''; 
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateLowerSpecial() { 
  var pass = ''; 
  var str = 'abcdefghijklmnopqrstuvwxyz@#$'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateLower() { 
  var pass = ''; 
  var str ='abcdefghijklmnopqrstuvwxyz'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateNumber() { 
  var pass = ''; 
  var str = '0123456789'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateNumberSpecial() { 
  var pass = ''; 
  var str = '0123456789@#$'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function generateSpecial() { 
  var pass = ''; 
  var str = '@#$'; 
    
  for (i = 1; i <= passwordLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
      
  } 
  alert("your password is " + pass);
  return pass;
} 

function switcher(){
    if (includeUppercase == true && includeLowercase == true && includeNumbers == true && includeSpecialCharacters == true ){
        generateP();
    }
    if (includeUppercase == true && includeLowercase == true && includeNumbers == false && includeSpecialCharacters == false ){
        generateUpperLower();
    }
    if (includeUppercase == true && includeLowercase == false && includeNumbers == false && includeSpecialCharacters == false ){
        generateAllupper();
    }
    if (includeUppercase == true && includeLowercase == false && includeNumbers == true && includeSpecialCharacters == false ){
        generateUpperNumber();
    }
    if (includeUppercase == true && includeLowercase == false && includeNumbers == false && includeSpecialCharacters == true ){
        generateUpperSpecial();
    }
    if (includeUppercase == true && includeLowercase == true && includeNumbers == true && includeSpecialCharacters == false ){
        generateUpperLowerNumber();
    }
    if (includeUppercase == true && includeLowercase == true && includeNumbers == false && includeSpecialCharacters == true ){
        generateUpperLowerSpecial();
    }
    if (includeUppercase == false && includeLowercase == true && includeNumbers == false && includeSpecialCharacters == false ){
        generateLower();
    }
    if (includeUppercase == false && includeLowercase == true && includeNumbers == true && includeSpecialCharacters == false ){
        generateLowerNumber();
    }
    if (includeUppercase == false && includeLowercase == true && includeNumbers == false && includeSpecialCharacters == true ){
        generateLowerSpecial();
    }
    if (includeUppercase == false && includeLowercase == true && includeNumbers == true && includeSpecialCharacters == true ){
        generateLowerNumberSpecial();
    }
    if (includeUppercase == false && includeLowercase == false && includeNumbers == true && includeSpecialCharacters == false ){
        generateNumber();
    }
    if (includeUppercase == false && includeLowercase == false && includeNumbers == true && includeSpecialCharacters == true ){
        generateNumberSpecial();
    }
    if (includeUppercase == false && includeLowercase == false && includeNumbers == false && includeSpecialCharacters == true ){
        generateSpecial();
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", switcher);

