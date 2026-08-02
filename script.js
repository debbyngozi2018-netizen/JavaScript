let userName = "Deborah";
let userAge = 20;

let ageMessage;
if (userAge > 18) {
  ageMessage = userName + " is above 18.";
} else {
  ageMessage = userName + " is not above 18.";
}

let countText = "Counting: ";
for (let i = 1; i <= 5; i++) {
  countText += i + " ";
}

function showGreeting() {
  document.getElementById("output").textContent =
    "Hello, " + userName + "! " + ageMessage + " " + countText;
}

document.getElementById("greetBtn").addEventListener("click", showGreeting);
