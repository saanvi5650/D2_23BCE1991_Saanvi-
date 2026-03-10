if(localStorage.getItem("role") !== "admin") {
  window.location.href = "../auth/admin-login.html";
}

function logout() {
  localStorage.clear();
}

function viewPatient() {
  window.location.href = "patient-details.html";
}