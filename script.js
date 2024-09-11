const textField = document.getElementsByClassName("field");
const emailField = document.getElementById("email");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  for (i = 0; i < textField.length; i++) {
    const field = textField[i];
    if (field.value.length === 0) {
      field.classList.add("error");
      field.setAttribute("placeholder", "");
      field.nextElementSibling.style.display = "block";
    } else {
      if (field.classList.contains("error")) {
        field.classList.remove("error");
        field.nextElementSibling.style.display = "none";
      }
    }
  }

  const emailValue = document.getElementById("email").value;

  if (!validateEmail(emailValue)) {
    emailField.classList.add("error");
    emailField.setAttribute("placeholder", "");
    emailField.nextElementSibling.style.display = "block";
  } else {
    if (emailField.classList.contains("error")) {
      emailField.classList.remove("error");
      emailField.nextElementSibling.style.display = "none";
    }
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
