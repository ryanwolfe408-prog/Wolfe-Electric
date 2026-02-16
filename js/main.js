/**
 * Wolfe Electric – Main script
 * Hamburger menu, smooth scroll, contact form validation
 */

(function () {
  'use strict';

  // ----- Mobile menu (hamburger) -----
  var menuToggle = document.querySelector('.menu-toggle');
  var navMobile = document.getElementById('nav-mobile');
  var body = document.body;

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navMobile.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link (for in-page nav)
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      });
    });

    // Close menu on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMobile.classList.contains('is-open')) {
        navMobile.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    });
  }

  // ----- Smooth scroll for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // ----- Contact form validation -----
  var form = document.getElementById('contact-form');
  if (form) {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var nameError = document.getElementById('name-error');
    var phoneError = document.getElementById('phone-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');

    function showError(input, errorEl, message) {
      input.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
      errorEl.textContent = message;
    }

    function clearError(input, errorEl) {
      input.classList.remove('invalid');
      input.setAttribute('aria-invalid', 'false');
      errorEl.textContent = '';
    }

    function validateName() {
      var value = nameInput.value.trim();
      if (value.length === 0) {
        showError(nameInput, nameError, 'Please enter your name.');
        return false;
      }
      clearError(nameInput, nameError);
      return true;
    }

    function validatePhone() {
      var value = phoneInput.value.trim();
      if (value.length === 0) {
        showError(phoneInput, phoneError, 'Please enter your phone number.');
        return false;
      }
      clearError(phoneInput, phoneError);
      return true;
    }

    function validateEmail() {
      var value = emailInput.value.trim();
      if (value.length === 0) {
        showError(emailInput, emailError, 'Please enter your email address.');
        return false;
      }
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(value)) {
        showError(emailInput, emailError, 'Please enter a valid email address.');
        return false;
      }
      clearError(emailInput, emailError);
      return true;
    }

    function validateMessage() {
      var value = messageInput.value.trim();
      if (value.length === 0) {
        showError(messageInput, messageError, 'Please enter a message.');
        return false;
      }
      clearError(messageInput, messageError);
      return true;
    }

    [nameInput, phoneInput, emailInput, messageInput].forEach(function (input) {
      input.addEventListener('blur', function () {
        if (input === nameInput) validateName();
        if (input === phoneInput) validatePhone();
        if (input === emailInput) validateEmail();
        if (input === messageInput) validateMessage();
      });
    });

    form.addEventListener('submit', function (e) {
      var nameOk = validateName();
      var phoneOk = validatePhone();
      var emailOk = validateEmail();
      var messageOk = validateMessage();

      if (!nameOk || !phoneOk || !emailOk || !messageOk) {
        e.preventDefault();
        return false;
      }

      // Form action can be set to Formspree, Netlify Forms, or your backend.
      // Until then, optional: prevent submit and show a message, or allow default.
      // Example: e.preventDefault(); alert('Thanks! We will contact you soon.'); return false;
    });
  }
})();
