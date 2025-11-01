// ============================================
// MIRZA USMAN PORTFOLIO - CYBER THEME
// ============================================

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
});

// Typing Animation
const typingTexts = [
    'Penetration Tester',
    'Network Security Expert',
    'AI Engineer',
    'J.A.R.V.I.S Creator',
    '@Mirzacyberhub'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function type() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        speed = 500;
    }
    
    setTimeout(type, speed);
}

setTimeout(type, 1000);

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Counter Animation
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Intersection Observer for Counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(counter => {
    counterObserver.observe(counter);
});

// Skill Bar Animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width + '%';
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress-fill').forEach(bar => {
    skillObserver.observe(bar);
});

// Fade In Animation
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-in');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.expertise-item, .feature-category, .tech-card').forEach(element => {
    fadeObserver.observe(element);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('input, textarea');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const subject = inputs[2].value;
        const message = inputs[3].value;
        
        const mailtoLink = `mailto:Mirzacyberhubpro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoLink;
        
        const btn = contactForm.querySelector('.btn');
        const originalText = btn.querySelector('span').textContent;
        btn.querySelector('span').textContent = 'SENDING...';
        
        setTimeout(() => {
            btn.querySelector('span').textContent = originalText;
            contactForm.reset();
        }, 2000);
    });
}

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Cyber Particles Effect
function createParticles() {
    const particlesContainer = document.querySelector('.cyber-particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
        }
        50% {
            transform: translateY(-100px) translateX(50px);
        }
        100% {
            transform: translateY(0) translateX(0);
        }
    }
`;
document.head.appendChild(style);

createParticles();

// Console Art
console.log('%c╔═══════════════════════════════════════╗', 'color: #00ff41; font-weight: bold;');
console.log('%c║   MIRZA USMAN - CYBER PORTFOLIO      ║', 'color: #00ff41; font-weight: bold;');
console.log('%c╚═══════════════════════════════════════╝', 'color: #00ff41; font-weight: bold;');
console.log('%c🔐 Elite Cybersecurity Specialist', 'color: #0ff; font-size: 14px;');
console.log('%c📧 Mirzacyberhubpro@gmail.com', 'color: #0ff; font-size: 12px;');
console.log('%c📱 +92 301 7623503', 'color: #0ff; font-size: 12px;');

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'color: #00ff41; font-size: 12px;');
        }, 0);
    });
}

console.log('%c✅ System Initialized', 'color: #00ff41; font-size: 12px; font-weight: bold;');

