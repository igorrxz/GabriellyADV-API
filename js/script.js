// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

// Smooth scroll for CTA buttons
function setupCTAButtons() {
    const ctaButtons = document.querySelectorAll('#ctaButton, #ctaButtonFinal');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
            
            alert('Redirecionando para inscrição...');
        });
    });
}

// Initialize animations
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    revealOnScroll();
    setupCTAButtons();
});

// Parallax effect for HeroSection background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('section'); // seleciona a HeroSection
    const speed = scrolled * 0.5;
    
    if (hero) {
        // Apenas altera a posição do background, sem usar transform
        hero.style.backgroundPosition = `center ${speed}px`;
    }
});
