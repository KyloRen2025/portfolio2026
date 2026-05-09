/**
 * Modernized Portfolio Scripts - Mamadou Mouctar Diallo 2026
 */

window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fonction de réduction de la Navbar
    const navbarCollapsible = document.body.querySelector('#mainNav');
    
    const navbarShrink = () => {
        if (!navbarCollapsible) return;

        // On ajoute la classe si on a scrollé de plus de 50px pour un effet plus fluide
        if (window.scrollY <= 50) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Exécution initiale
    navbarShrink();

    // Utilisation d'un écouteur passif pour de meilleures performances au scroll
    document.addEventListener('scroll', navbarShrink, { passive: true });

    // 2. Initialisation du ScrollSpy de Bootstrap
    if (navbarCollapsible) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // 3. Gestion intelligente du menu mobile (Collapse)
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // On vérifie si le bouton "hamburger" est visible (mode mobile)
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // 4. Bonus : Smooth Scroll pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});