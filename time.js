 function convertHours() {
      const hoursInput = document.getElementById("hours");
      const hours = Number(hoursInput.value);
      const result = document.getElementById("secondsResult");

      if (hours <= 0 || isNaN(hours)) {
        hoursInput.value ="Invalid"; 
        result.innerText = ""; 
        return; 
      }

      const seconds = hours * 3600;
      result.innerText = `${seconds} seconds`;
    }