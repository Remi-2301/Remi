// Interactive elements for Remi's website

document.addEventListener('DOMContentLoaded', function() {
    // Create a smooth fade-in effect for the page with dark grungy style
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
    
    // Add hover sound effects for link cards (commented out by default)
    // const linkCards = document.querySelectorAll('.link-card');
    // const hoverSound = new Audio('hover-sound.mp3');
    
    // linkCards.forEach(card => {
    //     card.addEventListener('mouseenter', () => {
    //         hoverSound.currentTime = 0;
    //         hoverSound.play();
    //     });
    // });

    // Add scroll reveal animation
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add theme toggle functionality (if desired in the future)
    // const themeToggle = document.createElement('button');
    // themeToggle.id = 'theme-toggle';
    // themeToggle.innerHTML = '🌙';
    // document.body.appendChild(themeToggle);
    
    // themeToggle.addEventListener('click', () => {
    //     document.body.classList.toggle('dark-mode');
    //     themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    // });
});
