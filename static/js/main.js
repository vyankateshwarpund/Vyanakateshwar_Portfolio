// Production Main JavaScript Controller - Pure Static Client-Side
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavbar();
    initTheme();
    initTypewriter();
    initParticles();
    initCustomCursor();
    initBackToTop();
    initCountUp();
    initContactForm();
    initProjectLike();
    initProjectFilter();
    initResumeTracker();
});

// Preloader Screen Handler
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 700);
}


// Professional Responsive Navbar Controller
function initNavbar() {
    const navbar = document.querySelector('.navbar-floating');
    const navCollapse = document.getElementById('portfolioNavbar');
    const toggler = document.querySelector('.navbar-toggler');
    if (!navbar) return;

    // 1. Scroll elevation state
    const handleScroll = () => {
        if (window.scrollY > 30) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Auto-close mobile navbar on clicking any nav link
    if (navCollapse) {
        const navLinks = navCollapse.querySelectorAll('.nav-link, .btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navCollapse.classList.contains('show') && window.bootstrap) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
                    bsCollapse.hide();
                }
            });
        });

        // 3. Auto-close mobile navbar when clicking outside
        document.addEventListener('click', (e) => {
            if (navCollapse.classList.contains('show') && !navbar.contains(e.target)) {
                if (window.bootstrap) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
                    bsCollapse.hide();
                }
            }
        });
    }
}

// Theme Switcher (Dark/Light Mode)
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('vp_theme') || 'dark';

    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'dark';
            if (currentTheme === 'dark') {
                newTheme = 'light';
                themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
            } else {
                themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
            }
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('vp_theme', newTheme);
        });
    }
}

// Typewriter Effect
function initTypewriter() {
    const element = document.getElementById('typewriter-text');
    if (!element) return;

    const roles = [
        "Python Developer",
        "Django Developer",
        "Python Full Stack Developer",
        "Django REST API Specialist"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            element.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }
    type();
}

// Particles Canvas Background
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 22), 55);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        ctx.fillStyle = isLight ? 'rgba(79, 70, 229, 0.35)' : 'rgba(168, 85, 247, 0.4)';
        ctx.strokeStyle = isLight ? 'rgba(79, 70, 229, 0.08)' : 'rgba(99, 102, 241, 0.12)';

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// Custom Cursor Tracker
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    if (!cursor || !cursorDot) return;

    // Disable custom cursor on touch devices for native touch ergonomics
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
        return;
    }

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });
}

