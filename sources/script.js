$(document).ready(() => {
  var tokens = [];
  const currStyle = document.getElementById("current-style")
  const styleSelect = document.querySelector('[pick-style]')

  styleSelect.addEventListener('change', select => {
    if (styleSelect.value == 'normal') {
      currStyle.href = "style_base.css"
    }

    if (styleSelect.value == 'dark') {
      currStyle.href = "style_dark.css"
    }
  });

  $(".button").click(function (event) {
    processButtonPress(event.target);
  });

  function processButtonPress(button) {
    var value = $(button).val();
    if (!isNaN(value)) {
      const prevToken = tokens[tokens.length - 1];
      if (!isNaN(prevToken)) {
        tokens[tokens.length - 1] = prevToken + value;
      } else {
        tokens.push(value);
      }
    } else if (value === "clear") {
      tokens = [];
    } else if (value === "delete") {
      const prevToken = tokens[tokens.length - 1];
      if (!isNaN(prevToken)) {
        if (prevToken.length === 0) {
          tokens.pop();
        } else {
          tokens[tokens.length - 1] = prevToken.slice(0, -1);
        }
      } else {
        tokens.pop();
      }
    }
    else {
      tokens.push(value);
    }

    displayExpression();
  }

  function displayExpression() {
    var outputString = "";
    tokens.forEach(element => {
      outputString += element;
    });
    $("#output").html(outputString);
  }
});