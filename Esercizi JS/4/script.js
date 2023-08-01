function aggiornaOrologio(){
  const now = new Date();
  const hours =  formatTimeValue(now.getHours());
  const minutes = formatTimeValue(now.getMinutes());
  const seconds =formatTimeValue(now.getSeconds());


  const timeDisplay=document.getElementById("time");
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
function formatTimeValue(value) {
  return value < 10 ? '0' + value:value;
}

setInterval(aggiornaOrologio, 1000);