// ============================================
// SPLASH SCREEN ANIMATION
// ============================================

// Add splash-active class to body
document.body.classList.add('splash-active');

// Splash screen timing
const splash1 = document.getElementById('splash1');
const splash2 = document.getElementById('splash2');
const splashScreen = document.getElementById('splashScreen');

// Show first splash (Mirza Usman) immediately
splash1.classList.add('active');

// After 4 seconds, fade out first splash and show second
setTimeout(() => {
    splash1.classList.add('fade-out-content');
    
    setTimeout(() => {
        splash1.style.display = 'none';
        splash2.classList.add('active');
    }, 800);
}, 4000);

// After 8 seconds total (4s + 4s), fade out entire splash screen
setTimeout(() => {
    splash2.classList.add('fade-out-content');
    
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        document.body.classList.remove('splash-active');
        
        // Remove splash screen from DOM after animation
        setTimeout(() => {
            splashScreen.remove();
        }, 800);
    }, 800);
}, 8000);

// Advanced Typing Animation
const texts = ['Penetration Tester', 'Network Security Expert', 'AI Engineer', '@Mirzacyberhub'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentText.length) {
        speed = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
    }
    
    setTimeout(type, speed);
}

setTimeout(type, 1000);

// Advanced Counter Animation
const counters = document.querySelectorAll('.num');

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + '+';
        }
    };
    
    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// Smooth Scroll with Offset
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

