// Display a welcome message in console and page
function displayWelcomeMessage() {
  const welcomeText = "Welcome to our website!";
  console.log(welcomeText);

  const welcomeElement = document.getElementById("welcome-message");
  if (welcomeElement) {
      welcomeElement.textContent = welcomeText;
  }
}

// Form submission and validation
function handleContactFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const errorElement = document.getElementById("form-error");
  const successElement = document.getElementById("form-success");

  let hasErrors = false;
  let errorMessage = "";

  if (!nameInput.value.trim()) {
      hasErrors = true;
      errorMessage += "Please enter your name.\n";
  }
  if (!emailInput.value.trim()) {
      hasErrors = true;
      errorMessage += "Please enter your email address.\n";
  } else if (!isValidEmail(emailInput.value.trim())) {
      hasErrors = true;
      errorMessage += "Please enter a valid email address.\n";
  }
  if (!messageInput.value.trim()) {
      hasErrors = true;
      errorMessage += "Please enter your message.\n";
  }

  if (hasErrors) {
      if (errorElement) {
          errorElement.textContent = errorMessage;
      } else {
          alert(errorMessage);
      }
      return;
  } else {
      if (errorElement) errorElement.textContent = "";
  }

  const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString(),
  };

  let submissions = [];
  const submissionsData = localStorage.getItem("contactFormSubmissions");
  if (submissionsData) {
      try {
          submissions = JSON.parse(submissionsData);
      } catch (error) {
          console.error("Error parsing localStorage data:", error);
          submissions = [];
      }
  }

  submissions.push(formData);
  localStorage.setItem("contactFormSubmissions", JSON.stringify(submissions));

  const confirmationMessage = `Thank you, ${formData.name}! Your message has been sent.`;

  if (successElement) {
      successElement.textContent = confirmationMessage;
      setTimeout(() => {
          successElement.textContent = "";
      }, 5000); // Clear after 5 seconds
  } else {
      alert(confirmationMessage);
  }

  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
}

// Simple email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
      contactForm.addEventListener("submit", handleContactFormSubmit);
  }

  displayWelcomeMessage();

  // Footer updates
  const yearElement = document.getElementById("currentYear");
  const lastModifiedElement = document.getElementById("lastModified");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
  if (lastModifiedElement) {
      lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
  }

  // Hamburger menu functionality
  const hamburgerCheckbox = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");
  if (hamburgerCheckbox && navList) {
      hamburgerCheckbox.addEventListener("change", () => {
          navList.classList.toggle("open");
      });
  }
});