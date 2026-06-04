
const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const inumberContainer = document.querySelector("#inumberContainer");
const accessCodeContainer = document.querySelector("#accessCodeContainer")
const inumber = document.querySelector("#inumber");
const output = document.querySelector("#output");

function updateINumber() {
  const value = ticketType.value;

    if (value === "student") {
        inumberContainer.hidden = false;
        inumber.required = true;
        accessCodeContainer.hidden = true;
        accessCodeContainer.required = false;
    }
    
    else if (value === "guest") {
        inumberContainer.hidden = true;
        inumber.required = false;
        accessCodeContainer.hidden = false;
        accessCodeContainer.required = true;
    }
    
    else {
        inumberContainer.hidden = true;
        inumber.required = false;
        accessCodeContainer.hidden = true;
        accessCodeContainer.required = false;
    }
}

ticketType.addEventListener("change", updateINumber);
updateINumber();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.eventDate.value;
  const inumber = form.inumber.value.trim();
  const accessCode = form.accessCode.value.trim();

  

  if (type === "student" && !inumber) {
    output.textContent = "Please enter you 9-Digit I Number";
    return;
  }

  if (type === "guest" && !accessCode) {
    output.textContent = "Please enter the event code";
    return;
  }
  
  if (type === "student" && inumber.length != 9) {
    output.textContent = "Student I number must be at 9 digits";
    return;
  }

  if (type === "guest" && accessCode != "EVENT131") {
    output.textContent = "Please enter the correct access code";
    return;
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date."
  }

  output.innerHTML = `
  <h2>Ticket Createdc</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          