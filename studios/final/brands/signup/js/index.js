console.log('reading');

// capture the submit event
document.f.onsubmit = processForm;

// define process function
function processForm() {

  // store form fields in variables
  var userName = document.f.userName.value;
  var userClass = document.f.userClass.value;
  var userRace = document.f.userRace.value;

  var myMsg = document.getElementById("myMsg");

  myMsg.innerHTML = "Please confirm to make sure the following information is correct <br>" + "Name: " + userName + "<br>" + "University: " + userClass + "<br>" + "Email: " + userRace;


  //prevent page from reloading
  clearForm();
  return false;

}

// challenge: add a function to clear the myMsg content when the user clicks submit

function clearForm() {
  document.f.userName.value = "";
  document.f.userClass.value = "";
  document.f.userRace.value = "";
}
