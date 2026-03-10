function logout() {
  localStorage.clear();
}

if(localStorage.getItem("role") !== "citizen") {
  window.location.href = "../auth/citizen-login.html";
}

// Generate fake health data
function generateData() {
  return {
    heart: Math.floor(Math.random()*40)+60,
    temp: (Math.random()*2+36).toFixed(1),
    oxy: Math.floor(Math.random()*5)+95
  }
}

const data = generateData();

if(document.getElementById("heartRate"))
  document.getElementById("heartRate").innerText = data.heart;

if(document.getElementById("temperature"))
  document.getElementById("temperature").innerText = data.temp;

if(document.getElementById("oxygen"))
  document.getElementById("oxygen").innerText = data.oxy;

if(document.getElementById("liveData"))
  document.getElementById("liveData").innerText =
    `Heart: ${data.heart} bpm | Temp: ${data.temp} °C | Oxygen: ${data.oxy}%`;

if(document.getElementById("alertsContainer")) {
  const container = document.getElementById("alertsContainer");

  if(data.heart > 100) {
    container.innerHTML += `<div class="alert alert-danger">High Heart Rate!</div>`;
  }

  if(data.temp > 38) {
    container.innerHTML += `<div class="alert alert-danger">High Temperature!</div>`;
  }

  if(data.oxy < 94) {
    container.innerHTML += `<div class="alert alert-danger">Low Oxygen Level!</div>`;
  }

  if(container.innerHTML === "")
    container.innerHTML = `<div class="alert alert-success">All vitals normal.</div>`;
}