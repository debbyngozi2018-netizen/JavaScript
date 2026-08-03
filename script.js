// 5. Button that triggers the function when clicked
document.getElementById("sendBtn").addEventListener("click", showGreeting);

// 4. Function that displays a greeting message
function showGreeting() {

  // 1. Variable storing a user's name (taken from the form input)
  let userName = document.getElementById("fullName").value;
  let userAge = document.getElementById("age").value;
  let agreed = document.getElementById("agreeYes").checked;

  let output = document.getElementById("output");

  if (userName === "" || userAge === "") {
    output.textContent = "Please enter your name and age first.";
    return;
  }

  if (!agreed) {
    output.textContent = "You must agree that the information provided is authentic.";
    return;
  }

  // 2. Condition that checks if the user is above 18 or not
  let ageMessage = userAge > 18
    ? userName + " is above 18."
    : userName + " is not above 18.";

  // 3. Loop that counts from 1 to 5
  let countText = "Counting: ";
  for (let i = 1; i <= 5; i++) {
    countText += i + " ";
  }

  let greeting = "Hello, " + userName + "! Thanks for reaching out.\n" +
                 ageMessage + "\n" +
                 countText;

  output.textContent = greeting;
}