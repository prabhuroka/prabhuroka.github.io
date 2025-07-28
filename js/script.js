// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Bootstrap tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// YouTube Modal Handler - Improved version
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const youtubeModal = document.getElementById('youtubeModal');
    const youtubeFrame = document.getElementById('youtubeFrame');
    const demoButtons = document.querySelectorAll('.watch-demo');
    
    // Only proceed if elements exist
    if (youtubeModal && youtubeFrame && demoButtons.length > 0) {
        // Create modal instance once
        const modal = new bootstrap.Modal(youtubeModal);
        
        // Add click event to each button
        demoButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const videoId = this.getAttribute('data-video-id');
                
                if (videoId) {
                    // Clear previous video
                    youtubeFrame.src = '';
                    
                    // Set new video source with parameters
                    youtubeFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`;
                    
                    // Show the modal
                    modal.show();
                }
            });
        });
        
        // Reset video when modal closes
        youtubeModal.addEventListener('hidden.bs.modal', function() {
            // Stop the video completely
            youtubeFrame.src = '';
            
            const iframe = youtubeFrame;
            iframe.setAttribute('src', '');
            iframe.removeAttribute('src');
        });
        
        youtubeModal.addEventListener('hide.bs.modal', function() {
            if (youtubeFrame.src) {
                youtubeFrame.src += '&enablejsapi=1';
            }
        });
    }
});

// Smooth scroll offset for fixed navbar - Improved version
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Collapse mobile menu after clicking
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        }
    });
});

// Form submission handling (for Netlify forms)
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
    });
}
