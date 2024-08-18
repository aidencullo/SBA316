const registration = document.getElementById("lottery-registration");

function showError(element, message, evt) {
  alert(message);
  element.focus();
  evt.preventDefault();
}

function validateRegistration(evt) {
  const { fullName } = registration.elements;
  const errors = [];

  const fullNameVal = fullName.value.trim();
  if (fullNameVal === "aiden") {
    errors.push({ element: fullName, message: "Your username cannot be 'aiden'." });
  }

  if (errors.length > 0) {
    // Show the first error and stop form submission
    showError(errors[0].element, errors[0].message, evt);
    return false;
  }

  alert("Your registration was successful!");
  return true;
}

registration.addEventListener("submit", validateRegistration);
