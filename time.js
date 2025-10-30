function convertHours() {
  const hours = document.getElementById("hours").value;
  const seconds = hours * 3600;
  document.getElementById("secondsResult").innerText = `${seconds} seconds`;
}