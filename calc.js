let Button0 = document.getElementById("0");
let Button1 = document.getElementById("1");
let Button2 = document.getElementById("2");
let Button3 = document.getElementById("3");
let Button4 = document.getElementById("4");
let Button5 = document.getElementById("5");
let Button6 = document.getElementById("6");
let Button7 = document.getElementById("7");
let Button8 = document.getElementById("8");
let Button9 = document.getElementById("9");
let calcDisplay = document.querySelector(".calc-display");
let userInputSpan = document.getElementById("userInputSpan");

// Button0.addEventListener("click", () => {
//   let num = document.createElement("span");
//   num.textContent = 0;
//   let cursor = calcDisplay.firstChild;
//   calcDisplay.insertBefore(num, cursor);
//   console.log(Button0);
// });

//  if (digitPattern.test(userInput)) {
let expression = "";
const validMathInput = ["+", "-", "x", "/"];

function getInput(e) {
  let userInput = e.target.innerText;
  console.log(userInput);

  if (userInput == "AC") {
    expression = "";
    userInputSpan.innerHTML = "";
  } else if (userInput == "*") {
    console.log(expression);
    expression = expression.slice(0, -1);
    userInputSpan.innerHTML = expression;
  } else if (userInput == "=") {
    getResult(expression);
  } else {
    expression += userInput;
    userInputSpan.innerHTML = expression;
  }
}

const getResult = (input) => {
  console.log(`All user input ${input}`);
  if (input.includes("+")) {
    console.log("Contains +");
    let newExp = input.split("+");
    console.log(newExp);
    for (let i = 1; i < newExp.length; i++) {
      let totalSum = Number(newExp[0]);
      console.log("This is my totalSum " + totalSum);
    }
  }
};
