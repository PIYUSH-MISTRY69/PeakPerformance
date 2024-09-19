function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    const bmi = weight / (height * height);
    let resultText;

    if (bmi < 18.5) {
        resultText = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = `Your BMI is ${bmi.toFixed(2)}. You have a normal weight.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
        resultText = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }

    document.getElementById('result').innerText = resultText;