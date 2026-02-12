document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        navUl.classList.toggle('active');
        
        // Toggle icon between hamburger and close
        const icon = menuBtn.querySelector('i');
        if (navUl.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});
