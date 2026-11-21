/* ==========================================================================
   PET HOSPITAL — VANILLA JAVASCRIPT INTERACTIVITY
   No External Frameworks | Local Client-Side Demo Logic Only
   ========================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initMobileNavigation();
    initAppointmentModal();
    initAppointmentForms();
    initFaqAccordions();
    initScrollReveal();
    initBackToTop();
    initServicePrefillLinks();
  });

  /* ------------------------------------------------------------------------
     1. Sticky Header Elevation
     ------------------------------------------------------------------------ */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function checkScroll() {
      if (window.scrollY > 16) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  /* ------------------------------------------------------------------------
     2. Mobile Hamburger Navigation
     ------------------------------------------------------------------------ */
  function initMobileNavigation() {
    var toggleBtn = document.querySelector('.mobile-menu-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('open')) return;
      if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
        nav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------------------------------
     3. Appointment Request Modal
     ------------------------------------------------------------------------ */
  function initAppointmentModal() {
    var modal = document.getElementById('appointmentModal');
    if (!modal) return;

    var openTriggers = document.querySelectorAll('[data-open-appointment-modal]');
    var closeTriggers = modal.querySelectorAll('[data-close-appointment-modal]');
    var reasonSelect = modal.querySelector('select[name="reasonForVisit"]');

    openTriggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var presetReason = btn.getAttribute('data-service-reason');
        if (presetReason && reasonSelect) {
          reasonSelect.value = presetReason;
        }
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    closeTriggers.forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. Appointment Request Form Validation (Page & Modal Forms)
     ------------------------------------------------------------------------ */
  function initAppointmentForms() {
    var forms = document.querySelectorAll('.js-appointment-form');
    if (!forms.length) return;

    forms.forEach(function (form) {
      var confirmationBox = form.parentElement.querySelector('.form-confirmation-box');

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var isValid = true;
        var requiredFields = form.querySelectorAll('[data-required="true"]');

        requiredFields.forEach(function (field) {
          var errorEl = field.parentElement.querySelector('.field-error-msg');
          var val = field.value.trim();
          var fieldError = '';

          if (!val) {
            fieldError = 'This field is required for the demo preview.';
          } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            fieldError = 'Please enter a valid email address format.';
          } else if (field.name === 'phoneNumber' && val.replace(/\D/g, '').length < 7) {
            fieldError = 'Please enter at least 7 digits for the demo phone field.';
          }

          if (fieldError) {
            isValid = false;
            field.classList.add('input-error');
            if (errorEl) errorEl.textContent = fieldError;
          } else {
            field.classList.remove('input-error');
            if (errorEl) errorEl.textContent = '';
          }
        });

        if (!isValid) {
          var firstInvalid = form.querySelector('.input-error');
          if (firstInvalid) firstInvalid.focus();
          return;
        }

        // Build clean summary strictly in memory (nothing stored or transmitted)
        var ownerName = form.querySelector('[name="ownerName"]').value.trim();
        var petName = form.querySelector('[name="petName"]').value.trim();
        var animalType = form.querySelector('[name="animalType"]').value;
        var reason = form.querySelector('[name="reasonForVisit"]').value;
        var prefDate = form.querySelector('[name="preferredDate"]').value;
        var prefTime = form.querySelector('[name="preferredTime"]').value;

        if (confirmationBox) {
          var summarySpan = confirmationBox.querySelector('.js-demo-summary');
          if (summarySpan) {
            summarySpan.textContent =
              'Previewed enquiry for ' +
              ownerName +
              ' & ' +
              petName +
              ' (' +
              animalType +
              ') — ' +
              reason +
              ' on ' +
              prefDate +
              ' (' +
              prefTime +
              ').';
          }
          confirmationBox.classList.add('visible');
          confirmationBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        form.reset();
      });

      // Clear error state on input
      form.querySelectorAll('.form-control').forEach(function (input) {
        input.addEventListener('input', function () {
          input.classList.remove('input-error');
          var err = input.parentElement.querySelector('.field-error-msg');
          if (err) err.textContent = '';
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. FAQ Accordion
     ------------------------------------------------------------------------ */
  function initFaqAccordions() {
    var faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
      var trigger = item.querySelector('.faq-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', function () {
        var currentlyOpen = item.classList.contains('open');

        // Close siblings in same accordion list
        var parentList = item.closest('.faq-list');
        if (parentList) {
          parentList.querySelectorAll('.faq-item.open').forEach(function (openItem) {
            openItem.classList.remove('open');
            var btn = openItem.querySelector('.faq-trigger');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
        }

        if (!currentlyOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Scroll Reveal Animations
     ------------------------------------------------------------------------ */
  function initScrollReveal() {
    var revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     7. Back to Top Button
     ------------------------------------------------------------------------ */
  function initBackToTop() {
    var backBtn = document.getElementById('backToTopBtn');
    if (!backBtn) return;

    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 420) {
          backBtn.classList.add('visible');
        } else {
          backBtn.classList.remove('visible');
        }
      },
      { passive: true }
    );

    backBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     8. URL Query Param Prefill on Contact Page
     ------------------------------------------------------------------------ */
  function initServicePrefillLinks() {
    var params = new URLSearchParams(window.location.search);
    var reasonParam = params.get('reason');
    if (!reasonParam) return;

    var contactSelect = document.querySelector('#contactAppointmentForm select[name="reasonForVisit"]');
    if (contactSelect) {
      contactSelect.value = reasonParam;
    }
  }
})();
