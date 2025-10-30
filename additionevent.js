const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

num1.addEventListener("input", () => {
  result.value = "NaN";
});

num2.addEventListener("input", () => {
  const A = parseFloat(num1.value);
  const B = parseFloat(num2.value);
  result.value = A + B;

});