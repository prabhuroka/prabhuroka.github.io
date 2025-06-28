// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// YouTube Modal Handler
document.querySelectorAll('.watch-demo').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const videoId = this.getAttribute('data-video-id');
      const iframe = document.getElementById('youtubeFrame');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      
      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('youtubeModal'));
      modal.show();
    });
  });
  
  // Reset video when modal closes
  document.getElementById('youtubeModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('youtubeFrame').src = '';
  });

// Smooth scroll offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Collapse mobile menu after clicking
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

// Form submission handling (for Netlify forms)
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        // You can add form validation here
        // For Netlify, the default behavior works automatically
    });
}