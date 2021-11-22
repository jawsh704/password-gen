// Assignment code here

// create variables that hold characters
// create a seperate variable for aeach character type
// start asking questions to the user using prompts and confirms
// ask the user how long they want the password to be
// check that user input is between 8 and 128 using if statement
// does the user want special characters/uppercase/lowercase/numbers
// once the questions have been answered use if statements to check what they said yes to
// if the user says yes to any character add all the character types to a new variable that will hold all the poosible character types
// once we know all the characters the user wants we need to randomly select from the var charaterPool using a for loop
// Math.floor(Math.random()*x)

var abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var abcLower = 'abcdefghijklmnopqrstuvwxyz';
var numeric = '0123456789';
var special = '!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~';
var characterPool = '';

var generatePassword = function() {
  var passwordLength = window.prompt('How long would you like your pasaword to be?');
  if (passwordLength < 8 || passwordLength > 128){
    alert('Please choose a number between 8 and 128');
    return;
  }
  var uppercase = window.confirm('Would you like uppercase letters?');
  var lowercase = window.confirm('Would you like lowercase letters?');
  var specialChar = window.confirm('Would you like special characters?');
  var numbers = window.confirm("Would you like numbers?");
  if (uppercase) {
    characterPool += abcUpper
    console.log(characterPool);
  }
  if (lowercase) {
    characterPool += abcLower
    console.log(characterPool);
  }
  if (specialChar) {
    characterPool += special
    console.log(characterPool);
  }
  if (numbers) {
    characterPool += numeric
    console.log(characterPool);
  }
  if (!uppercase && !lowercase && !specialChar && !numbers) {
    alert('Please choose atleast one character type.');
    return;
  }
  var finalPassword = []
  for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random()*characterPool.length);
    finalPassword.push(characterPool.charAt(random));
    console.log(characterPool.charAt(random));
  }
  console.log(finalPassword);
  return finalPassword.join('');
  // at the end of the function we want to return the password which we can get from the array using .join method ('')
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
