document.addEventListener('DOMContentLoaded', function() {
    const servicesCards = document.querySelectorAll('.services-card');
    const mission = document.querySelector('.mission');
    const vision = document.querySelector('.vision');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.1 });

    servicesCards.forEach(card => {
        observer.observe(card);
    });

    observer.observe(mission);
    observer.observe(vision);
});

