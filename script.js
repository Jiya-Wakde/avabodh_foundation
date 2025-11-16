    // small JS interactions: mobile nav, form submit, donate click
document.getElementById('yr').textContent = new Date().getFullYear();

// mobile menu toggler (simple)
const hamb = document.getElementById('hamb');
hamb && hamb.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    if (nav.style.display === 'flex') {
    nav.style.display = '';
    } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.right = '22px';
    nav.style.background = 'white';
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
    nav.style.boxShadow = 'var(--shadow)';
    }
});

// Contact form - simple demo handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg').value.trim();
    if (!name || !email || !msg) { alert('Please fill all fields.'); return; }
    // Update: replace with real form action (Netlify Forms / Formspree / your backend)
    alert('Thanks, ' + name + '! Your message has been received. (This demo form is static — connect it to your email handler to receive messages.)');
    this.reset();
});

// Donate button sample behaviour (scroll to contact)
document.getElementById('donateBtn').addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});

// Hero watch (open first documentary)
document.getElementById('watchHero').addEventListener('click', function () {
    window.open('https://www.youtube.com/watch?v=ysz5S6PUM-U', '_blank', 'noopener');
});

// Simple smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if (href.length>1){
        const el = document.querySelector(href);
        if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    }
    })
});