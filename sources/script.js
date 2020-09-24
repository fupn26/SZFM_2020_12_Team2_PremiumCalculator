var tokens = [];
const currStyle = document.getElementById("current-style");
const styleSelect = document.querySelector('[pick-style]');
const equalsButton = document.querySelector('[equals]');
const clearButton = document.querySelector('[clear]');
const deleteButton = document.querySelector('[delete]');
const inputNumberButtons = document.querySelectorAll('[input-number]');
const inputOperationButtons = document.querySelectorAll('[input-operation]');
const inputConstant = document.querySelector('[input-constant]');

var isResultShown = false;

var operators = [
    {
        id: "^",
        numOperands: 2,
        symbol: " ^ ",
        calc: function(a, b) {
            return Math.pow(a, b);
        }
    },
    {
        id: "+/-",
        numOperands: 1,
        symbol: " -",
        calc: function(a) {
            return -a;
        }
    },
    {
        id: "sqrt",
        numOperands: 1,
        symbol: " √",
        calc: function(a) {
            return Math.sqrt(a);
        }
    },
    {
        id: "log",
        numOperands: 1,
        symbol: " log ",
        calc: function(a) {
            return Math.log10(a);
        }
    },
    {
        id: "sin",
        numOperands: 1,
        symbol: " sin ",
        calc: function(a) {
            return Math.sin(a);
        }
    },
    {
        id: "cos",
        numOperands: 1,
        symbol: " cos ",
        calc: function(a) {
            return Math.cos(a);
        }
    },
    {
        id: "tan",
        numOperands: 1,
        symbol: " tan ",
        calc: function(a) {
            return Math.tan(a);
        }
    },
    {
        id: "abs",
        numOperands: 1,
        symbol: " abs ",
        calc: function(a) {
            return Math.abs(a);
        }
    },
    {
        id: "op-nth-root",
        numOperands: 2,
        symbol: "*√",
        calc: function(a, b) {
            return Math.pow(b, 1/a);
        }
    },
    {
        id: "*",
        numOperands: 2,
        symbol: " x ",
        calc: function(a, b) {
            return a * b;
        }
    },
    {
        id: "/",
        numOperands: 2,
        symbol: " ÷ ",
        calc: function(a, b) {
            return a / b;
        }
    },
    {
        id: "+",
        numOperands: 2,
        symbol: " + ",
        calc: function(a, b) {
            return a + b;
        }
    },
    {
        id: "-",
        numOperands: 2,
        symbol: " - ",
        calc: function(a, b) {
            return a - b;
        }
    }
];

function getOperator(opID) {

    for(var i = 0; i < operators.length; i++) {
        if(operators[i].id === opID) {
            return operators[i];
        }
    }
    return undefined;
}

function getPrecedence(opID) {

    for(var i = 0; i < operators.length; i++) {
        if(operators[i].id === opID) {
            return i;
        }
    }
    return 150;
}

function hasPrecedence(op1, op2) {

    if(getOperator(op1) != undefined) {
        return getPrecedence(op1) >= getPrecedence(op2);
    }
}

function calculate() {

    var bracketCount = 0;
    for(var i = 0; i < tokens.length; i++) {
        if(tokens[i] === "(") {
            bracketCount++;
        } else if(tokens[i] === ")") {
            bracketCount--;
        }
    }
    if(bracketCount != 0) {
        displayText("Error: unbalanced brackets");
        return;
    }

    var valStack = [];
    var opStack = [];

    for(var i = 0; i < tokens.length; i++) {
        if(!isNaN(tokens[i])) {
            valStack.push(tokens[i]);
        } else if(tokens[i] === "pi") {
            valStack.push(Math.PI);
        } else if(tokens[i] === "(") {
            opStack.push(tokens[i]);
        } else if(tokens[i] === ")") {
            while(opStack[opStack.length - 1] !== "(") {
                var operator = getOperator(opStack.pop());
                if(operator.numOperands === 1)
                    valStack.push(applyOperator(operator, [valStack.pop()]));
                else
                    valStack.push(applyOperator(operator, [valStack.pop(), valStack.pop()]));
            }
            opStack.pop();
        } else {
            while(opStack.length > 0 && hasPrecedence(tokens[i],opStack[opStack.length - 1])) {
                var operator = getOperator(opStack.pop());
                if(operator.numOperands === 1)
                    valStack.push(applyOperator(operator, [valStack.pop()]));
                else
                    valStack.push(applyOperator(operator, [valStack.pop(), valStack.pop()]));
            }
            opStack.push(tokens[i]);
        }
    }

    while(opStack.length > 0) {
        var operator = getOperator(opStack.pop());
        if(operator.numOperands === 1)
            valStack.push(applyOperator(operator, [valStack.pop()]));
        else
            valStack.push(applyOperator(operator, [valStack.pop(), valStack.pop()]));
    }

    tokens=[valStack[0]];
    displayExpression();
    isResultShown = true;


}

function applyOperator(operator, vals) {
    var valA = vals[0];
    var result;

    if(vals.length === 1) {
        result = operator.calc(parseFloat(valA));
    } else {
        var valB = vals[1];
        result = operator.calc(parseFloat(valB), parseFloat(valA));
    }

    return result;
}

equalsButton.addEventListener('click', () => {
    displayExpression();
    calculate();
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

    if (isResultShown === true){
        tokens = [];
    }

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
        if (!isNaN(prevToken) && !prevToken.includes(".")) {
            tokens[tokens.length - 1] = prevToken + ".";
        } else if (isNaN(prevToken) || tokens.length == 0){
            tokens.push("0.");
        }
    } else if (value == "+/-") {
        tokens.push("+/-");
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

function displayText(result) {
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
        else if (element === "+/-"){
            outputString += "-"
        }
        else if(!isNaN(element)){
            outputString += formatNum(element) + " ";
        }
        else{
            outputString += element + " ";
        }
    });

    isResultShown = false;
    displayText(outputString);
}
