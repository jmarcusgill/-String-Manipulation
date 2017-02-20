//Grabbing and Declaring Variable from HTML
var userInput = document.getElementById("user-input");
var submitButton = document.getElementById("submit-button");
var clearButton = document.getElementById("clear-button");
var outputDiv = document.getElementById("output");

//Setting placeholder variable to be used in outputResults() function
var testString = "";

//Adding Event Listeners to Buttons and Enter Key
submitButton.addEventListener("click", checkIfNumber);
clearButton.addEventListener("click", clearOutput);
window.addEventListener("keypress", checkEnter);

//Function for the keypress, references the output function
function checkEnter (e) {
  if (e.keyCode === 13) {
    checkIfNumber();
  }
};

//Checks to see if userInput is only letters, not numbers
function checkIfNumber() {
  if (isNaN(userInput.value)) {
    outputResults();
  } else {
    alert("Enter only letters please")
  }
}

//Clears the DOM and input field
function clearOutput(string) {
  outputDiv.innerHTML = "";
  userInput.value = "";
};

//Reverses the userInput
function reversal(string) {
  return string.split("").reverse().join("");
};

//Sorts the userInout
function alphabits(string) {
  return string.split("").sort().join("");
};

//Checks to see if userInput is a palindrome
function palindrome(string) {
  var stringReversed = string.split("").reverse().join("");
  if (stringReversed === string) {
   return "Your word is a palindrome"
  } else {
    return "Your word is NOT a palindrome"
  }
};

//Outputs all three functions to DOM and sets testString to userInput value
function outputResults() {
  testString = userInput.value;
  outputDiv.innerHTML += "<div>" + "Your word reversed: " + reversal(testString) + "</div>";
  outputDiv.innerHTML += "<div>" + "Your word sorted: " + alphabits(testString) + "</div>";
  outputDiv.innerHTML += "<div>" + palindrome(testString) + "</div>";
};
