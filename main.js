// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-phone')


var isScrollDisabled = false;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Toggle the scroll state
    isScrollDisabled = !isScrollDisabled;

    // Disable or enable scrolling based on the scroll state
    if (isScrollDisabled) {
        // Disable scrolling
        console.log('Disabling scrolling');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
        // Enable scrolling
        console.log('Enabling scrolling');
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
        
    }
});


// this is for the animation of the menu

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    }));
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer2.observe(el));