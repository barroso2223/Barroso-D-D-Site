// Scroll animation observer
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('observed');
        }
      });
    }, { threshold: 0.25 });
  
    document.querySelectorAll('[class*="reveal"]').forEach(el => {
      if (!CSS.supports('animation-timeline', 'view()')) {
        observer.observe(el);
      }
    });
  }
  
  // Initialize when DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
  });