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
  } else if (value == "+/-") {
    tokens.push("-");
    tokens.push("(");
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
  else if (styleSelect.value == 'dark') {
    currStyle.href = "style_dark.css"
  }
  else if (styleSelect.value == 'colorblind'){
    currStyle.href = "style_colorblind.css"
  }
});

function formatNum(n) {
  var n = ('' + n).split('.');
  var num = n[0];
  var dec = n[1];
  var r, s, t;

  if (num.length > 3) {
    s = num.length % 3;

    if (s) {
      t = num.substring(0,s);
      num = t + num.substring(s).replace(/(\d{3})/g, ",$1");
    } else {
      num = num.substring(s).replace(/(\d{3})/g, ",$1").substring(1);
    }
  }

  return num + (dec? '.' + dec : '');
}

function calculate() {
  console.log("calculate");
}

function displayResult(result) {
  document.querySelector('[output-area]').innerHTML = result;
}

function displayExpression() {
  console.log(tokens);
  var outputString = "";
  tokens.forEach(element => {
    if (element === "pi") {
      outputString += "&#120587; ";
    } 
    else if (element === ")" && outputString.slice(-1)===" "){
      outputString = outputString.slice(0,-1) + element + " "
    }
    else if (element === "("){
      outputString += element
    }
    else if(!isNaN(element)){
      outputString += formatNum(element) + " ";
    }
    else{
      outputString += element + " ";
    }
  });
  document.querySelector('[output-area]').innerHTML = outputString;
}