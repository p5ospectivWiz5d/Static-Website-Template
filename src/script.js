window.addEventListener('scroll', () => {
    const image = document.querySelector('.scroll-opacity');
    const contentContainer = document.querySelector('.content-container');
    const scrollY = window.scrollY;
    const maxScroll = (document.documentElement.scrollHeight - window.innerHeight) / 9; // Halve the scroll distance

    const opacity = 1 - (scrollY / maxScroll);

    // Ensure opacity does not go below 0
    image.style.opacity = Math.max(opacity, 0);

    // Make the text container visible as the image fades out
    contentContainer.style.opacity = Math.min(1, scrollY / maxScroll);
}); 

document.addEventListener('DOMContentLoaded', function () {
    const firstHamburger = document.getElementById('hamburgerBtn0');
    const lastHamburger = document.getElementById('hamburgerBtn1');
    const navbar = document.querySelector('.navbar');
    
    // Add event listener for button click
    firstHamburger.addEventListener('click', function () {
        navbar.classList.remove('duration-500');
        navbar.classList.add('translate-x-full');           
        lastHamburger.classList.remove('hidden');
    });

    // Add event listener for button click
    lastHamburger.addEventListener('click', function () {
        navbar.classList.remove('translate-x-full');
        navbar.classList.add('translate-x-0');
        navbar.classList.add('duration-500');
        lastHamburger.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});