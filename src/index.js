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

// Cache at least one element using querySelector or querySelectorAll.
const jackpot = document.querySelector("#jackpot");
jackpot.textContent = "JACKPOT: $1,000,000";
jackpot.style.color = "red";
jackpot.style.fontSize = "2em";
jackpot.style.fontWeight = "bold";
jackpot.style.textAlign = "center";
jackpot.style.border = "1px solid black";
jackpot.style.padding = "10px";
jackpot.style.margin = "10px";
jackpot.style.borderRadius = "5px";
jackpot.style.backgroundColor = "yellow";

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).


jackpot.appendChild(document.createElement("div"));
jackpot.lastChild.textContent = "Participating Cities";


// Iterate over a collection of elements to accomplish some task.
jackpot.lastChild.appendChild(document.createElement("ul"));
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
cities.forEach((city) => {
	const li = document.createElement("li");
	li.textContent = city;
	jackpot.lastChild.lastChild.appendChild(li);
});
