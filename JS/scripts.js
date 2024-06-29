
//*************Function to Validate the Name ********************/
// Select the input element
const nameInput = document.getElementById('name');

// Function to validate the name input for keypress event
function validateNameKeyPress(event) {
    const input = event.key;

    // Regular expression to allow alphabets, space, and apostrophe (')
    const allowedCharacters = /^[a-zA-Z' ]+$/;

    // Check if the entered character is allowed or not
    if (!allowedCharacters.test(input)) {
        event.preventDefault(); // Prevent the character from being entered
    }
}

//*************Function to Validate the Name input for paste event ********************/
function validateNamePaste(event) {
    // Get the pasted text
    const pastedText = event.clipboardData.getData('text/plain');

    // Regular expression to allow only alphabets, space, and apostrophe (')
    const allowedCharacters = /^[a-zA-Z' ]+$/;

    // Check if the pasted text contains only allowed characters
    if (!allowedCharacters.test(pastedText)) {
        event.preventDefault(); // Prevent the paste action
    }
}

// Add event listeners to the input for keypress and paste events
nameInput.addEventListener('keypress', validateNameKeyPress);
nameInput.addEventListener('paste', validateNamePaste);


//*************Function to Validate the Email ********************/
function validateEmail(email) {
    var emailInput = email.trim();

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      //document.getElementById('email').classList.remove('invalid');
      document.getElementById('emailValidationResult').innerHTML = 'Email address with the correct format entered';
    } else {
      //document.getElementById('email').classList.add('invalid');
      document.getElementById('emailValidationResult').innerText = 'Invalid email format. Please enter a valid email address.';
    }
  }

  // Ensure initial validation on page load if there's already a value
  if (document.getElementById('email').value.trim() !== '') {
    validateEmail(document.getElementById('email').value);
  }

//*************Function to Validate the Telephone number ********************/
 function validatePhoneNumber(inputValue) {
    var phoneNumber = inputValue.trim();

    // Remove non-digit characters from the input
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Limit to 10 digits
    phoneNumber = phoneNumber.slice(0, 10);

    // Format the phone number with spaces for readability
    var formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

    // Update the input field with the formatted number
    document.getElementById('phoneNumber').value = formattedNumber;

    // Validate if exactly 10 digits
    if (Tel.length === 10) {
      document.getElementById('phoneNumber').setAttribute('style', 'border-color: initial;'); // Remove red border
      document.getElementById('validationResult').innerHTML = '10 digit numbers entered';
    } 
    else {
      document.getElementById('phoneNumber').setAttribute('style', 'border-color: red !important;'); // Apply red border
      document.getElementById('validationResult').innerText = 'Invalid South African phone number. Please enter a 10-digit number without spaces or other characters.';
    }
  }

  // Ensure initial validation on page load if there's already a value
  if (document.getElementById('phoneNumber').value.trim() !== '') {
    validatePhoneNumber(document.getElementById('phoneNumber').value);
  }

  //*************Function to Validate the Categories ********************/
  document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('category');
    const validationMessage = document.getElementById('validationMessage');
  
    category.addEventListener('change', function() {
      if (category.value === '') {
        validationMessage.textContent = 'Please select an option';
        validationMessage.classList.add('text-danger');
      } else {
        validationMessage.textContent = ''; // Clearing the message
        validationMessage.classList.remove('text-danger');
      }
    });
  });
  
  //Clear all modal fields when you click the close button or click outside the modal
  document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    const modalBackdropSelector = '.modal-backdrop';
  
    // Event delegation approach
    document.addEventListener('click', function(event) {
      if (event.target.matches(modalBackdropSelector)) {
        clearFormFields();
      }
    });
  
    function clearFormFields() {
      quoteForm.reset();
    }
  
    // Optional: Clear form fields when modal is hidden
    const quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal._element.addEventListener('hidden.bs.modal', clearFormFields);
  });


//*************Function for request quote button ********************/

  
  