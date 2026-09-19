// Grab the screen and all buttons
const screen = document.querySelector(".screen input");
const buttons = document.querySelectorAll(".button"); // note: this does NOT include the "=" button, since it has class="equal"

let expression = ""; // our "memory"

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.textContent; // e.g. "1" then "2" then "+" ...
    screen.value = expression;
  });
});