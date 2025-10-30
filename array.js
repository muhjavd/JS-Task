function findNextInArray(arr, num) {
  const index = arr.indexOf(num);
  if (index !== -1 && index < arr.length - 1) {
    return arr[index + 1];
  } else {
    return "No next number";
  }
}
console.log(findNextInArray([2, 4, 6, 8], 4));

function findNextNumber() {
  let value = parseFloat(document.getElementById("userNumber").value);
  if (Number.isInteger(value)) {
    document.getElementById("nextNumber").innerText = value + 1;
  } else {
    document.getElementById("nextNumber").innerText = (value + 0.1).toFixed(1);
  }
}