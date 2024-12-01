
const images = [
    "https://via.placeholder.com/550",
    "https://via.placeholder.com/550",
    "https://via.placeholder.com/550",
    "https://via.placeholder.com/550"
];

let currentIndex = 0;

function openOverlay(index) {
    currentIndex = index;
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    overlayImage.src = images[currentIndex];
    overlay.style.display = "flex";
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const overlayImage = document.getElementById("overlay-image");
    overlayImage.src = images[currentIndex];
}
