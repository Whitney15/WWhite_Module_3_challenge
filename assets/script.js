// Assignment code here (DONE)
document.querySelector("#generate").addEventListener("click", writePassword)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialcharacter = ["!", "@", "$","*", "_", "."];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var caselower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caseupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//global Variables
var confirmPasswordLength = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumericCharcter;
var confirmSpecialCharacter;


//first prompt (length)
function generatePassword() {
  var confirmPasswordLength = (prompt("How many characters would you like your password to have?"));

  while(confirmPasswordLength < 8 || confirmPasswordLength > 129) {
    alert("Password length must be at least 8 characters. Try again Please");
    return "";
  }

  //Prompt the User for character types to include

  var confirmLowercase = confirm("Would you like to include Lowercase characters?");
  var confirmUppercase = confirm ("Would you like to include Uppercase characters?");
  var confirmNumericCharcter = confirm("Would you like to include Numeric characters?");
  var confirmSpecialCharacter = confirm("Would you like to include Speical characters?");

  if (confirmLowercase === "" && confirmUppercase === "" && confirmNumericCharcter ==="" && confirmSpecialCharacter ==="") {
    alert ("You must select at least ONE character type to include in your password");
    return;
  }

  var passwordString = []

  if (confirmLowercase) {
    passwordString = passwordString.concat(caselower);
  }

  if (confirmUppercase) {
    passwordString = passwordString.concat(caseupper);
  }

  if (confirmNumericCharcter) {
    passwordString = passwordString.concat(number);
  }
  
  if (confirmSpecialCharacter) {
    passwordString = passwordString.concat (specialcharacter);
  }


  var randomP = "";

  for(var i = 0; i <confirmPasswordLength; i++) {
    randomP = randomP + passwordString [Math.floor(Math.random() * passwordString.length)];
    console.log(randomP)
  }

  return randomP;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
