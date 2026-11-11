let screen = document.getElementById("screen");
let currentInput = "0";

function updateScreen() {
  screen.innerText = currentInput;
}

function appendValue(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateScreen();
}

function clearScreen() {
  currentInput = "0";
  updateScreen();
}

function deleteChar() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  updateScreen();
}

function calculate() {
  try {
    // Eval güvenli hesaplama için basitçe kullanılıyor
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = "Hata";
  }
  updateScreen();
}
