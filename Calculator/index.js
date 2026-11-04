const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    const operators = ["+", "-", "*", "/"];
    const lastChar = display.value.slice(-1);

    // Clear
    if (value === "C") {
      display.value = "";
      return;
    }

    // Backspace
    if (value === "←") {
      display.value = display.value.slice(0, -1);
      return;
    }

    // Equals
    if (value === "=") {
      if (display.value === "" || operators.includes(lastChar)) {
        return;
      }

      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }

      return;
    }

    // Bawal mauna ang operator o point
    if (display.value === "" && (operators.includes(value) || value === ".")) {
      return;
    }

    // Bawal operator kasunod ng operator
    if (operators.includes(lastChar) && operators.includes(value)) {
      return;
    }

    // Bawal magkasunod na .
    if (lastChar === "." && value === ".") {
      return;
    }

    display.value += value;
  });
});
