# Vyankateshwar Santosh Pund - Python & Django Developer Portfolio

A production-ready, ultra-modern Glassmorphic Personal Portfolio website built with pure **HTML5**, **CSS3**, and **JavaScript** (ES6+). Zero server-side runtime dependencies required.

---

## 🚀 Features

- **Pure HTML, CSS, and JS**: Runs directly in any web browser by opening `index.html` or deploying to GitHub Pages, Vercel, Netlify, or any static host.
- **Python & Django Focus**: Tailored messaging highlighting Python 3, Django, Django REST Framework, and MySQL.
- **Glassmorphism Theme System**: Complete Dark / Light mode toggle powered by CSS custom properties and persistent `localStorage`.
- **Canvas Particles Background**: Interactive particle physics animation with dynamic node lines.
- **Typewriter Effect**: Smooth animated role transitions.
- **Count-Up Stat Animations**: Metric counters triggering on viewport intersection.
- **Interactive Project Filtering**: Instant client-side search and category filtering with zero page reloads.
- **Project Likes & State Persistence**: Like buttons with localStorage state retention.
- **Verified ATS Resume Viewer**: Direct PDF viewer with download & print controls.
- **Verified Credentials Showcase**: 5 certificates (SIH 2026, Python, MySQL, Git, HTML/CSS) with fullscreen modal lightboxes.
- **Interactive Contact Form**: Real-time form validation, loading spinner state, local message logging, and success feedback.
- **GitHub API Integration**: Real-time repo and follower statistics fetched from GitHub API.
- **PWA Ready**: Web app manifest and high-resolution icons included.

---

## 📁 File Structure

```text
E:\My_Permnemt_Portfolio\
│
├── index.html                                                      # Home page (Hero, Stats, Featured Projects, Tech stack, Endorsements)
├── about.html                                                      # About Me, Education & Internship Timeline (Python & Django Focus)
├── skills.html                                                     # Technical Skills & Recruiter Metrics
├── projects.html                                                   # Complete Projects Showcase with Live Filter & Search
├── services.html                                                   # Engineering Services Showcase
├── certificates.html                                               # Certifications & Credentials (SIH 2026, Python, MySQL, Git, HTML/CSS)
├── gallery.html                                                    # Visual Portfolio Gallery with Modal Lightboxes
├── resume.html                                                     # Verified ATS PDF Resume Viewer & Direct Download
├── contact.html                                                    # Contact & Message Form with Validation
├── achievements.html                                               # Honors, Smart India Hackathon & Competitions
│
├── project-student-management-system-rest-api.html                 # Student Management System REST API Case Study
├── project-e-commerce-web-application.html                         # E-Commerce Web App Case Study
├── project-enterprise-software-engineer-portfolio-analytics.html   # Enterprise Portfolio & Analytics Case Study
├── project-technova-bootstrap-website.html                         # TechNova Bootstrap 5 Responsive Landing Page Case Study
│
├── projects/                                                       # Subfolder mirror links
│   ├── student-management-system-rest-api.html
│   ├── e-commerce-web-application.html
│   ├── enterprise-software-engineer-portfolio-analytics.html
│   └── technova-bootstrap-website.html
│
├── static/
│   ├── css/
│   │   └── style.css                                               # Glassmorphic responsive stylesheet
│   ├── js/
│   │   ├── main.js                                                 # Core UI, Theme, Filters, Likes, Forms, Particles
│   │   └── github.js                                               # GitHub Public API stats integration
│   ├── images/
│   │   ├── icon-192.png                                            # PWA app icon (192x192)
│   │   └── icon-512.png                                            # PWA app icon (512x512)
│   └── manifest.json                                               # Web app manifest
│
└── media/
    ├── profile/
    │   └── vyankateshwar_profile.jpg                               # Profile photo
    ├── certificates/                                               # High-res verified certificates
    │   ├── smart-india-hackathon-2026.jpg
    │   ├── python-certificate-ccit.jpg
    │   ├── mysql-certificate-ccit.jpg
    │   ├── github-certificate-ccit.jpg
    │   └── html-css-certificate-ccit.jpg
    └── resume/
        └── Vyankateshwar_Pund_Resume_Fullstack_Devloper.pdf               # Verified ATS PDF resume
```

---

## ⚡ How to Run

### Method 1: Direct File Opening
Double-click [index.html](index.html) to open directly in any browser (Chrome, Edge, Firefox, Safari).

### Method 2: Python Static Server
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000/`

### Method 3: VS Code Live Server / Node
Right-click `index.html` and choose **"Open with Live Server"**, or run:
```bash
npx serve
```
