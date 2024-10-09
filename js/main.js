const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.main-nav');
const contactPopup = document.getElementById('contact-popup');
const closePopup = document.getElementById('close-popup');
const contactLink = document.querySelector('.nav-links a[href="#contact"]');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');

        // Open contact pop-up if contact link is clicked
        if (link.getAttribute('href') === '#contact') {
            e.preventDefault();
            contactPopup.style.display = 'flex';
        }
    });
});

// Close pop-up when close button is clicked
closePopup.addEventListener('click', () => {
    contactPopup.style.display = 'none';
});

// Close pop-up when clicking outside the form
contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.transform = 'translateY(0)';
                slide.style.opacity = 1;
            } else if (i < index) {
                slide.style.transform = 'translateY(-100%)';
                slide.style.opacity = 0;
            } else {
                slide.style.transform = 'translateY(100%)';
                slide.style.opacity = 0;
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Optional: Add mouse wheel navigation
    document.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) nextSlide();
        if (e.deltaY < 0) prevSlide();
    }, { passive: false });

    // Initialize the first slide
    showSlide(currentSlide);
});