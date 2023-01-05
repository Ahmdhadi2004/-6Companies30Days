/* You are given an array of strings tokens that represents an arithmetic expression in a */
function evaluateReversePolishNotation(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (token === '+') {
        var a = stack.pop();
        var b = stack.pop();
        stack.push(a + b);
      } else if (token === '-') {
        var a = stack.pop();
        var b = stack.pop();
        stack.push(a - b);
      } else if (token === '*') {
        var a = stack.pop();
        var b = stack.pop();
        stack.push(a * b);
      } else if (token === '/') {
        var a = stack.pop();
        var b = stack.pop();
        stack.push(a / b);
      } else {
        stack.push(parseInt(token));
      }
    }
    return stack.pop();
  }
  /* Reverse Polish Notation */
  var tokens = ["2", "1", "+", "3", "*"];
  var result = evaluateReversePolishNotation(tokens);
  console.log(result);