function calculateBMI() {
  const w = document.getElementById("weight").value;
  const h = document.getElementById("height").value;
  const bmi = (w / (h * h)).toFixed(2);
  document.getElementById("bmiResult").innerText = `Your BMI is ${bmi}`;
}