function calculate() {
    var input1 = document.getElementById("num1");
    var input2 = document.getElementById("num2");
    var operator = document.getElementById("operator").value;
    var result = document.getElementById("result");
    var num1 = parseFloat(input1.value);
    var num2 = parseFloat(input2.value);
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }
    var calculation;
    if (operator === "+") {
        calculation = num1 + num2;
    }
    else if (operator === "-") {
        calculation = num1 - num2;
    }
    else if (operator === "*") {
        calculation = num1 * num2;
    }
    else if (operator === "/") {
        if (num2 === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        calculation = num1 / num2;
    }
    else {
        result.textContent = "Invalid operator.";
        return;
    }
    result.textContent = "Result: ".concat(calculation);
}
