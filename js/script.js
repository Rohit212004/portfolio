/* ============================================
   PORTFOLIO WEBSITE - MAIN JAVASCRIPT
   Interactive Features & Functionality
   ============================================ */

/**
 * DOM Elements
 */
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const backToTop = document.getElementById('backToTop');
const projectsGrid = document.getElementById('projectsGrid');
const certificatesGrid = document.getElementById('certificatesGrid');

/**
 * Configuration
 */
const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Voters Queue Monitoring System',
        description: 'Real-time crowd management system using YOLOv8 and OpenCV for detecting and analyzing voter queue patterns. Features a Flask dashboard with UI and analytics for queue monitoring.',
        tags: ['Python', 'OpenCV', 'YOLOv8', 'Flask', 'Dashboard'],
        image: 'images/voters.jpg',
        githubUrl: 'https://github.com/rohitvishwakarma2110'
    },
    {
        id: 2,
        title: 'Ambient Light Controlled LED System',
        description: 'IoT-based adaptive lighting system using ESP32 microcontroller with LDR (Light Dependent Resistor) sensing. Features Bluetooth connectivity for remote control and energy-efficient operation.',
        tags: ['ESP32', 'IoT', 'Embedded Systems', 'Bluetooth', 'Hardware'],
        image: 'images/esp.jpg',
        githubUrl: 'https://github.com/rohitvishwakarma2110',
        documentationUrl: 'EM_Lab_MiniProject 2.pdf'
    },
    {
        id: 3,
        title: 'Personal Task Tracker',
        description: 'Full-stack task management application with user authentication, real-time updates, and responsive design. Built with modern web technologies for efficient project and task organization.',
        tags: ['ASP.NET', 'MySQL', 'React', 'TypeScript', 'REST API'],
        image: 'images/personal_task.png',
        githubUrl: 'https://github.com/Rohit212004/Personal-task-Tracker-/tree/Rohit',
        reportUrl: 'internship_report.pdf'
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Responsive personal portfolio website showcasing projects, skills, and experience. Features smooth animations, dark/light theme toggle, and interactive UI elements built with vanilla JavaScript.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'AOS'],
        image: 'images/portfolio.png',
        githubUrl: 'https://github.com/Rohit212004/portfolio'
    }
];

/**
 * CERTIFICATES DATA
 */
const CERTIFICATES_DATA = [
    {
        id: 1,
        title: 'Python for Data Science',
        issuer: 'nptel',
        date: '2024',
        description: 'Advanced Python programming with data science applications'
    },
    {
        id: 2,
        title: 'Digital System Design',
        issuer: 'Goa College of Engineering',
        date: '2024',
        description: 'Coursework in digital circuit design and VHDL programming'
    },
    {
        id: 3,
        title: 'Industrial Automation with PLC',
        issuer: 'Goa College of Engineering',
        date: '2024',
        description: 'PLC programming and automation'
    }, {
        id: 4,
        title: 'C Language',
        issuer: 'Goa College of Engineering',
        date: '2023',
        description: 'Coursework in C programming and fundamentals of computer science'
    }
];

/**
 * 1. THEME TOGGLE (Dark/Light Mode)
 */
function initThemeToggle() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
    });
}

/**
 * 2. HAMBURGER MENU TOGGLE
 */
function initHamburgerMenu() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * 3. STICKY NAVBAR ON SCROLL
 */
function initStickyNavbar() {
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

/**
 * 4. SMOOTH SCROLL TO SECTIONS
 */
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/**
 * 5. RENDER PROJECTS
 */
function renderProjects() {
    projectsGrid.innerHTML = PROJECTS_DATA.map(project => `
        <div class="project-card" data-aos="fade-up">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">View Live</a>` : ''}
                    ${project.documentationUrl ? `<a href="${project.documentationUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Documentation</a>` : ''}
                    ${project.reportUrl ? `<a href="${project.reportUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Internship Report</a>` : ''}
                    ${project.id !== 2 ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * 6. RENDER CERTIFICATES
 */
function renderCertificates() {
    certificatesGrid.innerHTML = CERTIFICATES_DATA.map((cert, index) => `
        <section class="certificate-section">
            <div class="container">
                <div class="certificate-card" data-aos="fade-up">
                    <div class="certificate-header">
                        <div class="certificate-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <span class="certificate-badge">${cert.date}</span>
                    </div>
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                    <p class="certificate-description">${cert.description}</p>
                </div>
                
                <div class="certificate-counter">${index + 1} / ${CERTIFICATES_DATA.length}</div>
            </div>
        </section>
    `).join('');
}

/**
 * 7. EMAILJS CONFIGURATION
 * Sign up at https://www.emailjs.com/
 * Replace these with your actual EmailJS credentials:
 * 1. PUBLIC_KEY: From EmailJS Dashboard > Account > API Keys
 * 2. SERVICE_ID: From EmailJS Dashboard > Email Services
 * 3. TEMPLATE_ID: From EmailJS Dashboard > Email Templates
 */
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'vBILJ0YqLqkQW335V',     // Your EmailJS Public Key
    SERVICE_ID: 'service_wbrs329',       // Your EmailJS Service ID
    TEMPLATE_ID: 'template_el5h0jn'      // Your EmailJS Template ID
};

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

/**
 * 8. FORM VALIDATION & SUBMISSION
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
    document.querySelectorAll('.form-input').forEach(input => input.classList.remove('error'));

    // Validate name
    if (name.value.trim().length < 2) {
        showError('nameError', 'Please enter a valid name');
        name.classList.add('error');
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email.value.trim())) {
        showError('emailError', 'Please enter a valid email address');
        email.classList.add('error');
        isValid = false;
    }

    // Validate subject
    if (subject.value.trim().length < 3) {
        showError('subjectError', 'Subject must be at least 3 characters');
        subject.classList.add('error');
        isValid = false;
    }

    // Validate message
    if (message.value.trim().length < 10) {
        showError('messageError', 'Message must be at least 10 characters');
        message.classList.add('error');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Send email using EmailJS
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Get form data
        const templateParams = {
            name: document.getElementById('name').value,
            time: new Date().toLocaleString(),
            message: `Email: ${document.getElementById('email').value}\nSubject: ${document.getElementById('subject').value}\n\nMessage:\n${document.getElementById('message').value}`
        };

        // Send email via EmailJS
        emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                const successMessage = document.getElementById('successMessage');
                successMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                successMessage.classList.add('show');

                // Reset form
                contactForm.reset();

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                
                // Show error message
                const successMessage = document.getElementById('successMessage');
                successMessage.textContent = 'Failed to send message. Please try again or email me directly.';
                successMessage.style.backgroundColor = '#FEE2E2';
                successMessage.style.color = '#991B1B';
                successMessage.classList.add('show');

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Hide error message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                    successMessage.style.backgroundColor = '';
                    successMessage.style.color = '';
                }, 5000);
            });
    });
}

/**
 * 8. BACK TO TOP BUTTON
 */
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 9. INTERSECTION OBSERVER FOR ANIMATIONS (AOS alternative)
 */
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        const delay = element.dataset.aosDelay || '0';
        const delayValue = parseInt(delay) / 1000;
        element.style.transitionDelay = `${delayValue}s`;
        
        observer.observe(element);
    });
}

