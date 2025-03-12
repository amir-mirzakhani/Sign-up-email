const inputEmail = document.getElementById("email");
const subBtn = document.querySelector(".sub-btn");
const errorText = document.querySelector(".error-text");

// Function to check if the input is a valid email
function isEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value.trim());
}

subBtn.addEventListener("click", () => {
  const emailValue = inputEmail.value.trim();

  if (isEmail(emailValue)) {
    errorText.style.visibility = "hidden";
    inputEmail.style.border = "";
    inputEmail.style.backgroundColor = "";
    inputEmail.style.color = "";

    localStorage.setItem("userEmail", emailValue);

    location.href = "./successEmail.html";
  } else {
    errorText.style.visibility = "visible";
    inputEmail.style.border = "2px solid #ff6257";
    inputEmail.style.backgroundColor = "hsl(4, 100%, 88.8%)";
    inputEmail.style.color = "#ff6257";
  }
});
