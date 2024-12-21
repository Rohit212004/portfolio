// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Thank you for reaching out, ${name}! We'll get back to you soon.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
