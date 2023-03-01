// Assignment code here
// array & string of characters to be used for password generation
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = "!#$%&()*+\"\'\`-./:;,<=>?@[\]^_\{|}~";

var generatePassword = function() {
  //prompt for user input for password length
  var passLength = window.prompt("Choose your password length. Must be between 8 and 128 characters.");
 //function to 
  var passLengthCheck = function() {
    passLength = window.prompt("Password must be between 8 and 128 characters. Please try again.");
  }
  while(passLength < 8 || passLength > 128 ) {
    passLengthCheck();
  }
  
  //display the users desired password length
  console.log(passLength);

  //initialize character type count variable
  var typeCount = 0;
  //Ask the user if they want lowercase characters
  var confirmLow = window.confirm("Do you want to include lowercase characters?");
  if(confirmLow){
    localStorage.setItem("Lowercase", true);
    typeCount ++;
  }
  else{
    localStorage.setItem("Lowercase", false);
    console.log(localStorage.getItem("Lowercase") + ". This user does not want lowercase characters.");
  }
  

  //Ask the user if they want uppercase characters
  var confirmUp = window.confirm("Do you want to include uppercase characters?");
  if(confirmUp){
    localStorage.setItem("Uppercase", true);
    typeCount ++;
  }
  else {
    localStorage.setItem("Uppercase", false);
    console.log(localStorage.getItem("Uppercase") + ". This user does not want uppercase characters.");
  }

  //Ask the user if they want numerical characters
  var confirmNum = window.confirm("Do you want to include numerical characters?");
  if(confirmNum) {
    localStorage.setItem("Numerical", true);
    typeCount ++;
  }
  else {
    localStorage.setItem("Numerical", false);
    console.log(localStorage.getItem("Numerical") + ". This user does not want numerical characters.");
  }

  //Ask the user if they want special characters
  var confirmSpec = window.confirm("Do you want to include special characters?");
  if(confirmSpec){
    localStorage.setItem("Special-character", true);
    typeCount ++;
  }
  else {
    localStorage.setItem("Special-character", false);
  }

  //display the users desired number of different character types in password
  console.log("The character-type count is " + typeCount);

  //Password object
  var passProto = {
    lowercase : localStorage.getItem("Lowercase"),
    uppercase : localStorage.getItem("Uppercase"),
    number : localStorage.getItem("Numerical"),
    special : localStorage.getItem("Special-character"),
    chartype : typeCount

  }

  console.log(passProto);

  //initialize array
  var passLowchar = [];
  var lowerRandom = function() {
    if(localStorage.getItem("Lowercase") == "true") {
    for(i = 0; i < passLength/typeCount; i++){
    //generates random values on the array
    var passLow = Math.floor(Math.random()*(lowerCase.length));
    passLowchar += lowerCase[passLow];
    }
  }
    console.log(passLowchar);
    return passLowchar;
    
  }
  //run the lowerRandom function
  lowerRandom();

  //initialize array
  var passUpperchar = [];
  var upperRandom = function() {
    if(localStorage.getItem("Uppercase") == "true") {
    for(i = 0; i < passLength/typeCount; i++) {
    //generates random values on the array
    var passUpper = Math.floor(Math.random()*(upperCase.length));
    passUpperchar += upperCase[passUpper];
    }
  }
    console.log(passUpperchar);
    return passUpperchar;
  
}
  //run the upperRandom function
  upperRandom();

  //initialize array
  var passNumchar = [];

  var numberRandom = function() {
    if(localStorage.getItem("Numerical") == "true"){
    for(i = 0; i < passLength/typeCount; i++) {
    //generates random values on the array
    var passNum = Math.floor(Math.random()*(numbers.length));
    passNumchar += numbers[passNum];
    }
  }
    console.log(passNumchar);
    return passNumchar;
  }

  //run the numberRandom function
  numberRandom();

  var passSpecchar = [];
  var specialRandom = function() {
    //initialize array
    if(localStorage.getItem("Special-character") == "true") {
    for(i = 0; i < passLength/typeCount; i++) {
      //generate random values on the array
      var passSpec = Math.floor(Math.random()*(specialChar.length));
      passSpecchar += specialChar[passSpec];
    }
  }
    console.log(passSpecchar);
    return passSpecchar;
  }

  //run the specialRandom function
  specialRandom();
  
  var passGen = passLowchar + passUpperchar + passNumchar + passSpecchar;
  console.log(passGen);
 var passGenrandchar = [];
  var passGenword = function() {
    for(i = 0; i < passGen.length; i++) {
      var passGenrand = Math.floor(Math.random()*(passGen.length));
      passGenrandchar += passGen[passGenrand];
    }
    console.log(passGenrandchar);
    return passGenrandchar;
  }
  
  return passGenword();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
