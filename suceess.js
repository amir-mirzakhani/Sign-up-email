
const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  const emailSuc = document.querySelector(".email-success");
  emailSuc.textContent = userEmail; 
} else {
  const emailSuc = document.querySelector(".email-success");
  emailSuc.textContent = "No email was entered. Please return and try again.";
}