// Back to top button
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Count-Up Scroll Animation
function initCountUp() {
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalVal = parseInt(target.getAttribute('data-target') || '0', 10);
                const duration = 1500;
                const startTime = performance.now();

                function updateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const currentVal = Math.floor(progress * finalVal);
                    target.textContent = currentVal + (target.getAttribute('data-suffix') || '');

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = finalVal + (target.getAttribute('data-suffix') || '');
                    }
                }
                requestAnimationFrame(updateCount);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Client-Side Contact Form Handler
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const alertBox = document.getElementById('contact-alert');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '<i class="bi bi-send-fill me-2"></i> Send Message';

    // Real-time validation
    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('is-invalid')) validateField(field);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;
        form.querySelectorAll('input[required], textarea[required]').forEach(field => {
            if (!validateField(field)) isValid = false;
        });

        if (!isValid) {
            showAlert('error', '⚠️ Please complete all required fields correctly.');
            return;
        }

        // Show loading state
        setLoading(true);
        hideAlert();

        const name = form.querySelector('[name="name"]')?.value.trim() || 'Friend';
        const email = form.querySelector('[name="email"]')?.value.trim() || '';
        const subject = form.querySelector('[name="subject"]')?.value.trim() || 'Portfolio Inquiry';
        const message = form.querySelector('[name="message"]')?.value.trim() || '';

        // Prepare FormData for Web3Forms API
        const formData = new FormData(form);

        // Also save copy to local storage
        try {
            const savedMessages = JSON.parse(localStorage.getItem('vp_contact_messages') || '[]');
            savedMessages.push({
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('vp_contact_messages', JSON.stringify(savedMessages));
        } catch (storageErr) {
            console.warn('LocalStorage save skipped:', storageErr);
        }

        // Send real email via Web3Forms API
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.status === 200 && result.success) {
                showAlert('success', `✅ Thank you, ${name}! Your email has been delivered directly to Vyankateshwar's inbox. I will reply to you shortly at ${email}.`);
                form.reset();
                clearAllValidation();
            } else {
                showAlert('error', `❌ ${result.message || 'Unable to deliver message. Please reach out directly at pundvyankateshwar@gmail.com or via WhatsApp.'}`);
            }
        } catch (networkError) {
            console.error('Web3Forms submission error:', networkError);
            showAlert('error', '❌ Network error sending message. Please email directly at pundvyankateshwar@gmail.com or use WhatsApp.');
        } finally {
            setLoading(false);
        }
    });

    function validateField(field) {
        const value = field.value.trim();
        if (!value) {
            markInvalid(field, `${getFieldLabel(field)} is required.`);
            return false;
        }
        if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            markInvalid(field, 'Please enter a valid email address.');
            return false;
        }
        markValid(field);
        return true;
    }

    function getFieldLabel(field) {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label) return label.textContent.replace('*', '').trim();
        const name = field.getAttribute('name') || '';
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function markInvalid(field, message) {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
        let feedback = field.nextElementSibling;
        if (!feedback || !feedback.classList.contains('invalid-feedback')) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            field.parentNode.insertBefore(feedback, field.nextSibling);
        }
        feedback.textContent = message;
    }

    function markValid(field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        const feedback = field.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = '';
        }
    }

    function clearAllValidation() {
        form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
        });
        form.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
    }

    function setLoading(loading) {
        if (!submitBtn) return;
        submitBtn.disabled = loading;
        submitBtn.innerHTML = loading
            ? '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending...'
            : originalBtnHTML;
    }

    function showAlert(type, message) {
        if (!alertBox) return;
        alertBox.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mb-4`;
        alertBox.textContent = message;
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function hideAlert() {
        if (!alertBox) return;
        alertBox.className = 'd-none mb-4';
        alertBox.textContent = '';
    }
}

// Client-Side Project Like System with Local Storage
function initProjectLike() {
    const likedProjects = JSON.parse(localStorage.getItem('vp_liked_projects') || '{}');

    document.querySelectorAll('.btn-like-project').forEach(btn => {
        const projectId = btn.getAttribute('data-project-id') || '1';
        const countSpan = btn.querySelector('.likes-count');
        const initialCount = parseInt(countSpan ? countSpan.textContent : '38', 10);

        // Restore saved count if any
        const savedCount = localStorage.getItem(`vp_project_likes_${projectId}`);
        if (savedCount && countSpan) {
            countSpan.textContent = savedCount;
        }

        if (likedProjects[projectId]) {
            btn.classList.add('text-danger');
        }

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const currentLikes = parseInt(countSpan ? countSpan.textContent : '0', 10);

            if (!likedProjects[projectId]) {
                const newLikes = currentLikes + 1;
                if (countSpan) countSpan.textContent = newLikes;
                likedProjects[projectId] = true;
                localStorage.setItem(`vp_project_likes_${projectId}`, newLikes);
                localStorage.setItem('vp_liked_projects', JSON.stringify(likedProjects));
                btn.classList.add('text-danger');
            } else {
                const newLikes = Math.max(initialCount, currentLikes - 1);
                if (countSpan) countSpan.textContent = newLikes;
                delete likedProjects[projectId];
                localStorage.setItem(`vp_project_likes_${projectId}`, newLikes);
                localStorage.setItem('vp_liked_projects', JSON.stringify(likedProjects));
                btn.classList.remove('text-danger');
            }
        });
    });
}

// Live Interactive Project Filter & Search (projects.html)
function initProjectFilter() {
    const searchInput = document.getElementById('project-search-input');
    const categorySelect = document.getElementById('project-category-select');
    const filterForm = document.getElementById('project-filter-form');
    const resetBtn = document.getElementById('btn-reset-filters');
    const cards = document.querySelectorAll('.project-card-item');
    const noProjectsMsg = document.getElementById('no-projects-msg');

    if (!cards.length) return;

    function applyFilter() {
        const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
        const selectedCat = (categorySelect ? categorySelect.value : '').toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
            const title = (card.getAttribute('data-title') || '').toLowerCase();
            const tech = (card.getAttribute('data-tech') || '').toLowerCase();
            const textContent = card.textContent.toLowerCase();

            const matchesCategory = !selectedCat || cardCat === selectedCat;
            const matchesQuery = !query || title.includes(query) || tech.includes(query) || textContent.includes(query);

            if (matchesCategory && matchesQuery) {
                card.classList.remove('d-none');
                visibleCount++;
            } else {
                card.classList.add('d-none');
            }
        });

        if (noProjectsMsg) {
            if (visibleCount === 0) {
                noProjectsMsg.classList.remove('d-none');
            } else {
                noProjectsMsg.classList.add('d-none');
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilter);
    }
    if (categorySelect) {
        categorySelect.addEventListener('change', applyFilter);
    }
    if (filterForm) {
        filterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            applyFilter();
        });
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (categorySelect) categorySelect.value = '';
            applyFilter();
        });
    }
}

// Resume Download Tracker
function initResumeTracker() {
    const downloadBtn = document.getElementById('resume-download-btn');
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', () => {
        const count = parseInt(localStorage.getItem('vp_resume_downloads') || '34', 10) + 1;
        localStorage.setItem('vp_resume_downloads', count);
    });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
