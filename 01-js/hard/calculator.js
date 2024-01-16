/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by zero');
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = this.tokenize(expression);
    const values = [];
    const operators = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    tokens.forEach((token) => {
      if (this.isNumber(token)) {
        values.push(parseFloat(token));
      } else if (token in precedence) {
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          this.applyOperator(operators, values);
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators[operators.length - 1] !== '(') {
          this.applyOperator(operators, values);
        }
        operators.pop();
      }
    });

    while (operators.length > 0) {
      this.applyOperator(operators, values);
    }

    this.result = values.pop();
  }

  tokenize(expression) {
    const tokens = expression.match(/[+\-*/()]|\d*\.?\d+|\w+/g) || [];
    tokens.forEach((token) => {
      if (
        !this.isNumber(token) &&
        !['+', '-', '*', '/', '(', ')'].includes(token)
      ) {
        throw new Error('Invalid character in expression');
      }
    });
    return tokens;
  }

  applyOperator(operators, values) {
    const operator = operators.pop();
    const b = values.pop();
    const a = values.pop();
    switch (operator) {
      case '+':
        values.push(a + b);
        break;
      case '-':
        values.push(a - b);
        break;
      case '*':
        values.push(a * b);
        break;
      case '/':
        if (b === 0) throw new Error('Division by zero');
        values.push(a / b);
        break;
      default:
        throw new Error('Invalid operator');
    }
  }

  isNumber(token) {
    return !isNaN(token) && isFinite(token);
  }
}

module.exports = Calculator;
