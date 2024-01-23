// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of characters to include in the password
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()-=_+[]{}|;:'\",.<>/?";

// Function to generate a random password
function generatePassword() {
  var minPasswordLength = 8;
  var maxPasswordLength = 128;
  var userLengthPassword = parseInt(window.prompt("what length would you like your password to be?"))
  var allCharacters = ""
  
  if (userLengthPassword > minPasswordLength && userLengthPassword < maxPasswordLength){

  var uppercaseCharactersConfirm = window.confirm ("would you like upper case characters")
  var lowercaseLettersConfirm = window.confirm ("would you like lower case characters")
  var numbersConfirm = window.confirm ("would you like numbers")
  var specialCharactersConfirm = window.confirm ("would you like special characters")
  console.log(uppercaseCharactersConfirm);
  console.log(lowercaseLettersConfirm);
  console.log(numbersConfirm);
  console.log(specialCharactersConfirm);
  if (uppercaseCharactersConfirm == true){
    allCharacters += uppercaseLetters
  }
  if (lowercaseLettersConfirm == true){
    allCharacters += lowercaseLetters
  }
  if (numbersConfirm == true){
    allCharacters += numbers
  }
  if (specialCharactersConfirm == true){
    allCharacters += specialCharacters
  }




  // Generate a random password length within the specified range
  var passwordLength = Math.floor(Math.random() * (maxPasswordLength - minPasswordLength + 1)) + minPasswordLength;

  var password = "";
  for (var i = 0; i < userLengthPassword; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}
}


generateBtn.addEventListener("click", writePassword);