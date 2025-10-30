function capitalizeName() {
  let name = document.getElementById("userName").value;
  let formatted = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("nameResult").innerText = formatted;
}