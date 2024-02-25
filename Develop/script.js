// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers) {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharacters = "0123456789"
  const symbolCharacters = " !@#$%&*'()+-,./:;<>=?{}[]~_`|"

  // if(length > 8)

  return '';
}

// Arguments to pass
const passwordLength = 16;
const includeLowercase = true;
const includeUppercase = true;
const includeSymbols = true;
const includeNumbers = true;

// Calling the function
const generatePassword = writePassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers);

document.write(generatePassword)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
