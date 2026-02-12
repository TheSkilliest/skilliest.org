// ===================================
// Skilliest.org - JavaScript
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ===== Smooth Scrolling for Anchor Links =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== FAQ Accordion =====
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });

    // ===== Free Guide Button Handlers =====
    const freeGuideBtn = document.getElementById('freeGuideBtn');
    const footerGuideBtn = document.getElementById('footerGuideBtn');

    function handleFreeGuideClick(e) {
        e.preventDefault();
        // Replace this with your actual ConvertKit form URL or modal trigger
        alert('Free Guide: This will be integrated with your ConvertKit form or email collection system. Please connect your ConvertKit lead magnet link here.');
        // For actual implementation:
        // window.open('YOUR_CONVERTKIT_FORM_URL', '_blank');
        // Or trigger a modal with email collection form
    }

    if (freeGuideBtn) {
        freeGuideBtn.addEventListener('click', handleFreeGuideClick);
    }

    if (footerGuideBtn) {
        footerGuideBtn.addEventListener('click', handleFreeGuideClick);
    }

    // ===== Navbar Background on Scroll =====
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow to navbar on scroll
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ===== Scroll Reveal Animation =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to section elements
    const animateElements = document.querySelectorAll('.solution-card, .feature-item, .include-card, .timeline-item, .magnet-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // ===== Form Tracking (Optional Analytics) =====
    const forms = document.querySelectorAll('a[href*="forms.gle"]');
    forms.forEach(form => {
        form.addEventListener('click', function() {
            // Track form clicks - integrate with your analytics
            console.log('Form clicked:', this.href);
            // Example: gtag('event', 'form_click', { 'form_type': 'bootcamp_application' });
        });
    });

    // ===== Dynamic Year in Footer =====
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
    }

    // ===== Glow Effect on Hover for Primary Buttons =====
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 60px rgba(242, 135, 5, 0.5)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 15px rgba(242, 135, 5, 0.3)';
        });
    });

    // ===== Testimonial/Stats Counter Animation (if needed in future) =====
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }

    // Activate counter animation when stats come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const targetNumber = parseInt(entry.target.textContent);
                if (!isNaN(targetNumber)) {
                    animateCounter(entry.target, targetNumber);
                    entry.target.dataset.animated = 'true';
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    console.log('Skilliest.org - Website loaded successfully! 🚀');
});

// ===== External Link Handler =====
// Open external links in new tab
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (href && (href.startsWith('http') || href.startsWith('https')) && !href.includes('skilliest.org')) {
            e.target.setAttribute('target', '_blank');
            e.target.setAttribute('rel', 'noopener noreferrer');
        }
    }
});

// ===== Performance: Lazy Load Images (if you add more images) =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
