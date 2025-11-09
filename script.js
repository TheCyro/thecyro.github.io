document.addEventListener('DOMContentLoaded', () => {
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

    // Get the total number of slides
    const slides = document.querySelectorAll('.project-slider .swiper-slide');
    const middleSlide = Math.floor(slides.length / 2);

    const swiper = new Swiper('.project-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: middleSlide, // Set the initial slide to the middle one
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

    // The line to snap to the first slide is no longer needed
    // swiper.slideToLoop(0, 0);
});