function calculateSalary(): void {
  const nameInput = document.getElementById("empName") as HTMLInputElement;
  const salaryInput = document.getElementById("baseSalary") as HTMLInputElement;
  const ratingSelect = document.getElementById("rating") as HTMLSelectElement;
  const output = document.getElementById("output") as HTMLParagraphElement;

  const name: string = nameInput.value;
  const baseSalary: number = parseFloat(salaryInput.value);
  const rating: number = parseInt(ratingSelect.value);

  if (!name || isNaN(baseSalary) || (rating !== 5 && rating !== 10)) {
    output.textContent = "Please enter all fields correctly.";
    return;
  }

  let bonusPercent: number;
  if (rating === 10) {
    bonusPercent = 0.2;
  } else {
    bonusPercent = 0.1;
  }

  const finalSalary: number = baseSalary + (baseSalary * bonusPercent);

  output.textContent = `${name}'s final salary is $${finalSalary.toFixed(2)}`;
}
