(() => {
  'use strict';

  // Cache DOM elements
  const yearEl = document.getElementById('year');
  const form = document.getElementById('assist-form');
  const confirmBox = document.getElementById('ticket-confirm');
  const ticketNumberEl = document.getElementById('ticket-number');
  const confirmPhoneEl = document.getElementById('confirm-phone');
  const confirmEtaEl = document.getElementById('confirm-eta');
  const ticketIdBadge = document.querySelector('.ticket-form__id');
  const submitButton = form ? form.querySelector('.btn--block') : null;

  // Populate the footer year dynamically.
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (!form) return;

  const fields = ['name', 'phone', 'location', 'service'];

  const errorMessages = {
    name: 'Enter your name.',
    phone: 'Enter a phone number we can call.',
    location: 'Let us know where you are.',
    service: 'Choose the service you need.'
  };

  function showError(fieldName, message = '') {
    const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
    if (errorEl) errorEl.textContent = message;
  }

  function validateField(fieldName) {
    const input = form.elements[fieldName];
    if (!input) return true;

    input.setAttribute('data-touched', 'true');

    const value = input.value.trim();
    let isValid = true;

    if (!value) {
      isValid = false;
    } else if (fieldName === 'phone') {
      const digits = value.replace(/\D/g, '');
      isValid = digits.length >= 7;
    }

    showError(fieldName, isValid ? '' : errorMessages[fieldName]);
    return isValid;
  }

  function attachFieldEvents() {
    fields.forEach((fieldName) => {
      const input = form.elements[fieldName];
      if (!input) return;

      input.addEventListener('blur', () => validateField(fieldName));
      input.addEventListener('input', () => {
        if (input.getAttribute('data-touched') === 'true') {
          validateField(fieldName);
        }
      });
    });
  }

  function generateTicketId() {
    const digits = Math.floor(1000 + Math.random() * 9000);
    return `RA-${digits}`;
  }

  function estimateEta() {
    const minutes = 18 + Math.floor(Math.random() * 22);
    return `~${minutes} min`;
  }

  function submitForm(event) {
    event.preventDefault();

    const results = fields.map(validateField);
    const allValid = results.every(Boolean);

    if (!allValid) {
      const firstInvalid = fields.find((fieldName) => {
        const input = form.elements[fieldName];
        const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);

        return input &&
          input.getAttribute('data-touched') === 'true' &&
          errorEl &&
          errorEl.textContent;
      });

      if (firstInvalid) form.elements[firstInvalid].focus();
      if (confirmBox) confirmBox.hidden = true;
      return;
    }

    const ticketId = generateTicketId();
    const eta = estimateEta();
    const phoneValue = form.elements.phone.value.trim();

    if (ticketIdBadge) ticketIdBadge.textContent = `TICKET #${ticketId}`;
    if (ticketNumberEl) ticketNumberEl.textContent = `Ticket #${ticketId}`;
    if (confirmPhoneEl) confirmPhoneEl.textContent = phoneValue;
    if (confirmEtaEl) confirmEtaEl.textContent = eta;

    if (confirmBox) {
      confirmBox.hidden = false;
      confirmBox.setAttribute('tabindex', '-1');
      confirmBox.focus();
    }

    if (submitButton) {
      submitButton.textContent = 'Request sent';
      submitButton.disabled = true;
    }
  }

  attachFieldEvents();
  form.addEventListener('submit', submitForm);
})();