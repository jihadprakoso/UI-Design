document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
        offset: 60
    });

    // Smooth scroll for nav pills (skip-link keeps native behaviour for focus handling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href === '#' || anchor.classList.contains('skip-link')) return;
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
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

    // Apply bar heights declared via data-height (keeps markup PHP-free)
    document.querySelectorAll('.dash-bar[data-height]').forEach(bar => {
        const height = parseInt(bar.dataset.height, 10);
        if (!isNaN(height)) {
            bar.style.height = height + '%';
        }
        bar.setAttribute('aria-hidden', 'true');
    });

    // Fill footer year dynamically
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
