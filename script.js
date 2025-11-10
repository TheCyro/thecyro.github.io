document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleButton.querySelector('i');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.removeItem('theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // --- Smooth Scrolling for Nav Links ---
    const navLinks = document.querySelectorAll('header .nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Swiper JS Initialization ---
    const slides = document.querySelectorAll('.project-slider .swiper-slide');
    const middleSlide = Math.floor(slides.length / 2);
    const swiper = new Swiper('.project-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: middleSlide,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});