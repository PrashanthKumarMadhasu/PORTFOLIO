const typed = new Typed('.multineText', {
    strings: ['Software Engineer', 'Python Developer','Frontend Developer','Mobile App Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('#header', { origin: 'top' });

ScrollReveal().reveal('.home-img, .more-info,.skills,#education,#skills,#projects', { origin: 'bottom' });
ScrollReveal().reveal('.header-text h2 ,.about-col-1,.contact-left', { origin: 'left' });
ScrollReveal().reveal('.contact-right, .about-col-2', { origin: 'right' })
