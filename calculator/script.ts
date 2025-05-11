function calculate(): void {
  const input1 = document.getElementById("num1") as HTMLInputElement;
  const input2 = document.getElementById("num2") as HTMLInputElement;
  const operator = (document.getElementById("operator") as HTMLSelectElement).value;
  const result = document.getElementById("result") as HTMLParagraphElement;

  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter valid numbers.";
      return;
  }

  let calculation: number;

  if (operator === "+") {
      calculation = num1 + num2;
  } else if (operator === "-") {
      calculation = num1 - num2;
  } else if (operator === "*") {
      calculation = num1 * num2;
  } else if (operator === "/") {
      if (num2 === 0) {
          result.textContent = "Cannot divide by zero.";
          return;
      }
      calculation = num1 / num2;
  } else {
      result.textContent = "Invalid operator.";
      return;
  }

  result.textContent = `Result: ${calculation}`;
}
