document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate only once per element
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Abstract Shape Mouse Move Parallax (Hero Visual)
    const abstractShape = document.querySelector('.abstract-shape');
    if (abstractShape) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            
            abstractShape.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // Form submission prevent default
    const form = document.querySelector('.cta-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input').value;
            if(input) {
                alert('Agradecemos o interesse! Um de nossos estrategistas entrará em contato em breve.');
                form.reset();
            }
        });
    }

    // Mobile Menu Toggle (Basic implementation)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            if (!isFlex) {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '5%';
                navLinks.style.right = '5%';
                navLinks.style.transform = 'none';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = 'rgba(18, 18, 18, 0.95)';
                navLinks.style.padding = '2rem';
            } else {
                navLinks.style = '';
            }
        });
    }
});
