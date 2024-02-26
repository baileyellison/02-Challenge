var passwordLength = 10;

var includedCharacters = []

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolCharacters = [" ", "!", "@", "#", "$", "%", "&", "*", "'", "(", ")", "+", "-", ",", ".", "/", ":", ";", "<", ">", "=", "?", "{", "}", "[", "]", "~", "_", "`", "|"];
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generating the password after the given criteria has been met
function generatepassword() {

var password = "";
for(var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * includedCharacters.length);
      password = password + includedCharacters[randomIndex];
    }
    return password
}


// All met criteria the user has to meet before the password is displayed
function getCriteria() {
  includedCharacters = []; 
  passwordLength = parseInt(prompt("Select a password length. Passwords must be between 8 and 128 numberCharacters."));
  
  // conditions that the password has to meet
  if(passwordLength <= 7) {
    alert("Password length must be between 8 and 128 characters.");
    return false;
  }

  if(passwordLength >= 129) {
    alert("Password length must be between 8 and 128 characters.");
    return false;
  }

  if(isNaN(passwordLength)) {
    alert("Password must be defined by numbers.");
    return false;
  }

  // Criteria the user can okay before generating the password
  if(confirm("This generator uses lowercase characters. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(lowercaseCharacters);
  }

  if(confirm("This generator uses uppercase characters. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(uppercaseCharacters);
  }

  if(confirm("This generator uses numbers. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(numberCharacters);
  }

  if(confirm("This generator uses symbols. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(symbolCharacters);
  }
  return true;
}


// write password to the #password input
function writePassword() {
  var rightCriteria = getCriteria();
  var passwordText = document.querySelector("#password");

  if(rightCriteria) {
  var randomPassword = generatepassword();
  passwordText.value = randomPassword;
  } 
  

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
