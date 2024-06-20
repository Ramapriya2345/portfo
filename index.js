let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

console.log(menuIcon);
console.log(navbar);
console.log(sections);
console.log(navLinks);
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight - 150) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + sectionId + '"]').classList.add('active');
        }
    });
});


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

