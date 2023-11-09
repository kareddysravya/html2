function convertToFar() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitOutput = document.getElementById('fahrenheit');
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheitOutput.value = fahrenheitValue.toFixed(2);
}
function convertToCel() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusOutput = document.getElementById('celsius');
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    celsiusOutput.value = celsiusValue.toFixed(2);
}
