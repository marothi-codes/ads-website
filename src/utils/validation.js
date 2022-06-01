export function validateName(name) {
  try {
    if (/.{2}/.test(name.val()) == false) {
      throw 'Please enter your name.';
    } else if (/([\D])/.test(name.val()) == false) {
      throw 'A name must contain letters only.';
    } else {
      return true;
    }
  } catch (msg) {
    return false;
  }
}

export function validateEmail(email) {
  var emailSyntax = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
  try {
    if (/.{7}/.test(email.val()) == false) {
      throw 'The email must contain 7 characters or more.';
    } else if (emailSyntax.test(email.val()) == false) {
      throw 'Please enter a valid email address.';
    } else {
      return true;
    }
  } catch (msg) {
    return false;
  }
}

export function validatePhone(phone) {
  try {
    if (/.{10}/.test(phone.val()) == false) {
      throw 'The phone number must contain at least 10 digits.';
    } else if (/([\d])/.test(phone.val()) == false) {
      throw 'The phone number must contain digits only.';
    } else {
      return true;
    }
  } catch (msg) {
    return false;
  }
}

export function validateSubject(subject) {
  try {
    if (/.{10}/.test(subject.val()) == false) {
      throw 'The subject must contain at least 10 characters.';
    } else if (/([\D])/.test(subject.val()) == false) {
      throw 'The subject must contain letters only.';
    } else {
      return true;
    }
  } catch (msg) {
    return false;
  }
}

export function validateMessage(message) {
  isValid = false;
  try {
    if (/.{20}/.test(messageTextArea.val()) == false) {
      throw 'The message must at least contain 20 characters.';
    } else {
      return true;
    }
  } catch (msg) {
    return false;
  }
}

export default function validateAll(name, email, phone, subject, message) {
  validateName(name);
  validateEmail(email);
  validatePhone(phone);
  validateSubject(subject);
  validateMessage(message);
}
