console.log('reading');

// capture the submit event
  document.f.onsubmit = processForm;

  // define process function
  function processForm() {

    // store form fields in variables
    var userName = document.f.userName.value;
    var userClass = document.f.userClass.value;
    var userRace = document.f.userRace.value;
    var userValuable = document.f.userValuable.value;
    var userEnemy = document.f.userEnemy.value;
    var userVerb = document.f.userVerb.value;
    var userSkill = document.f.userSkill.value;
    var userHome = document.f.userHome.value;


    var myMsg=document.getElementById("myMsg");
    /*
    prompt3: add a condition that checks if the user's name is something specific, like "Michael Jackson", and if so, concatenate a specific response
    if that condition is not met, expand the concatenated message below to include the user's favMovie response
    */
myMsg.innerHTML="You are " + userName + "!<br>You are a " + userClass + " of the legendary "+ userRace+" horde."+ "<br>You lost all of your " + userValuable + " when " + userEnemy + " took away all that you've ever loved." + "<br>You will " + userVerb + " for all eternity to get back what you believe is rightfully yours." + "<br>You aim to accomplish your goals by sharpening your " + userSkill + " and bringing honour to  " + userHome + " by defeating the dreaded " + userEnemy + " once and for all!";


    //prevent page from reloading
    clearForm();
    return false;

  }

// challenge: add a function to clear the myMsg content when the user clicks submit

function clearForm() {
  document.f.userName.value = "";
  document.f.userClass.value = "";
  document.f.userRace.value = "";
  document.f.userValuable.value = "";
  document.f.userEnemy.value = "";
  document.f.userVerb.value = "";
  document.f.userSkill.value = "";
  document.f.userHome.value = "";
}
