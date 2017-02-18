//Declaring variable from the HTML
var userInput = document.getElementById("user-input")
var submitButton = document.getElementById("submit-button")
var output = document.getElementById("output")
var testString = "";

submitButton.addEventListener("click", outputString)
window.addEventListener("keypress", checkEnter)

//Function for the keypress
function checkEnter (e) {
  if (e.keyCode === 13) {
    outputString();
  }
};






function reversal(userInput) {
  return userInput.split("").reverse().join("");
}

function alphabits(userInput) {
 return userInput.split("").sort().join("")
}

function palindrome(userInput) {

}


function outputString() {
  testString = userInput.value;
    output.innerHTML += "<div>" + "your word reversed: " + reversal(testString) + "</div>";
    output.innerHTML += "<div>" + "your word sorted: " + alphabits(testString) + "</div>";
    palindrome(testString);
}
