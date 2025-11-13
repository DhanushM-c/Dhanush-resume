// Simple navigation for resume website
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and pages
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked link and corresponding page
            this.classList.add('active');
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top when navigating
            window.scrollTo(0, 0);
        });
    });
});