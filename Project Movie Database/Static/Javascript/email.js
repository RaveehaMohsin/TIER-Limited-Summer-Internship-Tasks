document.addEventListener('DOMContentLoaded', () => {
    // Extract email from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (email) {
        const links = document.querySelectorAll('.navbar-nav .nav-link');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && link.id !== 'logout') { // Skip internal links
                link.setAttribute('href', `${href}?email=${email}`);
            }
        });
    }
});

