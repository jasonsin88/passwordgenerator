// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var length = prompt("Plese enter number of characters desired for your password. The password must be between 8 to 128 characters.");
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    length = prompt("Plese enter number of characters desired for your password. The password must be between 8 to 128 characters.");  
  } else {
  var special = confirm("Would you like the password to include special characters?");
  var num = confirm("Would you like the password to include numbers?");
  var upper = confirm("Would you like the password to include uppercase letters?");
  var lower = confirm("Would you like the password to include lowercase letter?");
  };

  if (!special && !num && !upper && !lower) {
    alert("You must select at least one parameter.");
    var special = confirm("Would you like the password to include special characters?");
    var num = confirm("Would you like the password to include numbers?");
    var upper = confirm("Would you like the password to include uppercase letters?");
    var lower = confirm("Would you like the password to include lowercase letter?");
  };

  var passwordChar = []; 
  if (special) {
  passwordChar = passwordChar.concat(specialChar)
  };
  if (num) {
  passwordChar = passwordChar.concat(number)
  };
  if (lower) {
  passwordChar = passwordChar.concat(lowerAlph)
  };
  if (upper) {
  passwordChar = passwordChar.concat(upperAlph)
  };

  var passwordRandom = "";
  for (var i = 0; i < length; i++) {
    passwordRandom = passwordRandom + passwordChar[Math.floor(Math.random() * length)];

    return passwordRandom;
  }
};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);