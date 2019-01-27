 //запуск модального окна

 window.onload = function modalLoad() {
     document.getElementsByClassName("modal")[0].style.display = "block";
}

function validateRegEx(regex, inputStr, helpText, helpMessage) {
    if(!regex.test(inputStr)) {
        if (helpText != null)
        helpText.innerHTML = helpMessage;
        return false;
    } 
    else {
        if (helpText != null)
        helpText.innerHTML = "";
        return true;
    }
}

function validateNonEmpty(inputField, helpText) {
    return validateRegEx(/.+/, inputField.value, helpText, "Please enter a value.");
  }

function validateLogin(inputField, helpText) {
    if (!validateNonEmpty(inputField, helpText))
    return false;
    return validateRegEx( /^(Admin)$/, inputField.value, helpText, "Please enter a login (for example, Admin)");
}

function validatePassword(inputField, helpText) {
    if (!validateNonEmpty(inputField, helpText))
    return false;
    return validateRegEx(/^\d{5}$/, inputField.value, helpText, "Please enter a password (5 any numbers)");
}



  function loginIn(form, helpText) {
    if(validateLogin(form['login'], form['login_help']) && validatePassword(form['password'], form['password_help'])) {
        if (helpText != null)
        helpText.innerHTML = "";
        document.getElementsByClassName("modal")[0].style.display = "none";
    }
 else {
    if (helpText != null)
    helpText.innerHTML = "Sorry, the form is not correct!";
 }
  }