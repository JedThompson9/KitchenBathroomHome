(function () {
  'use strict';

  // ---- Sticky header shrink on scroll ----
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 24) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // On mobile, tapping "Gallery" expands its dropdown instead of navigating away.
    var dropdownParent = mainNav.querySelector('.has-dropdown');
    if (dropdownParent) {
      var dropdownLink = dropdownParent.querySelector('a');
      dropdownLink.addEventListener('click', function (e) {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          dropdownParent.classList.toggle('is-open');
        }
      });
    }
  }

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // ---- Contact form submit loading state ----
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      var btn = contactForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.dataset.originalText = btn.textContent;
        btn.textContent = 'Sending...';
      }
    });
  }

  // ---- Category pill filter on gallery category pages ----
  var pills = document.querySelectorAll('[data-filter-pill]');
  var productCards = document.querySelectorAll('[data-product-category]');
  if (pills.length && productCards.length) {
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('is-active'); });
        pill.classList.add('is-active');
        var filter = pill.getAttribute('data-filter-pill');
        productCards.forEach(function (card) {
          var show = filter === 'all' || card.getAttribute('data-product-category') === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
})();