/**
 * 10. ANIMATE SKILL BARS ON SCROLL
 */
function initSkillBarsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateSkillBars();
                hasAnimated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (skillItems.length > 0) {
        observer.observe(skillItems[0]);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

/**
 * 11. LOADER ANIMATION
 */
function initLoader() {
    // Hide loader after 2 seconds
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000);
}

/**
 * 12. KEYBOARD ACCESSIBILITY
 */
function initKeyboardAccessibility() {
    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * 13. LAZY LOADING IMAGES
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * 14. PERFORMANCE: DEBOUNCE FUNCTION
 */
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * 15. RESIZE HANDLER
 */
function initResizeHandler() {
    window.addEventListener('resize', debounce(() => {
        // Handle resize events
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }, 250));
}

/**
 * 16. PAGE VISIBILITY API
 */
function initPageVisibility() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Page is hidden
            document.title = 'Come back! 👋';
        } else {
            // Page is visible
            document.title = 'Your Name - Professional Portfolio';
        }
    });
}

/**
 * 17. PREFETCH LINKS (Performance)
 */
function initPrefetch() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = link.href;
            document.head.appendChild(prefetchLink);
        });
    });
}

/**
 * 18. SCROLL PROGRESS INDICATOR
 */
function initScrollProgress() {
    window.addEventListener('scroll', debounce(() => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        // Can be used to update a progress bar if needed
    }, 100));
}

/**
 * 19. FORM INPUT FOCUS EFFECTS
 */
function initFormEffects() {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
}

/**
 * 20. POINTER MOVEMENT EFFECT (Optional)
 */
const pointerFollower = {
    x: 0,
    y: 0,
    init() {
        document.addEventListener('mousemove', (e) => {
            this.x = e.clientX;
            this.y = e.clientY;
        });
    }
};

/**
 * 6.5. CERTIFICATES SLIDER WITH AUTO-SCROLL
 */
let currentCertificate = 0;
let certificateAutoScrollInterval;

function initCertificatesSlider() {
    const certificateSections = document.querySelectorAll('.certificate-section');
    const totalCertificates = certificateSections.length;
    const wrapper = document.querySelector('.certificates-wrapper');

    if (!wrapper || totalCertificates === 0) return;

    function updateSlider() {
        const offset = -(currentCertificate * 100);
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    function autoScroll() {
        currentCertificate = (currentCertificate + 1) % totalCertificates;
        updateSlider();
    }

    // Pause auto-scroll on hover and resume on mouse leave
    const certificatesSection = document.getElementById('certificates');
    if (certificatesSection) {
        certificatesSection.addEventListener('mouseenter', () => {
            clearInterval(certificateAutoScrollInterval);
        });

        certificatesSection.addEventListener('mouseleave', () => {
            certificateAutoScrollInterval = setInterval(autoScroll, 2000);
        });
    }

    // Start auto-scroll
    certificateAutoScrollInterval = setInterval(autoScroll, 2000);
}

/**
 * INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initThemeToggle();
    initHamburgerMenu();
    initStickyNavbar();
    initSmoothScroll();
    renderProjects();
    renderCertificates();
    initCertificatesSlider();
    initContactForm();
    initBackToTop();
    initIntersectionObserver();
    initSkillBarsAnimation();
    initLoader();
    initKeyboardAccessibility();
    initLazyLoading();
    initResizeHandler();
    initPageVisibility();
    initPrefetch();
    initScrollProgress();
    initFormEffects();
    pointerFollower.init();

    // Log initialization complete
    console.log('✅ Portfolio website initialized successfully');
});

/**
 * ERROR HANDLING
 */
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

/* End of Script */

