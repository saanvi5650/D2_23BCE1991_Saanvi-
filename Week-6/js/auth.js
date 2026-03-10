function citizenLogin(e) {
  e.preventDefault();

  const email = document.getElementById("citizenEmail").value;
  const pass = document.getElementById("citizenPassword").value;

  if(email === "citizen@test.com" && pass === "1234") {
    localStorage.setItem("role", "citizen");
    window.location.href = "../citizen/dashboard.html";
  } else {
    alert("Invalid Citizen Credentials");
  }
}

function adminLogin(e) {
  e.preventDefault();

  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;

  if(user === "admin" && pass === "admin123") {
    localStorage.setItem("role", "admin");
    window.location.href = "../admin/admin-dashboard.html";
  } else {
    alert("Invalid Admin Credentials");
  }
}