generateEmailAddressButton.addEventListener("click", generateEmailAddress);

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let emptyNotification = document.getElementById("emptyNotification");
let emailAddressOutcome = document.getElementById("emailAddressOutcome");


function generateEmailAddress() {
  let emailAddress = "";

  if (firstName.value == "") {
    firstName.value = "Fnu";
  }
  if (lastName.value == "") {
    emptyNotification.style.visibility = "visible";
    emailAddressOutcome.style.visibility = "hidden";
  } else {
    emailAddress = `${firstName.value}.${lastName.value}@bellevuecollege.edu`;
    emailAddress = emailAddress.toLowerCase();
    document.getElementById("emailAddressSpan").innerHTML = emailAddress.bold();
    emailAddressOutcome.style.visibility = "visible";
    emptyNotification.style.visibility = "hidden";
  }

}