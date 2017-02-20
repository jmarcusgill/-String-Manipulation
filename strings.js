var userInput = document.getElementById("user-input");
var submitButton = document.getElementById("submit-button")
var outputDiv = document.getElementById("output")
var testString = "";

submitButton.addEventListener("click", outputResults)





function reversal(string) {
  return string.split("").reverse().join("");

}

function alphabits(string) {
  return string.split("").sort().join("");
}

function palindrome(string) {
  var stringReversed = string.split("").reverse().join("");
  if (stringReversed === string) {
   return "Your word is a palindrome"
  } else {
    return "Your word is NOT a palindrome"
  }
}

function outputResults() {
  testString = userInput.value;
  outputDiv.innerHTML += "<div>" + "Your word reversed: " + reversal(testString) + "</div>";
  outputDiv.innerHTML += "<div>" + "Your word sorted: " + alphabits(testString) + "</div>";
  outputDiv.innerHTML += "<div>" + palindrome(testString) + "</div>";
};

