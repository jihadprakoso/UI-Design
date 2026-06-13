document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
        offset: 60
    });

    // Smooth scroll for nav pills
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // Animate progress bars in hero on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.transition = 'width 1.2s ease';
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => observer.observe(bar));
});
