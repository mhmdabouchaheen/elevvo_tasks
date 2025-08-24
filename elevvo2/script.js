document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default submit
  let isValid = true;

  // Clear all errors
  document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");

  // Full Name
  const fullname = document.getElementById("fullname");
  if (fullname.value.trim() === "") {
    showError(fullname, "Full name is required");
    isValid = false;
  }

  // Email
  const email = document.getElementById("email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  }

  // Subject
  const subject = document.getElementById("subject");
  if (subject.value.trim() === "") {
    showError(subject, "Subject is required");
    isValid = false;
  }

  // Message
  const message = document.getElementById("message");
  if (message.value.trim() === "") {
    showError(message, "Message cannot be empty");
    isValid = false;
  }

  if (isValid) {
    alert("Thank you! Your message has been submitted.");
    this.reset();
  }
});

// Function to show error under input
function showError(input, message) {
  const errorMsg = input.parentElement.querySelector(".error-message");
  errorMsg.innerText = message;
  errorMsg.style.display = "block";
}
