// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Uppcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Numeral = ["0","1","2","3","4","5","6","7","8","9"];
var SpecChar= ["!","@","#","$","%","^","&","*","(",")","~","<",">","?","-","_","=","+"]

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  // resets password and master array every time the button is pressed
  password = ""
  var master = []


  var len = parseInt(prompt("how long do you want the password to be (8-128)?"))
  if (Number.isNaN(len)) {
  alert("Error: please enter a number")
  generatePassword() 
  } else if (len < 8) {
    len = 8
  } else if (len > 128) {
    len = 128
  }

  console.log("password length is: " + len)

  // series of prompts to gather user-specific criteria // REPLACE WITH ACTUAL FORM
  var low = confirm("confirm to allow lowercase characters")
  var up = confirm("confirm to allow uppercase characters")
  var num = confirm("confirm to allow numerals")
  var spec = confirm("confirm to allow special characters")

  if (low) {
  master = master.concat(lowcase)
  console.log("confirmed lowercase")
  }
  if (up) {
  master = master.concat(Uppcase)
  console.log("confirmed uppercase")
  }
  if (num) {
  master = master.concat(Numeral)
  console.log("confirmed numerals")
  }
  if (spec) {
  master = master.concat(SpecChar)
  console.log("confirmed special characters")
  }

  // grabs a random character from the array built of selected arrays
  // run the function a number of times = the length of the password
  for (var i = 0; i < len; i++) {
    console.log(i)
    password += master[Math.floor(Math.random() * master.length)]
  }
  return password
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
