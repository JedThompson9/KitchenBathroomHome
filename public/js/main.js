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
      // A fixed 0.15 area-visibility threshold works fine for small sections, but for
      // very tall containers (like a 40+ item product grid) it can require scrolling
      // an enormous distance before "15% of the whole element" is visible. Using a
      // near-zero threshold instead means the reveal fires as soon as any part of the
      // element enters the viewport, regardless of how tall it is.
      { threshold: 0.01, rootMargin: '0px 0px -40px 0px' }
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

  // ---- Image gallery lightbox (variant detail pages) ----
  var lightbox = document.getElementById('lightbox');
  var galleryGroup = document.querySelector('[data-lightbox-group]');
  if (lightbox && galleryGroup) {
    var thumbs = Array.prototype.slice.call(galleryGroup.querySelectorAll('[data-lightbox-src]'));
    var images = thumbs.map(function (t) { return { src: t.getAttribute('data-lightbox-src'), alt: t.querySelector('img') ? t.querySelector('img').alt : '' }; });
    var lightboxImage = document.getElementById('lightboxImage');
    var closeBtn = document.getElementById('lightboxClose');
    var prevBtn = document.getElementById('lightboxPrev');
    var nextBtn = document.getElementById('lightboxNext');
    var currentIndex = 0;

    function showImage(index) {
      currentIndex = (index + images.length) % images.length;
      lightboxImage.src = images[currentIndex].src;
      lightboxImage.alt = images[currentIndex].alt;
      thumbs.forEach(function (t, i) { t.classList.toggle('is-active', i === currentIndex); });
    }
    function openLightbox(index) {
      showImage(index);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    }
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
    }

    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener('click', function () { openLightbox(i); });
    });
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', function () { showImage(currentIndex - 1); });
    nextBtn.addEventListener('click', function () { showImage(currentIndex + 1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
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