// Enhanced Form Submit
const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const subject = inputs[2].value;
        const message = inputs[3].value;
        
        const mailtoLink = `mailto:Mirzacyberhubpro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoLink;
        
        // Show success message
        const btn = form.querySelector('.btn');
        const originalText = btn.textContent;
        btn.textContent = 'Opening Email Client...';
        btn.style.background = 'linear-gradient(135deg, #00ff00, #00cc00)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            form.reset();
        }, 2000);
    });
}

// Advanced Navbar Scroll Effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll('.fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Fade In Animation on Scroll
const fadeElements = document.querySelectorAll('.feature, .tech-item, .project, .expertise .item');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    fadeObserver.observe(element);
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Interactive Cursor Effect (Desktop Only)
if (window.innerWidth > 968) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #00f5ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .btn, .role, .tool, .feature, .project');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = '#ff0844';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#00f5ff';
        });
    });
}

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#00f5ff';
        }
    });
});

// Preloader
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console Art
console.log('%c╔═══════════════════════════════════════╗', 'color: #00f5ff; font-weight: bold;');
console.log('%c║     MIRZACYBERHUB PORTFOLIO v2.0     ║', 'color: #00f5ff; font-weight: bold;');
console.log('%c╚═══════════════════════════════════════╝', 'color: #00f5ff; font-weight: bold;');
console.log('%c', 'font-size: 1px; padding: 20px 100px; background: linear-gradient(135deg, #00f5ff, #ff0844);');
console.log('%c💎 Elite Cybersecurity & AI Engineering', 'color: #ff0844; font-size: 14px; font-weight: bold;');
console.log('%c📧 Contact: Mirzacyberhubpro@gmail.com', 'color: #b537f2; font-size: 12px;');
console.log('%c📱 Phone: +92 300 0892114', 'color: #b537f2; font-size: 12px;');
console.log('%c⚠️  Unauthorized access is monitored', 'color: #ff0844; font-size: 11px;');

// Easter Egg - Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: #00ff00; font-size: 20px; font-weight: bold;');
    }
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'color: #00f5ff; font-size: 12px;');
        }, 0);
    });
}

// Accessibility - Skip to Content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #00f5ff;
    color: #0a0e27;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

console.log('%c✅ All systems operational', 'color: #00ff00; font-size: 12px; font-weight: bold;');


// ============================================
// FREE VISITOR ANALYTICS & TRACKING
// ============================================

// Track visitor information using free APIs
async function trackVisitor() {
    try {
        // Get visitor IP and location info (Free API)
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Display IP address
        document.getElementById('userIP').textContent = data.ip || 'Unknown';
        
        // Display location
        const location = `${data.city || ''}, ${data.country_name || 'Unknown'}`;
        document.getElementById('userLocation').textContent = location;
        
        // Store visitor data in localStorage
        storeVisitorData(data);
        
        // Log visitor info (for debugging)
        console.log('Visitor Info:', {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            timezone: data.timezone,
            browser: navigator.userAgent,
            language: navigator.language,
            screen: `${screen.width}x${screen.height}`,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('Error tracking visitor:', error);
        document.getElementById('userIP').textContent = 'Private';
        document.getElementById('userLocation').textContent = 'Unknown';
    }
}

// Store and count visits
function storeVisitorData(data) {
    // Get existing visit count
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    
    // Display visit count
    document.getElementById('totalVisits').textContent = visitCount;
    
    // Store last visit time
    const lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const now = new Date();
        const diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            document.getElementById('lastVisit').textContent = 'Today';
        } else if (diffDays === 1) {
            document.getElementById('lastVisit').textContent = 'Yesterday';
        } else {
            document.getElementById('lastVisit').textContent = `${diffDays} days ago`;
        }
    }
    
    localStorage.setItem('lastVisit', new Date().toISOString());
    
    // Store visitor history
    let visitorHistory = JSON.parse(localStorage.getItem('visitorHistory') || '[]');
    visitorHistory.push({
        timestamp: new Date().toISOString(),
        ip: data.ip,
        location: `${data.city}, ${data.country_name}`,
        page: window.location.pathname,
        referrer: document.referrer || 'Direct'
    });
    
    // Keep only last 50 visits
    if (visitorHistory.length > 50) {
        visitorHistory = visitorHistory.slice(-50);
    }
    
    localStorage.setItem('visitorHistory', JSON.stringify(visitorHistory));
}

// Track page views and time spent
let pageStartTime = Date.now();
let pageViews = parseInt(localStorage.getItem('pageViews') || '0') + 1;
localStorage.setItem('pageViews', pageViews);

// Track time on page
window.addEventListener('beforeunload', () => {
    const timeSpent = Math.floor((Date.now() - pageStartTime) / 1000);
    let totalTime = parseInt(localStorage.getItem('totalTimeSpent') || '0');
    totalTime += timeSpent;
    localStorage.setItem('totalTimeSpent', totalTime);
    
    console.log(`Time spent on page: ${timeSpent} seconds`);
    console.log(`Total time spent: ${totalTime} seconds`);
});

// Track clicks and interactions
let clickCount = 0;
document.addEventListener('click', (e) => {
    clickCount++;
    
    // Log important clicks
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        console.log('Click tracked:', {
            element: e.target.tagName,
            text: e.target.textContent,
            href: e.target.href || 'N/A',
            timestamp: new Date().toISOString()
        });
    }
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = Math.floor(scrollPercent);
        
        // Log milestone scrolls
        if (maxScroll % 25 === 0 && maxScroll > 0) {
            console.log(`Scroll depth: ${maxScroll}%`);
        }
    }
});

// Get device information
function getDeviceInfo() {
    const ua = navigator.userAgent;
    let device = 'Desktop';
    
    if (/mobile/i.test(ua)) device = 'Mobile';
    else if (/tablet/i.test(ua)) device = 'Tablet';
    
    return {
        device: device,
        browser: getBrowserName(),
        os: getOSName(),
        screen: `${screen.width}x${screen.height}`,
        language: navigator.language,
        online: navigator.onLine
    };
}

function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    return 'Unknown';
}

function getOSName() {
    const ua = navigator.userAgent;
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'MacOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS')) return 'iOS';
    return 'Unknown';
}

// Initialize tracking when page loads
window.addEventListener('load', () => {
    trackVisitor();
    
    const deviceInfo = getDeviceInfo();
    console.log('Device Info:', deviceInfo);
    
    // Send analytics event (if using Google Analytics)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
});

// Export analytics data (for admin use)
function exportAnalytics() {
    const analytics = {
        visitCount: localStorage.getItem('visitCount'),
        pageViews: localStorage.getItem('pageViews'),
        totalTimeSpent: localStorage.getItem('totalTimeSpent'),
        lastVisit: localStorage.getItem('lastVisit'),
        visitorHistory: JSON.parse(localStorage.getItem('visitorHistory') || '[]'),
        deviceInfo: getDeviceInfo()
    };
    
    console.log('Analytics Data:', analytics);
    
    // Download as JSON
    const dataStr = JSON.stringify(analytics, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'analytics-data.json';
    link.click();
}

// Make exportAnalytics available globally
window.exportAnalytics = exportAnalytics;

console.log('%c📊 Analytics Tracking Active', 'color: #ff0000; font-size: 14px; font-weight: bold;');
console.log('%cType exportAnalytics() in console to download your analytics data', 'color: #ff3333; font-size: 12px;');
