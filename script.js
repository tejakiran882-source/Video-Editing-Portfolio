// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "Commercial Advertisement",
        category: "commercial",
        description: "A high-energy commercial for a tech startup featuring dynamic cuts and vibrant color grading.",
        thumbnail: "https://via.placeholder.com/800x450/6366f1/ffffff?text=Commercial+Video",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Commercial", "Color Grading", "Motion Graphics"]
    },
    {
        id: 2,
        title: "Music Video - Indie Rock",
        category: "music",
        description: "Creative music video with experimental editing techniques and synchronized visuals.",
        thumbnail: "https://via.placeholder.com/800x450/8b5cf6/ffffff?text=Music+Video",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Music Video", "Creative Editing", "Visual Effects"]
    },
    {
        id: 3,
        title: "Corporate Presentation",
        category: "corporate",
        description: "Professional corporate video with clean editing and informative graphics.",
        thumbnail: "https://via.placeholder.com/800x450/4facfe/ffffff?text=Corporate+Video",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Corporate", "Clean Edit", "Graphics"]
    },
    {
        id: 4,
        title: "Wedding Highlights",
        category: "wedding",
        description: "Beautiful wedding highlights with emotional storytelling and cinematic color grading.",
        thumbnail: "https://via.placeholder.com/800x450/f5576c/ffffff?text=Wedding+Video",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Wedding", "Cinematic", "Storytelling"]
    },
    {
        id: 5,
        title: "Short Film - Drama",
        category: "short-film",
        description: "Award-winning short film with dramatic pacing and atmospheric editing.",
        thumbnail: "https://via.placeholder.com/800x450/f093fb/ffffff?text=Short+Film",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Short Film", "Drama", "Award Winner"]
    },
    {
        id: 6,
        title: "Product Launch Video",
        category: "commercial",
        description: "Exciting product launch video with modern motion graphics and sleek transitions.",
        thumbnail: "https://via.placeholder.com/800x450/00f2fe/ffffff?text=Product+Launch",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Commercial", "Motion Graphics", "Product"]
    },
    {
        id: 7,
        title: "Hip-Hop Music Video",
        category: "music",
        description: "Urban music video with fast-paced editing and dynamic camera movements.",
        thumbnail: "https://via.placeholder.com/800x450/764ba2/ffffff?text=Hip-Hop+Video",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Music Video", "Hip-Hop", "Fast-Paced"]
    },
    {
        id: 8,
        title: "Company Overview",
        category: "corporate",
        description: "Comprehensive company overview video with professional narration and graphics.",
        thumbnail: "https://via.placeholder.com/800x450/667eea/ffffff?text=Company+Video",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
        tags: ["Corporate", "Professional", "Narration"]
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioGrid = document.getElementById('portfolioGrid');
const videoModal = document.getElementById('videoModal');
const modalClose = document.querySelector('.modal-close');
const modalVideo = document.getElementById('modalVideo');
const modalInfo = document.getElementById('modalInfo');
const contactForm = document.getElementById('contactForm');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Portfolio Filter
let currentFilter = 'all';

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Update current filter
        currentFilter = button.getAttribute('data-filter');
        // Filter portfolio items
        filterPortfolio(currentFilter);
    });
});

function filterPortfolio(filter) {
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            // Add animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        } else {
            item.classList.add('hidden');
        }
    });
}

// Render Portfolio Items
function renderPortfolio() {
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-thumbnail">
                <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                <div class="play-overlay">
                    <svg viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
            <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openModal(item));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Open Video Modal
function openModal(item) {
    modalVideo.innerHTML = `
        <iframe 
            src="${item.videoUrl}?autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    modalInfo.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="portfolio-tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Video Modal
function closeModal() {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    // Clear video to stop playback
    modalVideo.innerHTML = '';
}

modalClose.addEventListener('click', closeModal);

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeModal();
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.portfolio-item, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Initialize Portfolio
renderPortfolio();

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

