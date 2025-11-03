// Interactive features for ITS Nexus blog
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function() {
      siteNav.classList.toggle('active');
      
      // Animate hamburger
      const spans = navToggle.querySelectorAll('span');
      if (siteNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile nav if open
          if (siteNav && siteNav.classList.contains('active')) {
            siteNav.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
          }
        }
      }
    });
  });

  // Reading progress bar
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', function() {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // Scroll animations for elements with [data-animate]
  const animateElements = document.querySelectorAll('[data-animate]');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animateElements.forEach(el => {
    observer.observe(el);
  });

  // Add stagger animation delay to grid items
  const articleCards = document.querySelectorAll('.article-card');
  articleCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Header background blur on scroll
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.background = 'rgba(10, 14, 39, 0.95)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.background = 'rgba(10, 14, 39, 0.8)';
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });

  // Subscribe form handling
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      // Simulate submission (replace with actual backend integration)
      const button = this.querySelector('button');
      const originalText = button.textContent;
      
      button.textContent = 'Subscribing...';
      button.disabled = true;
      
      setTimeout(() => {
        button.textContent = '✓ Subscribed!';
        button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          button.style.background = '';
          this.reset();
        }, 2000);
      }, 1500);
    });
  }

  // Add hover effect to cards
  const cards = document.querySelectorAll('.article-card, .featured-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '';
    });
  });

  // Parallax effect for hero background
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
  }

  // Dynamic gradient animation for gradient text
  const gradientTexts = document.querySelectorAll('.gradient-text');
  gradientTexts.forEach(text => {
    let hue = 0;
    setInterval(() => {
      hue = (hue + 1) % 360;
      // Keep the original gradient but add subtle variation
    }, 50);
  });

  // Easter egg: Konami code
  let konamiCode = [];
  const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
      document.body.style.animation = 'rainbow 2s linear infinite';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 5000);
    }
  });

  // Add CSS for rainbow animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  console.log('%c🚀 Welcome to ITS Nexus!', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
  console.log('%cExploring the future of Intelligent Transport Systems', 'font-size: 14px; color: #7c3aed;');
});
