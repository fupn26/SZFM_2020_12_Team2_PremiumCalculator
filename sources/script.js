var tokens = [];
const currStyle = document.getElementById("current-style");
const styleSelect = document.querySelector('[pick-style]');
const equalsButton = document.querySelector('[equals]');
const clearButton = document.querySelector('[clear]');
const deleteButton = document.querySelector('[delete]');
const inputNumberButtons = document.querySelectorAll('[input-number]');
const inputOperationButtons = document.querySelectorAll('[input-operation]');
const inputConstant = document.querySelector('[input-constant]');

equalsButton.addEventListener('click', () => {
  calculate();
  displayExpression();
});

clearButton.addEventListener('click', () => {
  tokens = [];
  displayExpression();
});

deleteButton.addEventListener('click', () => {
  const prevToken = tokens[tokens.length - 1];
  if (!isNaN(prevToken)) {
    tokens[tokens.length - 1] = prevToken.slice(0, -1);
    if (tokens[tokens.length - 1].length === 0) {
      tokens.pop();
    }
  } else {
    tokens.pop();
  }

  displayExpression();
});

inputNumberButtons.forEach(element => element.addEventListener('click', () => {
  console.log(element.value);
  const prevToken = tokens[tokens.length - 1];
  if (!isNaN(prevToken)) {
    tokens[tokens.length - 1] = prevToken + element.value;
  } else {
    tokens.push(element.value);
  }
  displayExpression();
}));

inputOperationButtons.forEach(element => element.addEventListener('click', () => {
  const value = element.value;
  if (value === "sin" || value === "cos" || value == "tan" || 
            value === "abs" || value === "log" || value === "sqrt") {
    tokens.push(value);
    tokens.push("(");
  } else if (value == "1/x") {
    tokens.push("1");
    tokens.push("/");
  } else if (value === "point") { //TODO what if no number ahead of it?
    const prevToken = tokens[tokens.length - 1];
    if (!isNaN(prevToken)) {
      tokens[tokens.length - 1] = prevToken + ".";
    } else {
      tokens.push("0.");
    }
  } else if (value == "+/-") { //TODO add functionality to this operator
    const prevToken = tokens[tokens.length - 1];
    if (!isNaN(prevToken)) {

    }
  } else {
    tokens.push(value);
  }

  displayExpression();
}));

inputConstant.addEventListener('click', () => {
  tokens.push('pi');
  displayExpression();
});


styleSelect.addEventListener('change', select => {
  if (styleSelect.value == 'normal') {
    currStyle.href = "style_base.css"
  }

  if (styleSelect.value == 'dark') {
    currStyle.href = "style_dark.css"
  }
});

function calculate() {
  console.log("calculate");
}

function displayExpression() {
  console.log(tokens);
  var outputString = "";
  tokens.forEach(element => {
    if (element === "pi") {
      outputString += "&#120587;";
    } else {
      outputString += element;
    }
  });
  document.querySelector('[output-area]').innerHTML = outputString;
}