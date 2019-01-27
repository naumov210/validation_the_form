function validateRegEx(regex, input, helpText, helpMessage) {
    // See if the input data validates OK
    if (!regex.test(input)) {
      // The data is invalid, so set the help message and return false
      if (helpText != null)
        helpText.innerHTML = helpMessage;
      return false;
    } else {
      // The data is OK, so clear the help message and return true
      if (helpText != null)
        helpText.innerHTML = "";
      return true;
    }
  }

  function validateNonEmpty(inputField, helpText) {
    // See if the input value contains any text
    return validateRegEx(/.+/,
      inputField.value, helpText,
      "Please enter a value.");
  }



  function validateFirstName(minLength, maxLength, inputField, helpText) {
    // First see if the input value contains data
    return validateRegEx(new RegExp("^.{" + minLength + "," + maxLength + "}$"), inputField.value, helpText,
      "Please enter your name from " + minLength + " to " + maxLength + " letters.");
  }


  function validateLastName(minLength, maxLength, inputField, helpText) {
    // First see if the input value contains data
    return validateRegEx(new RegExp("^.{" + minLength + "," + maxLength + "}$"), inputField.value, helpText,
      "Please enter your name from " + minLength + " to " + maxLength + " letters.");
  }

  function validatePhone(inputField, helpText) {
    // First see if the input value contains data
    if (!validateNonEmpty(inputField, helpText))
      return false;

    // Then see if the input value is a phone number
    return validateRegEx(/^(\+380)+\(\d{2}\)-\d{3}-\d{2}-\d{2}$/, inputField.value, helpText, "Enter a number in format +380 (XX)-XXX-XX-XX.");
  }



  function validateEmail(inputField, helpText) {
    // First see if the input value contains data
    if (!validateNonEmpty(inputField, helpText))
      return false;

    // Then see if the input value is an email address
    return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/,
      inputField.value, helpText,
      "Please enter an email address (for example, johndoe@acme.com).");
  }


  function validateDate(inputField, helpText) {
    // First see if the input value contains data
    if (!validateNonEmpty(inputField, helpText))
      return false;

    // Then see if the input value is a date
    return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/,
      inputField.value, helpText,
      "Please enter a date (for example, 01/14/1975).");
  }





  function sabmitProifile(form, helpText) {
    if (validateFirstName(1, 15, form["first-name"], form["first-name_help"]) &&
      validateLastName(1, 15, form["last-name"], form["last-name_help"]) &&
      
      validateDate(form["date"], form["date_help"]) &&
      validateNonEmpty(form["name"], form["name_help"]) &&
      validatePhone(form["phone"], form["phone_help"]) &&
      validateEmail(form["email"], form["email_help"])) {
      // Submit the order to the server
      //form.submit();
      document.getElementsByClassName("user-date")[0].style.display = "block";
    } else {
      if (helpText != null)
    helpText.innerHTML = "Sorry but there is something wrong with the form information.";
    }
  }