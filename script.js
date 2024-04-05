let secretNumber;
let attempts = 0;

function generateRandomNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    setMessage("Please enter a number between 1 and 100.");
    return;
  }

  if (guess === secretNumber) {
    setMessage(
      `Congratulations! You've guessed the correct number ${secretNumber} in ${attempts} attempts!`,
      "green"
    );
    guessInput.disabled = true;
  } else if (guess < secretNumber) {
    setMessage("Too low! Try again.", "red");
  } else {
    setMessage("Too high! Try again.", "red");
  }

  guessInput.value = "";
}

function setMessage(message, color = "black") {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.style.color = color;
}

window.onload = function () {
  generateRandomNumber();
};
