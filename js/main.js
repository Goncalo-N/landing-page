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