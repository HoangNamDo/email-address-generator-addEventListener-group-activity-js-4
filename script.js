function emailAddressHandler() {
  let firstName;
  let lastName;
  let emailAddress;

  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;

  if (firstName.length == 0) {
    firstName = "Fnu";
  }
  
  if (lastName.length == 0) {
    document.getElementById("emptyNotification").style.visibility = "visible";
    document.getElementById("emailAddressOutcome").style.visibility = "hidden";
  } else {
    emailAddress = `${firstName}.${lastName}@bellevuecollege.edu`;
    emailAddress = emailAddress.toLowerCase();

    document.getElementById("emailAddress").innerHTML = emailAddress.bold();

    document.getElementById("emailAddressOutcome").style.visibility = "visible";
    document.getElementById("emptyNotification").style.visibility = "hidden";
  }

}

generateEmailAddress.addEventListener("click", emailAddressHandler);