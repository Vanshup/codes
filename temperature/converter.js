function convertTemp() {
    var input = document.getElementById("tempInput");
    var type = document.getElementById("conversionType").value;
    var result = document.getElementById("result");
    var temp = parseFloat(input.value);
    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number.";
        return;
    }
    if (type === "CtoF") {
        var fahrenheit = (temp * 9 / 5) + 32;
        result.textContent = "".concat(temp, "\u00B0C = ").concat(fahrenheit.toFixed(2), "\u00B0F");
    }
    else {
        var celsius = (temp - 32) * 5 / 9;
        result.textContent = "".concat(temp, "\u00B0F = ").concat(celsius.toFixed(2), "\u00B0C");
    }
}
