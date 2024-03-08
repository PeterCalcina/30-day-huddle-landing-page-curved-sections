let inputEmail = document.getElementById('email');
let errorMessage = document.querySelector('.error_message');
let toast = document.getElementById('toast');

function subscribe() {
  if (inputEmail.value === '') errorMessage.textContent = 'Please the email field cannot be empty';
  else if (!validateEmail(inputEmail.value)) errorMessage.textContent = 'Please provide a valid email address';
  else {
    clearForm();
    showToast();
    return;
  }

  errorMessage.classList.add('active');
  inputEmail.classList.add('error_input');
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function clearForm() {
  errorMessage.classList.remove('active');
  inputEmail.classList.remove('error_input');
  inputEmail.value = '';
}

function showToast() {
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}