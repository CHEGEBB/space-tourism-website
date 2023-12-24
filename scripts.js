// Function to scroll to a section smoothly
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Function to toggle the active state of navigation links
function toggleActiveNavLink(sectionNumber) {
  var navLinks = document.querySelectorAll('.nav [data-section]');
  navLinks.forEach(function (link, index) {
    link.classList.toggle('active', index + 1 === sectionNumber);
  });
}

// Function to show a specific section
function showSection(sectionNumber) {
  var sections = document.querySelectorAll('.crew');
  sections.forEach(function (section, index) {
    section.style.display = index + 1 === sectionNumber ? 'block' : 'none';
  });

  toggleActiveNavLink(sectionNumber);

  var dots = document.querySelectorAll('.dot');
  dots.forEach(function (dot, index) {
    dot.classList.toggle('active', index + 1 === sectionNumber);
  });
}

// Function to toggle the active state of slider pages
function toggleActiveSliderPage(pageNumber) {
  var sliderPages = document.querySelectorAll('.circle');
  sliderPages.forEach(function (page, index) {
    page.classList.toggle('active', index + 1 === pageNumber);
  });
}

// Function to show a specific technology page
function showTechPage(pageNumber) {
  var techPages = document.querySelectorAll('.tech');
  techPages.forEach(function (tech, index) {
    tech.style.display = index + 1 === pageNumber ? 'block' : 'none';
  });

  toggleActiveSliderPage(pageNumber);
}

// Function to submit the contact form
function submitForm() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  // Add your actual form submission logic here
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Optionally, reset the form fields after submission
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  alert('Form submitted successfully!');
}

// Main initialization function
function initializeSpaceTourism() {
  addNavigationEventListeners();
  addSliderEventListeners();
  addFormSubmitEventListener();
}

// Function to add navigation event listeners
function addNavigationEventListeners() {
  var navigationLinks = document.querySelectorAll('.nav [data-section]');
  navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var sectionId = link.getAttribute('data-section');
      scrollToSection(sectionId);
    });
  });
}

// Function to add slider event listeners
function addSliderEventListeners() {
  var sliderPages = document.querySelectorAll('.circle');
  sliderPages.forEach(function (page, index) {
    page.addEventListener('click', function () {
      showTechPage(index + 1);
    });
  });
}

// Function to add form submission event listener
function addFormSubmitEventListener() {
  var form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitForm();
    });
  }
}

// Call the main initialization function
initializeSpaceTourism();
