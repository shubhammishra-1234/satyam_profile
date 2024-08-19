document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper for portfolio section
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Show loading screen when a specific action occurs
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        showDownloadingScreen();
        setTimeout(hideDownloadingScreen, 20000); // Hide after 20 seconds (20,000 milliseconds)
    });

    function showDownloadingScreen() {
        document.getElementById('downloadingScreen').style.display = 'flex';
    }

    function hideDownloadingScreen() {
        document.getElementById('downloadingScreen').style.display = 'none';
    }
});
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.style.backgroundImage.slice(5, -2); // Extract URL from background-image
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
