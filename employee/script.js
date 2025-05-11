function calculateSalary() {
    var nameInput = document.getElementById("empName");
    var salaryInput = document.getElementById("baseSalary");
    var ratingSelect = document.getElementById("rating");
    var output = document.getElementById("output");
    var name = nameInput.value;
    var baseSalary = parseFloat(salaryInput.value);
    var rating = parseInt(ratingSelect.value);
    if (!name || isNaN(baseSalary) || (rating !== 5 && rating !== 10)) {
        output.textContent = "Please enter all fields correctly.";
        return;
    }
    var bonusPercent;
    if (rating === 10) {
        bonusPercent = 0.2;
    }
    else {
        bonusPercent = 0.1;
    }
    var finalSalary = baseSalary + (baseSalary * bonusPercent);
    output.textContent = "".concat(name, "'s final salary is $").concat(finalSalary.toFixed(2));
}
