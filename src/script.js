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