// Assignment code here
var specialChar = "!#$%&'()*+,-./<=>?@[]^_`{|}~";
var number = "0123456789";
var lowerAlph = "abcdefghijklmnopqrstuvwxyz";
var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordChar = ""; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  
  var pLength = prompt("Plese enter number of characters desired for your password. The password must be between 8 to 128 characters.");
  if (pLength < 8 || pLength > 128) {
    alert("Please enter a number between 8 and 128");
    pLength = prompt("Plese enter number of characters desired for your password. The password must be between 8 to 128 characters.");  
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
  }

  else if (special && num && upper && lower) {
    passwordChar = specialChar.concat(number, lowerAlph, upperAlph);
  }

  else if (special && num && upper) {
    passwordChar = specialChar.concat(number, upperAlph);
  }

  else if (special && num && lower) {
    passwordChar = specialChar.concat(number, lowerAlph);
  }

  else if (special && upper && lower) {
    passwordChar = specialChar.concat(upperAlph, lowerAlph);
  }

  else if (num && upper && lower) {
    passwordChar = number.concat(upperAlph, lowerAlph);
  }

  else if (special && num) {
    passwordChar = specialChar.concat(number);
  }

  else if (special && upper) {
    passwordChar = specialChar.concat(upperAlph);
  }

  else if (special && lower) {
    passwordChar = specialChar.concat(lowerAlph);
  }

  else if (num && upper) {
    passwordChar = number.concat(upperAlph);
  }

  else if (num && lower) {
    passwordChar = number.concat(lowerAlph);
  }

  else if (upper && lower) {
    passwordChar = upperAlph.concat(lowerAlph);
  }

  else if (special) {
    passwordChar = specialChar;
  }

  else if (num) {
    passwordChar = number;
  }

  else if (upper) {
    passwordChar = upperAlph;
  }

  else if (lower) {
    passwordChar = lowerAlph;
  }

  var passwordRandom = "";
  for (var i = 0; i < pLength; i++) {
    passwordRandom = passwordRandom + passwordChar[Math.floor(Math.random() * pLength)];
  }
    return passwordRandom;
};

function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);