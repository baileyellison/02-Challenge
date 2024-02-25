// Assignment Code
var generateBtn = document.querySelector("#generate");

  const types = { 
    lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numberCharacters = "0123456789";
    symbolCharacters = " !@#$%&*'()+-,./:;<>=?{}[]~_`|";
  }

  const getTypes = {
    function lowercaseCharacters() {
      return types.lowercaseCharacters[Math.floor(Math.random() * types.lowercaseCharacters.length)];
    }
  }

  const getTypes = {
    function uppercaseCharacters() {
      return types.uppercaseCharacters[Math.floor(Math.random() * types.uppercaseCharacters.length)];
    }
  }

  const getTypes = {
    function numberCharacters() {
      return types.numberCharacters[Math.floor(Math.random() * types.numberCharacters.length)];
    }
  }

  const getTypes = {
    function symbolCharacters() {
      return types.symbolCharacters[Math.floor(Math.random() * types.symbolCharacters.length)];
    }
  }

  // Write password to the #password input
function writePassword() {
  let uppercase = document.getElementById("Uppercase").checked;
  let lowercase = document.getElementById("lowercase").checked;
  let numbers= document.getElementById("numbers").checked;
  let symbols = document.getElementById("symbols").checked;

  if(numbers + symbols + lowercase + uppercase === 0) {
    window.alert("No characters have been chosen to generate your password. Please check at least one box")
  }

  let passwordText = document.getElementById("password");
  let length = document.getElementById("length");
  let password = "";

  if(length <= 7 + length >= 129) {
    window.alert("Password length must be between 8 and 128 characters.")
  }

  let includedCharacters = getType[Math.floor(Math.random() * getType.length)];
  let checkedCharacters = document.getElementById(includedCharacters.name).checked;

  if(checkedCharacters) {
    password += includedCharacters();
  }
  document.writePassword
}


// Arguments to pass
const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeSymbols = true;
const includeNumbers = true;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
